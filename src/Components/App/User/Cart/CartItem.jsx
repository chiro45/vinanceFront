import { MDBBtn, MDBIcon } from "mdb-react-ui-kit"
import { useDispatch } from "react-redux"
import Swal from "sweetalert2"
import { deleteItemToCart } from "../../../../Actions/Cart"
import "./Cart.scss"
export const CartItem = ({item}) => {
    const dispatch  = useDispatch()
    const handleDelete = ()=>{
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: '¿Deseas eliminar el producto del carrito?',
            text: "Eliminar producto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar!',
            cancelButtonText: 'No, cancelar!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                'Eliminado!',
                'Elelminado correctamente.',
                'success'
              )
              dispatch(deleteItemToCart(item.item))
            } 
          })
    
   
    }
  return (
    <div className="itemCart">
    <div className="itemCartProps">
    <p>Nombre de producto: {item.item.name}</p>
    <p>Cantidad:{item.cant}</p>
    <p>Precio del producto: {item.item.price }</p>
    {item.cant >1
        ? <p>Precio a pagar: {item.item.price * item.cant}</p>
        : null
    }
    <div>
     <MDBBtn onClick={handleDelete} color="danger">Eliminar del carrito <MDBIcon fas icon="trash-alt" /></MDBBtn>

    </div>
    </div>
   <div>
   <img src={item.item.images ? item.item.images[0].image : ""}/>
   </div>

    </div>
  )
}
