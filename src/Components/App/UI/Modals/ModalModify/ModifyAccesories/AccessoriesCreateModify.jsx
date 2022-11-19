import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useForm } from "../../../../../../Hooks/useForm";

import "../../Modals.scss"
import "../ModalModify.scss"

export const AccessoriesCreateModify = ({
     imagesAccesories = [], 
     handlePHOTO, 
     handleFileChange,
     handleDeleteImg,
     deleteElement,
     vino,
     setImagesAccesories,
     handleOpenModal,
     getAllWInes
    }) => {
      useEffect(() => {
        setImagesAccesories(vino.images)
      }, []);
      const [formValues, handleInputChange, ] = useForm({
        //accesories
        nameAccesories: (vino !== null && vino.type ==="Accessories") ? vino.name: "",
        descriptionAccesories: (vino !== null && vino.type ==="Accessories") ? vino.description: "",
        priceAccesories: (vino !== null && vino.type ==="Accessories") ? vino.price: 0,
        stockAccesories: (vino !== null && vino.type ==="Accessories") ? vino.stock: 0,
        activeAccesories: (vino !== null && vino.type ==="Accessories") ? vino.active : true,
    
      })
  const{
     //accesories
     nameAccesories,
     descriptionAccesories,
     priceAccesories,
     stockAccesories,
     activeAccesories,
   } = formValues
  
   const modify =  async() => {
    const token = localStorage.getItem("token")
  
      fetch(`${process.env.REACT_APP_URLBASE}accessories/${vino.id}`, {
        method: "PUT",
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
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Producto Modificado correctamente!',
            showConfirmButton: false,
            timer: 800
          })
          handleOpenModal()
          getAllWInes()
        })
        .catch((err) => {
          Swal.fire("Error", "Intenta nuevamente", "error")
          console.log(err)
        });
  }
    return (
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
                  <label>Precio</label>
                  <input type={"number"} placeholder="Precio" value={priceAccesories} name="priceAccesories" onChange={handleInputChange} />
                  <label>Stock</label>
                  <input type={"number"} placeholder="Stock" value={stockAccesories} name="stockAccesories" onChange={handleInputChange} />
                </div>
                <div>

                  <label>Active</label>
                  <input type={"checkbox"} value={activeAccesories} name="activeAccesories" checked={activeAccesories} onChange={handleInputChange} />

                </div>
                <textarea className="textAreaDescription"   type={"text"} placeholder="Description" value={descriptionAccesories} name="descriptionAccesories" onChange={handleInputChange} />
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
                    <div key={i} className="containerImg">
                      <img src={el.image} />

                      <MDBIcon onClick={() => handleDeleteImg('accesories', i)} fas icon="trash-alt" />
                    </div>
                  ))
                }

              </div>
              <div className="containerButtonsOpt">
              <MDBBtn className="ButtonModal"  onClick={() => { modify() }}>Modificar Accesorio <MDBIcon fas icon="plus" /></MDBBtn>
              <MDBBtn className="ButtonModal"  onClick={() => { deleteElement("Accesories") }}>Eliminar Accesorio <MDBIcon fas icon="plus" /></MDBBtn>
              </div>
              </div>
  )
}
