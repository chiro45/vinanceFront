

import { MDBBtn, MDBIcon } from "mdb-react-ui-kit"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import "./Header.scss"
import { removeUser } from "../../../../Reducers/UserReducer"
import { useForm } from "../../../../Hooks/useForm"
import { useEffect } from "react"
import Swal from "sweetalert2"
import { removesToCart } from "../../../../Actions/Cart"
export const Header = ({setWines, setPageable, actualPage,setActualPage, setSearch, Search}) => {

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const [formValues,handleInputChange] = useForm({
    search : ""
  })
  const {search} = formValues

  useEffect(()=>{
    if(Search===false){
      handleSearchWines()
    }
  },[actualPage])


  const handleSearchWines = ()=>{
    const token = localStorage.getItem("token")
    fetch(`${process.env.REACT_APP_URLBASE}wines/searchBarPaged/${search}/${actualPage}`,{
    method: "GET",
    headers: {
          Accept:
            "application/json, text/plain",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
            }})     
            .then((response) => response.json())
            .then((data) => {
              setWines(data.content)
              setPageable(data.totalPages -1)
            }
              )
            .catch((err) => console.log(err))
  }
  return (
    <div className="HeaderContainerPrincipal">
      <div className="HeaderContainerPricicpal__containerElements">
        <div onClick={()=>navigate("/homeuser")}  className="HeaderContainerPricicpal-containerLogo">
          <h2 style={{cursor: "pointer", fontSize:"2.4vw", color: "#fff", fontStyle:"italic", margin:"0"}}>Vinance</h2>
          <div>
              <img src="https://d2r9epyceweg5n.cloudfront.net/stores/097/048/themes/common/logo-1852450306-1480016030-12b8c3de573751b06e7fa6bd160efeda1512201795-480-0.png?0" alt="Wines Argentina Express" class="logo-img" />
          </div>
         </div>
        <div className="HeaderContainerPricicpal__container-search">
          <div className="HeaderContainerPricicpal__input">
              <input
                placeholder={"Busca un producto"} 
                onChange={handleInputChange} 
                value={search}
                name="search"
                className="inputSearch"
                type="text"/>
          </div>
          <div className="containerSearchButton">
            <MDBBtn onClick={()=>{
              setActualPage(0)
              setSearch(false)
              handleSearchWines()
            }}>Buscar <MDBIcon fas icon="search" /></MDBBtn>
          </div>
          

        </div>
        <div className="HeaderContainerPricicpal__container-itemsUser">
            <ul>
              {
              [
                {text: "Mis Compras",icon:"clipboard-check", path:"/store"},
                {text: "Carrito ",icon:"shopping-cart", path:"/cart"},
                {text: "Cerrar Sesion",icon:"sign-in-alt", path:"/login"},
              
              ].map(({text, icon, path},i)=>(
                <li key={i} onClick={()=>{

                  if(text==="Cerrar Sesion"){
                    dispatch(removeUser())
                    dispatch(removesToCart())
                    localStorage.removeItem("token")
                    navigate(path)
                  }else if(text ==="Mis Compras"){
                    Swal.fire("Pr??ximamente!", "Estamos trabajando en ello.", "warning")
                    
                  }else{
                    navigate(path)
                  } 
                }} >{text} <MDBIcon fas icon={`${icon}`} /></li>
              ))

              }
           
            </ul>
        </div>
      </div>
    </div>
  )
}
