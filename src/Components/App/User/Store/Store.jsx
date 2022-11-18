
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import { CardItemList } from "../../UI/CardsItemList/CardItemList"

import { Header } from "../../UI/Header/Header"
import { ModalWines } from "../../UI/Modals/ModalWInes/ModalWines"
import { NavBarStore } from "./NavBarStore/NavBarStore"
import "./Store.scss"
export const Store = () => {

  const user = useSelector(state => state.userReducer)
  const [userMode, setUserMode] = useState("user")
  const [Search, setSearch] = useState(true)
  const [openModal, setOpenModal] = useState(false)
  const [fetchType, setFetchType] = useState("wines/paged")
  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }
  const [wines, setWines] = useState([])
  const [pageable, setPageable] = useState(0)
  const [actualPage, setActualPage] = useState(0)

  const handlePageable = (option) => {
    if (actualPage < pageable && option === "increment") {
      setActualPage(actualPage + 1)
    } else if (actualPage >= 1 && option === "decrement") {
      setActualPage(actualPage - 1)
    }
  }
  useEffect(() => {
    if (Search === true) {
      getAllWInes()
    }
  }, [actualPage])
  
  useEffect(() => {
    getAllWInes()
    setSearch(true)
  }, [fetchType])

  const getAllWInes = () => {

    const token = localStorage.getItem("token")
    //TODO: tipo dinamico
    fetch(`${process.env.REACT_APP_URLBASE}${fetchType}/${actualPage}`, {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setPageable(data.totalPages - 1)
        setWines(data.content)

      })
      .catch((err) => console.log(err));

  }



  useEffect(() => {
    if (user.rol[0].authority === "ROLE_SELLER") {
      setUserMode("seller")
    } else if (user.rol[0].authority === "ROLE_USER") {
      setUserMode("user")
    }
  }, [user]);
  return (
    <div >
      <Header
        setWines={setWines}
        Search={Search}
        setSearch={setSearch}
        setPageable={setPageable}
        setActualPage={setActualPage}
        actualPage={actualPage} />
      <ModalWines
        getAllWInes={getAllWInes}
        openModal={openModal}
        handleOpenModal={handleOpenModal}
      />
      <div className="containerPrincipalStore">
        <div className="storeContainer">
          <NavBarStore
            setActualPage={setActualPage}
            setFetchType={setFetchType} />
          <div >
            {userMode === "seller"
              ?
              <div className="CardContainerItemList__buttonStore">

                <MDBBtn onClick={() => { setOpenModal(!openModal) }}>Nuevo producto</MDBBtn>
              </div>
              : null
            }
            {
              pageable > 1
                ?
                <div className="containerPaginate">
                  <div className="containerNUmber">
                    <p>{actualPage + 1}</p>
                  </div>
                  <MDBBtn onClick={() => { handlePageable("decrement") }}><MDBIcon fas icon="angle-double-left" /></MDBBtn>
                  <MDBBtn onClick={() => { handlePageable("increment") }}><MDBIcon fas icon="angle-double-right" /></MDBBtn>
                  <div className="containerNUmber">
                    <p>{pageable + 1}</p>
                  </div>
                </div>
                : null
            }
            <div className="storeContainerStore">
              {
                (wines !== undefined  && wines.length > 1)
                  ?
                  wines.map((vino, i) => (
                    vino.active=== false && userMode !== "seller"
                    ? null
                    : <div key={i} className="list animate__animated animate__animated">
                    <CardItemList
                      getAllWInes={getAllWInes}
                      type={vino.type}
                      vino={vino}
                      userMode={userMode}
                    />
                  </div>

                  ))
                  : <h1>Esperando Vinos</h1>
              }
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}
