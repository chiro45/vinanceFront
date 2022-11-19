
import { MDBBtn, MDBIcon, MDBSelect } from "mdb-react-ui-kit";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useForm } from "../../../../../../Hooks/useForm";

import "../../Modals.scss"
import "../ModalModify.scss"

export const CreateWinesModify= ({
    vino,
    imagesWine = [],
    handlePHOTO,
    handleOpenModal,
    handleFileChange,
    handleDeleteImg,
    deleteElement,
    setImagesWines,
    getAllWInes 
    }) => {
      useEffect(() => {
        setImagesWines(vino.images)
      }, []);
      const [formValues, handleInputChange] = useForm({
        //wines
        name: (vino !== null && vino.type ==="Wines") ? vino.name: "",
        description:(vino !== null && vino.type ==="Wines") ? vino.description: "",
        price: (vino !== null  && vino.type ==="Wines")? vino.price: 0,
        stock: (vino !== null && vino.type ==="Wines") ? vino.stock: 0,
        active:(vino !== null && vino.type ==="Wines") ? vino.active: true,
        brand:(vino !== null && vino.type ==="Wines") ? vino.brand.brand: "",
        category:(vino !== null && vino.type ==="Wines") ? vino.category.id: "",
        varietal:(vino !== null && vino.type ==="Wines") ? vino.varietal.id: "",
       
    
      })
    
    const {
      name,
      description,
      price,
      stock,
      active,
      brand,
      category,
      varietal
      } = formValues


      const handleSelect = (e, type) => {
         
        if (type === "varietal") {
          varietal = e.value
        } else {
         category = e.value
        }
    
      }

      const modify =  async() => {
        console.log(formValues)
        const token = localStorage.getItem("token")
          //fetch brand
          let idBrand = {}
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
              idBrand  = data
            })
            .catch((err) => console.warn(err));
           //fetch wines
    
           await fetch(`${process.env.REACT_APP_URLBASE}wines/${vino.id}`, {
             method: "PUT",
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
               brand: { id: `${idBrand.id}` },
               category: { id: `${category}`},
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
              getAllWInes()
               handleOpenModal()
               {}
             })
             .catch((err) => {
               console.log(err)
               Swal.fire("Error", "Intenta nuevamente", "error")
             });
            }
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
                <textarea className="textAreaDescription" type={"text"} placeholder="Descripttion" value={description} name="description" onChange={handleInputChange} />
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
              <div className="containerButtonsOpt">
              <MDBBtn className="ButtonModal" onClick={() => { modify() }}> Modificar vino<MDBIcon fas icon="plus" /></MDBBtn>
              <MDBBtn className="ButtonModal" onClick={() => { deleteElement("Wines") }}> Eliminar vino <MDBIcon fas icon="plus" /></MDBBtn>
              </div>
            </div>
  )
}
