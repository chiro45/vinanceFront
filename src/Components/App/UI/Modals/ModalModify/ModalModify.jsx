

import { MDBBtn } from "mdb-react-ui-kit";
import {  useEffect, useState } from "react"

import Modal from "react-modal/lib/components/Modal";
import { useForm } from "../../../../../Hooks/useForm"
import { startUploading } from "../../../../../Helpers/fileUpload";
import Swal from "sweetalert2";


import "../ModalWInes/../Modals.scss"
import { AccessoriesCreateModify } from "./ModifyAccesories/AccessoriesCreateModify ";
import { CreateWinesModify } from "./ModifyWines/CreateWinesModify";
import { useSelector } from "react-redux";



export const ModalModify = ({ openModal, handleOpenModal,vino, type }) => {

  const [formValues, handleInputChange, reset] = useForm({
    //wines
    name: vino !== null && type ==="wines" ? vino.name: "",
    description:vino !== null && type ==="wines" ? vino.description: "",
    price: vino !== null  && type ==="wines"? vino.price: 0,
    stock: vino !== null && type ==="wines" ? vino.stock: 0,
    active:vino !== null && type ==="wines" ? vino.active: true,
    brand:vino !== null && type ==="wines" ? vino.brand.brand: "",
    category:vino !== null && type ==="wines" ? vino.category.category: "",
    varietal:vino !== null && type ==="wines" ? vino.varietal.varietal: "",
    //accesories
    nameAccesories: vino !== null && type ==="accessories" ? vino.name: "",
    descriptionAccesories: vino !== null && type ==="accessories" ? vino.description: "",
    priceAccesories: vino !== null && type ==="accessories" ? vino.price: 0,
    stockAccesories: vino !== null && type ==="accessories" ? vino.stock: 0,
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
    activeAccesories,

  } = formValues
  const [imagesWine, setImagesWines] = useState(vino ? vino.imagesWine : [])
  const [imagesAccesories, setImagesAccesories] = useState(vino ? vino.imagesAccesory : [])




  const create =  (typeFecth ) => {
    console.log(typeFecth)
    const token = localStorage.getItem("token")
    if (typeFecth === "wines") {
      //fetch brand
      const idBrand = {}
      fetch(`${process.env.REACT_APP_URLBASE}brands/searchOrSave`, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          brand: brand
        })
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
      //fetch wines
      fetch(`${process.env.REACT_APP_URLBASE}wines/${vino.id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json, text/plain",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: name,
          description: description,
          price: price,
          stock: stock,
          active: active,
          brand: { id: `${idBrand.id}` },
          category: { id: `${category}` },
          varietal: { id: `${varietal}` },
          imagesWine: imagesWine
        })
      })
        .then((response) => {})
        .then((data) => {
          //handleOpenModal()
          console.log(data)
        })
        .catch((err) => {
          Swal.fire("Error", "Intenta nuevamente", "error")
          console.log(err)
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
          imagesAccesory: imagesAccesories,
        })
      })
        .then((response) => response.json())
        .then((data) => {
          handleOpenModal()
          console.log(data)
        })
        .catch((err) => {
          Swal.fire("Error", "Intenta nuevamente", "error")
          console.log(err)
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
  const [selectCreate, setSelectCreate] = useState(type )


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
            <CreateWinesModify
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
            <AccessoriesCreateModify
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


