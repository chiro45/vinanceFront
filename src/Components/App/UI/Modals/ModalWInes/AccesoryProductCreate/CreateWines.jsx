


import { MDBBtn, MDBIcon, MDBSelect } from "mdb-react-ui-kit";

import "../../Modals.scss"


export const CreateWines= ({
    formValues,
    imagesWine = [],
    handleInputChange,
    handlePHOTO,
    handleSelect,
    handleFileChange,
    handleDeleteImg,
    create 
    }) => {
    const {
        name,
        description,
        price,
        stock,
        active,
        brand
      } = formValues
  return (
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
  )
}
