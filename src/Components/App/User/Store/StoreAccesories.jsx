
import { MDBBtn } from "mdb-react-ui-kit"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import { CardItemList } from "../../UI/CardsItemList/CardItemList"

import { Header } from "../../UI/Header/Header"
import { ModalWines } from "../../UI/Modals/ModalWInes/ModalWines"
import "./Store.scss"
export const StoreAccesories = () => {

const user = useSelector(state => state.userReducer)
const [userMode, setUserMode] = useState("user")
const [openModal, setOpenModal]= useState(false)
const handleOpenModal = ()=>{
  setOpenModal(!openModal)
}
const [wines, setWines] = useState([ ])
const getAllWInes = ()=>{
  const token =  localStorage.getItem("token")
        
        fetch(`${process.env.REACT_APP_URLBASE}accessories`, {
            method: "GET",
            headers: {
                Accept: "application/json, text/plain",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            }
          })
            .then((response) => response.json())
            .then((data) => {
              if(data.length > 0){
                setWines(data)
                console.log(data)
              }})
            .catch((err) => console.log(err));
          
}

useEffect(()=>{getAllWInes()},[])

useEffect(() => {
  if(user.rol[0].authority === "ROLE_SELLER"){
    setUserMode("seller")
  }else if (user.rol[0].authority === "ROLE_USER"  ){
    setUserMode("user")
  }
}, [user]);
  return (
    <div >
      <Header />
      <ModalWines
        getAllWInes={getAllWInes}
        openModal={openModal}
        handleOpenModal={handleOpenModal}
      />
      <div className="containerPrincipalStore">
        <div className="storeContainer">
          <div className="storeContainerBar">
            <div className="divList">
              <h2 className="titleList">Varietal</h2>
              <ul>
                <li>Malbec</li>
                <li>Suavignon Blanc</li>
                <li>Cabernet Suavignon</li>
                <li>Cabernet Franc</li>
              </ul>
            </div>
            <div className="divList">
              <h2 className="titleList">Tipo</h2>
              <ul>
                <li>Rosado</li>
                <li>Tinto</li>
                <li>Blanco</li>
                <li></li>
              </ul>
            </div>
            <div className="divList">
              <h2 className="titleList">Marcas</h2>
              <ul>
                <li>Los Haroldos</li>
                <li>Zuccardi</li>
                <li>Durigutti</li>
              </ul>
            </div>
            <div className="divList">
              <h2 className="titleList">Precio</h2>
              <ul>
                <li>Mayor precio</li>
                <li>Menor Precio</li>
              </ul>
            </div>
          </div>
          <div >
         { userMode=== "seller"
         ?
           <div className="CardContainerItemList__buttonStore">
      
           <MDBBtn onClick={()=>{setOpenModal(!openModal)}}>Nuevo producto</MDBBtn>
          </div>
           :null
         }
          <div className="storeContainerStore">
         
            {
              wines.map((vino, i) => (
                <div key={i} className="list">
                  <CardItemList
                    type={"accesories"}
                    vino={vino}
                    userMode={userMode}
                  />
                </div>
              ))
            } 


          </div>
          </div>
        </div>

      </div>

    </div>
  )
}
