
import { useState } from "react"

import Modal from "react-modal/lib/components/Modal";

import { startUploading } from "../../../../../Helpers/fileUpload";
import Swal from "sweetalert2";


import "../ModalWInes/../Modals.scss"
import { AccessoriesCreateModify } from "./ModifyAccesories/AccessoriesCreateModify";
import { CreateWinesModify } from "./ModifyWines/CreateWinesModify";



export const ModalModify = ({ openModal, handleOpenModal,vino, type, 
getAllWInes  }) => {
  

 
  const [imagesWine, setImagesWines] = useState([])
  const [imagesAccesories, setImagesAccesories] = useState( [])
 
  const deleteElement = (typeDelete)=>{
  
    const token = localStorage.getItem("token")
    fetch(`${process.env.REACT_APP_URLBASE}${typeDelete=== "Wines" ? "Wines": "Accessories"}/${vino.id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      }
    })
      .then((response) => {
        getAllWInes() 
        closeModal()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Producto ha eliminado correctamente!',
          showConfirmButton: false,
          timer: 800
        })
        response.json() 
    })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
  


  const closeModal = () => {
    handleOpenModal()

  };
  //evento que detecta que cambie
  const handleFileChange = async (e) => {

    const file = e.target.files[0];
    //si el file existe emtonces se produce el disparo de actualizacion
    if (file) {
      if (type === "Wines") {
        startUploading(file, setImagesWines, imagesWine)
      } else {
        startUploading(file, setImagesAccesories, imagesAccesories)

      }
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
          <h1>Modificar un producto</h1>
        </div>
       
        {
          type === "Wines"
            ?
            <CreateWinesModify
              vino={vino}
              handleOpenModal={handleOpenModal}
              setImagesWines={setImagesWines}
              handlePHOTO={handlePHOTO}
              imagesWine={imagesWine}
              handleFileChange={handleFileChange}
              handleDeleteImg={handleDeleteImg}
              deleteElement={deleteElement}
              getAllWInes={getAllWInes}
            />

            :
            <AccessoriesCreateModify
              vino={vino}
              handleOpenModal={handleOpenModal}
              setImagesAccesories={setImagesAccesories}
              handlePHOTO={handlePHOTO}
              imagesAccesories={imagesAccesories}
              handleFileChange={handleFileChange}
              handleDeleteImg={handleDeleteImg}
              deleteElement={deleteElement}
              getAllWInes={getAllWInes}
            />
        }
      </div>
    </Modal>
  );
};


