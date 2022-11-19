import { useDispatch, useSelector } from "react-redux"
import { HeaderHome } from "../../UI/HeaderHome/HeaderHome"
import "./Cart.scss"
import { CartItem } from "./CartItem"
import {useState, useEffect} from "react"
import { MDBBtn } from "mdb-react-ui-kit"
import Swal from "sweetalert2"
import { removesToCart } from "../../../../Actions/Cart"
export const Cart = () => {


const cart = useSelector(state => state.cart )
const [state, setstate] = useState(0);
const dispatch = useDispatch()
useEffect(() => {
   let cont = 0
    cart.cart.forEach(el=>{
        cont += el.item.price * el.cant
       
    })
    setstate( cont)
}, [cart]);
const handleCompra = ()=>{
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: '¿Desea realizar la compra?',
        text: "Realizar Compra!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, comprar!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Exelente!',
            'Compra realizada correctamente.',
            'success'
          )
          dispatch(removesToCart())
        }
      })
    }
  return (
    <div className="containerCart">
        <HeaderHome/>
        <div className="titelCart">
             <h1>Carrito:</h1>
        </div>
       <div className="containerCartProducts">
       {
         (cart.cart.length >0)
         ? cart.cart.map((el, i)=>(
            <div key={i}>
                <CartItem item={el} state={state}/>
            </div>
         )) 
         :<h1>Todavia no hay articulos en el carrito</h1>  
        }
       </div>
       <div className="containerEndCart">
        <div>
            <MDBBtn onClick={handleCompra} color="success">Confirmar Compra</MDBBtn>
        </div>
       <div className="containerTotal">
                <p>Precio total: {Math.round(state)}</p>
       </div>
       </div>
    </div>
  )
}
