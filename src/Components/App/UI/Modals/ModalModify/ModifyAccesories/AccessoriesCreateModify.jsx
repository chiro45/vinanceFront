import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

import "../../Modals.scss"
import "../ModalModify.scss"

export const AccessoriesCreateModify = ({
     formValues,
     imagesAccesories = [], 
     handleInputChange,
     handlePHOTO, 
     handleFileChange,
     handleDeleteImg,
     modify,
    deleteElement
    }) => {
  
  const{
     //accesories
     nameAccesories,
     descriptionAccesories,
     priceAccesories,
     stockAccesories,
     activeAccesories,
   } = formValues
  
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
                    <div className="containerImg">
                      <img src={el.image} />

                      <MDBIcon onClick={() => handleDeleteImg('accesories', i)} fas icon="trash-alt" />
                    </div>
                  ))
                }

              </div>
              <div className="containerButtonsOpt">
              <MDBBtn className="ButtonModal"  onClick={() => { modify("accesories") }}>Modificar Accesorio <MDBIcon fas icon="plus" /></MDBBtn>
              <MDBBtn className="ButtonModal"  onClick={() => { deleteElement("accesories") }}>Eliminar Accesorio <MDBIcon fas icon="plus" /></MDBBtn>
              </div>
              </div>
  )
}
