

import { MDBBtn } from "mdb-react-ui-kit";
import { useEffect, useState } from "react"

import Modal from "react-modal/lib/components/Modal";
import "../Modals.scss"
import {useForm} from"../../../../../Hooks/useForm"

export const ModalWines = ({openModal, handleOpenModal}) => {
    
    const[fomrValues, handleInputChange] = useForm({
        name:"",
        description:"",
        price: "",
        stock: "",
        active: true,
        brand:"los haroldos",
        category:"malbec",
        varietal:"blanco",
    })
    const [imagesWine , setImagesWines] =  useState([
        {image:"https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2021/05/primera-botella-vino-envejecida-espacio-sale-subasta-precio-desorbitado-2336969.jpg?itok=6GoSz_9H"},
        {image:"https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/07/11/16575341613853.jpg"},
        {image:"https://s1.eestatic.com/2017/07/01/cocinillas/cocinillas_227991510_116357430_1024x576.jpg"}
    ])
    
  
  
    
    const create = ()=>{
       const token =  localStorage.getItem("token")
        
        fetch(`${process.env.REACT_APP_URLBASE}wines`, {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({ 
                name:"Vino Toro",
                description:"Sus características organolépticas color intenso y una importante presencia tánica.Sus características organolépticas color intenso y una importante presencia tánica.Sus características organolépticas color intenso y una importante presencia tánica.Sus características organolépticas color intenso y una importante presencia tánica.",
                price: 1500,
                stock: 2050,
                active: false,
                brand:{brand:"Vino Toro2"},
                category:{id: "1"},
                varietal:{id: "2"},
                imagesWine: imagesWine
            })
          })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
          
    }
   

    const closeModal = () => {
        handleOpenModal()
      };
  return (
    <Modal
      isOpen={openModal}
      closeTimeoutMS={100}
      onRequestClose={closeModal}
      className="modallConfig"
      overlayClassName="modal-fondoAnimatedElements"
      ariaHideApp={false}
    >
       <div className="ContainerModalWINES">
        <h1>Create Wines</h1>

        <MDBBtn onClick={create}>CREATE</MDBBtn>
       </div>
    </Modal>
  );
};


/*
name
description
price
stock
active boolean
brand
category
varietal
imagesWine []

malbec 1
cs 2
sb 3
cf 4
*/