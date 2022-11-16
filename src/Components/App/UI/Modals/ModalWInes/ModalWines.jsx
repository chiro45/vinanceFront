

import { MDBBtn, MDBIcon, MDBSelect } from "mdb-react-ui-kit";
import { useEffect, useState } from "react"

import Modal from "react-modal/lib/components/Modal";
import "../Modals.scss"
import { useForm } from "../../../../../Hooks/useForm"
import { startUploading } from "../../../../../Helpers/fileUpload";
import Swal from "sweetalert2";
import { CreateWines } from "./AccesoryProductCreate/CreateWines";
import { AccessoriesCreate } from "./WineProductCreate/AccessoriesCreate";


export const ModalWines = ({ openModal, handleOpenModal, getAllWInes }) => {

  const [formValues, handleInputChange, reset] = useForm({
    //wines
    name: "",
    description: "",
    price: 0,
    stock: 0,
    active: true,
    brand: "",
    category: 0,
    varietal: 0,
    //accesories
    nameAccesories: "",
    descriptionAccesories: "",
    priceAccesories: 0,
    stockAccesories: 0,
    activeAccesories: true,

  })
  const {
    name,
    description,
    price,
    stock,
    active,
    brand,
    category,
    varietal,
    //accesories
    nameAccesories,
    descriptionAccesories,
    priceAccesories,
    stockAccesories,
    activeAccesories

  } = formValues
  const [imagesWine, setImagesWines] = useState([])
  const [imagesAccesories, setImagesAccesories] = useState([])
  const create = async (typeFecth) => {
    const token = localStorage.getItem("token")
    let isBrand = {} 
    if (typeFecth === "wines") {
      //fetch brand
     await fetch(`${process.env.REACT_APP_URLBASE}brands/searchOrSave`, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          brand: brand
        })
      })
        .then((response) => response.json())
        .then((data) => {
          console.warn(data)
          isBrand  = data
        })
        .catch((err) => console.warn(err));
       //fetch wines

       await fetch(`${process.env.REACT_APP_URLBASE}wines`, {
         method: "POST",
         headers: {
           Accept: "application/json, text/plain",
           "Content-Type": "application/json",
           "Authorization": `Bearer ${token}`
         },
         body: JSON.stringify({
           name: name,
           description: description,
           price: price,
           stock: stock,
           active: active,
           brand: { id: `${isBrand.id}` },
           category: { id: `${category}` },
           varietal: { id: `${varietal}` },
           images: imagesWine
         })
       })
         .then((response) => response.json())
         .then((data) => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Producto creado correctamente!',
            showConfirmButton: false,
            timer: 800
          })
          console.warn(data)
           handleOpenModal()
           getAllWInes()
         })
         .catch((err) => {
           Swal.fire("Error", "Intenta nuevamente", "error")
          console.warn(err)
         });
    } else {
      //fetch accesories
      fetch(`${process.env.REACT_APP_URLBASE}accessories`, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: nameAccesories,
          description: descriptionAccesories,
          price: priceAccesories,
          stock: stockAccesories,
          active: activeAccesories,
          images: imagesAccesories,
        })
      })
        .then((response) => response.json())
        .then((data) => {
          handleOpenModal()
          getAllWInes()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Producto creado correctamente!',
            showConfirmButton: false,
            timer: 800
          })
          console.warn(data)
        })
        .catch((err) => {
          Swal.fire("Error", "Intenta nuevamente", "error")
          console.warn(err)
        });
    }

  }


  const closeModal = () => {
    handleOpenModal()

    reset({
      name: "",
      description: "",
      price: 0,
      stock: 0,
      active: true,
      brand: "",
      category: 0,
      varietal: 0,
      //accesories
      nameAccesories: "",
      descriptionAccesories: "",
      priceAccesories: 0,
      stockAccesories: 0,
      activeAccesories: true
    })
    setImagesWines([])
  };
  //evento que detecta que cambie
  const handleFileChange = async (e) => {

    const file = e.target.files[0];
    //si el file existe emtonces se produce el disparo de actualizacion
    if (file) {
      if (selectCreate === "wines") {
        startUploading(file, setImagesWines, imagesWine)
      } else {
        startUploading(file, setImagesAccesories, imagesAccesories)

      }
    }

  }
  const [selectCreate, setSelectCreate] = useState("wines")


  const handleSelect = (e, type) => {

    if (type === "varietal") {
      formValues.varietal = e.value
    } else {
      formValues.category = e.value
    }

  }

  const handlePHOTO = () => {

    if (imagesWine.length < 4 && imagesAccesories.length < 4) {
      document.getElementById("fileSelector").click()
    } else {
      Swal.fire("Error", "Solo puedes tener hasta 4 imagenes", "error")
    }
  }
  const handleDeleteImg = (type, index) => {
    if (type === "wines") {
      const aux = imagesWine.filter((el, i) => i !== index)
      setImagesWines(aux)
    } else {
      const aux = imagesAccesories.filter((el, i) => i !== index)
      setImagesAccesories(aux)
    }
  }

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
        <div className="ContainerModalWINES__title">
          <h1>Crear un nuevo Producto</h1>
        </div>
        <div className="containerModalSelectCreate">
          <MDBBtn onClick={() => {
            setSelectCreate("wines")
          }}>Vino</MDBBtn>
          <MDBBtn onClick={() => {
            setSelectCreate("accesories")
          }}>Accesorio</MDBBtn>
        </div>
        {
          selectCreate === "wines"
            ?
            <CreateWines
              formValues={formValues}
              handleInputChange={handleInputChange}
              handleSelect={handleSelect}
              handlePHOTO={handlePHOTO}
              imagesWine={imagesWine}
              handleFileChange={handleFileChange}
              handleDeleteImg={handleDeleteImg}
              create={create}
            />

            :
            <AccessoriesCreate
              formValues={formValues}
              handleInputChange={handleInputChange}
              handleSelect={handleSelect}
              handlePHOTO={handlePHOTO}
              imagesAccesories={imagesAccesories}
              handleFileChange={handleFileChange}
              handleDeleteImg={handleDeleteImg}
              create={create}
            />


        }
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