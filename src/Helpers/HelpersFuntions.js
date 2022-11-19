import Swal from "sweetalert2";

const token = localStorage.getItem("token")

const baseURl = process.env.REACT_APP_URLBASE


export const fetchWinesAndProduct = async (data, endPoint, id = null, method = "GET", msgAprove, msgError, getAllWInes, handleOpenModal) => {

     await fetch(`${baseURl}${endPoint}${id !== null ?`/${id}` :""}`, {
        method: method,
        headers: {
            Accept: "application/json, text/plain",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
        .then((response) => response.json())
        .then(() => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${msgAprove}`,
                showConfirmButton: false,
                timer: 800
            })
            getAllWInes()
            handleOpenModal()
        })
        .catch((err) => {
            Swal.fire("Error", `${msgError}`, "error")
            console.warn(err)

        });
}

export const getAlls = ( fetchType,actualPage, setPageable, setWines)=>{
    //TODO: tipo dinamico
    fetch(`${baseURl}${fetchType}/${actualPage}`, {
        method: "GET",
        headers: {
          Accept: "application/json, text/plain",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        }
      })
        .then((response) => response.json())
        .then((data) => {
          setPageable(data.totalPages - 1)
          setWines(data.content)
        })
        .catch((err) => console.log(err));

    }
export const deleteElements =  (typeDelete,id, getAllWInes, closeModal )=>{
   fetch(`${baseURl}${typeDelete=== "Wines" ? "wines": "accessories"}/${id}`, {
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
        
        .catch((err) => console.log(err));
}
export const validateEmail = (email = "")=>{
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if(email.match(regex) !== null){
    return true
  }else {
    return false
  }
}