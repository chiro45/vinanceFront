

import { MDBBtn, MDBIcon, MDBSelect } from "mdb-react-ui-kit";
import { useEffect, useState } from "react"

import Modal from "react-modal/lib/components/Modal";
import "../Modals.scss"
import { useForm } from "../../../../../Hooks/useForm"
import { startUploading } from "../../../../../Helpers/fileUpload";
import Swal from "sweetalert2";

export const ModalWines = ({ openModal, handleOpenModal }) => {

  const [formValues, handleInputChange] = useForm({
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
    brandAccesories: "",
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
    brandAccesories,
  } = formValues
  const [imagesWine, setImagesWines] = useState([])
  const [imagesAccesories, setImagesAccesories] = useState([])




  const create = (typeFecth) => {
    const token = localStorage.getItem("token")
    console.log(
      "name", name,
      "description", description,
      "price", price,
      "stock", stock,
      "active", active,
      "brand", brand,
      "category", category,
      "varietal", varietal,
    )
    if (typeFecth === "wines") {
      fetch(`${process.env.REACT_APP_URLBASE}wines`, {
        method: "POST",
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
          brand: { brand: `${brand}` },
          category: { id: `${category}` },
          varietal: { id: `${varietal}` },
          imagesWine: imagesWine
        })
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    } else {
      fetch(`${process.env.REACT_APP_URLBASE}accesories`, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          // name: name,
          // description: description,
          // price: price,
          // stock: stock,
          // active: active,
          // brand: { brand: `${brand}` },
          // category: { id: `${category}` },
          // varietal: { id: `${varietal}` },
          // imagesWine: imagesWine
        })
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    }

  }


  const closeModal = () => {
    setImagesWines([])
    handleOpenModal()
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
            <div className="ContainerCreateWines">
              <div className="ContainerCreateWines__Title" >
                <h1>Vinos</h1>
              </div>
              <div className="ContainerCreateWines__inputs">
                <div>
                  <label>Nombre</label>
                  <input type={"text"} style={{ width: "86%" }} placeholder="Nombre del vino" value={name} name="name" onChange={handleInputChange} />
                </div>
                <div>
                  <label>Marca</label>
                  <input type={"text"} style={{ width: "88%" }} placeholder="Marca" value={brand} name="brand" onChange={handleInputChange} />
                </div>
                <div>
                  <label>Precio</label>
                  <input type={"number"} placeholder="Precio" value={price} name="price" onChange={handleInputChange} />
                  <label>Stock</label>
                  <input type={"number"} placeholder="Stock" value={stock} name="stock" onChange={handleInputChange} />
                </div>
                <div>

                  <label>Active</label>
                  <input type={"checkbox"} value={active} name="active" checked={active} onChange={handleInputChange} />

                </div>
                <textarea type={"text"} placeholder="Descripttion" value={description} name="description" onChange={handleInputChange} />
              </div>
              <div className="slectsWines">
                <div>
                  <label>Varietal</label>
                  <MDBSelect
                    data={[
                      { text: "Malbec", value: 1 },
                      { text: "Cabernet Suavignon", value: 2 },
                      { text: "Suavignon Blanc", value: 3 },
                      { text: "Cabernet Franc", value: 4 }

                    ]}
                    onValueChange={(e) => { handleSelect(e, "varietal") }}
                  />
                </div>
                <div>
                  <label>Tipo</label>
                  <MDBSelect
                    data={[
                      { text: "Tinto", value: 1 },
                      { text: "Rose", value: 2 },
                      { text: "Blanco", value: 3 }
                    ]}
                    onValueChange={(e) => { handleSelect(e, "tipo") }}

                  />
                </div>
              </div>
              <div className="containerAddPicture">
                <MDBBtn onClick={handlePHOTO}>Añade una foto <MDBIcon fas icon="camera" /></MDBBtn>
              </div>
              <input id='fileSelector'
                type='file'
                name='file'
                style={{ display: "none" }}
                onChange={handleFileChange}
              />

              <div className="containerIMgs">
                {

                  imagesWine.map((el, i) => (
                    <div className="containerImg">
                      <img src={el.image} />

                      <MDBIcon onClick={() => handleDeleteImg('wines', i)} fas icon="trash-alt" />
                    </div>
                  ))
                }

              </div>
              <MDBBtn onClick={() => { create("wines") }}>Crear Vino <MDBIcon fas icon="plus" /></MDBBtn>
            </div>

            :
            <div className="ContainerCreateWines">
              <div className="ContainerCreateWines__Title" >
                <h1>Accesorios</h1>
              </div>
              <div className="ContainerCreateWines__inputs">
                <div>
                  <label>Nombre</label>
                  <input type={"text"} style={{ width: "86%" }} placeholder="Nombre del vino" value={nameAccesories} name="nameAccesories" onChange={handleInputChange} />
                </div>
                <div>
                  <label>Marca</label>
                  <input type={"text"} style={{ width: "88%" }} placeholder="Marca" value={brandAccesories} name="brandAccesories" onChange={handleInputChange} />
                </div>
                <div>
                  <label>Precio</label>
                  <input type={"number"} placeholder="Precio" value={priceAccesories} name="priceAccesories" onChange={handleInputChange} />
                  <label>Stock</label>
                  <input type={"number"} placeholder="Stock" value={stockAccesories} name="stockAccesories" onChange={handleInputChange} />
                </div>
                <div>

                  <label>Active</label>
                  <input type={"checkbox"} value={active} name="activeAccesories" checked={activeAccesories} onChange={handleInputChange} />

                </div>
                <textarea type={"text"} placeholder="Description" value={descriptionAccesories} name="descriptionAccesories" onChange={handleInputChange} />
              </div>


              <div className="containerAddPicture">
                <MDBBtn onClick={handlePHOTO}>Añade una foto <MDBIcon fas icon="camera" /></MDBBtn>
              </div>
              <input id='fileSelector'
                type='file'
                name='file'
                style={{ display: "none" }}
                onChange={handleFileChange}
              />

              <div className="containerIMgs">
                {

                  imagesAccesories.map((el, i) => (
                    <div className="containerImg">
                      <img src={el.image} />

                      <MDBIcon onClick={() => handleDeleteImg('accesories', i)} fas icon="trash-alt" />
                    </div>
                  ))
                }

              </div>
              <MDBBtn onClick={() => { create("accesories") }}>Crear Accesorio <MDBIcon fas icon="plus" /></MDBBtn>
            </div>


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