
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getAlls } from "../../../../Helpers/HelpersFuntions"

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
  const [change, setChange] = useState(false)
  useEffect(() => {
    setChange(true)
    setTimeout(() => {
      setChange(false)
    }, 500)

  }, [wines])
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
    getAlls(fetchType, actualPage, setPageable, setWines)
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
            <div className={userMode === "seller" ?"containerPagination": ""}>
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
                    <p className="prevPage">{actualPage + 1}</p>
                  </div>
                  <MDBBtn onClick={() => { handlePageable("decrement") }}><MDBIcon fas icon="angle-double-left" /></MDBBtn>
                  <MDBBtn onClick={() => { handlePageable("increment") }}><MDBIcon fas icon="angle-double-right" /></MDBBtn>
                  <div className="containerNUmber">
                    <p>{pageable + 1}</p>
                  </div>
                </div>
                : null
            }
            </div>
            <div className="containersaso">
              {
                change === false
                  ?
                  <div className="storeContainerStore animate__animated animate__bounceInRight">
                    {
                      (wines !== undefined && wines.length > 1)
                        ?
                        wines.map((vino, i) => (
                          vino.active === false && userMode !== "seller"
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
                        : <div className="containerEsperandoVinos"><h1 >Esperando Vinos</h1></div>
                    }
                  </div>
                  : null
              }
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}
