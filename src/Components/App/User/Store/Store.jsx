
import { MDBBtn } from "mdb-react-ui-kit"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { CardItemList } from "../../UI/CardsItemList/CardItemList"

import { Header } from "../../UI/Header/Header"
import { ModalWines } from "../../UI/Modals/ModalWInes/ModalWines"
import { NavBarStore } from "./NavBarStore/NavBarStore"
import "./Store.scss"
export const Store = () => {

const user = useSelector(state => state.userReducer)
const [userMode, setUserMode] = useState("user")
const [openModal, setOpenModal]= useState(false)
const handleOpenModal = ()=>{
  setOpenModal(!openModal)
}
const [wines, setWines] = useState([ ])
const getAllWInes = ()=>{
  const token =  localStorage.getItem("token")
        
        fetch(`${process.env.REACT_APP_URLBASE}wines`, {
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
          <NavBarStore/>
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
                    type={"wines"}
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
