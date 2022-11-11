
import { useNavigate } from "react-router-dom"
import { CardItemList } from "../../UI/CardsItemList/CardItemList"
import { Carrousel } from "../../UI/Carrousel/CarrouselHome/Carrousel"
import { Footer } from "../../UI/Footer/Footer"



import turismo from "../../../../Assets/imgs/turismo.jpeg"
import vinos from "../../../../Assets/imgs/vinos.jpg"
import "./Home.scss"
import { MDBIcon } from "mdb-react-ui-kit"
import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../../../../Reducers/UserReducer"

export const Home = () => {
  const user = useSelector(state => state.userReducer)
  const arrProductSelected = [
    {
      id: 0,
      src: "https://hiperlibertad.vteximg.com.br/arquivos/ids/161254-1000-1000/Vino-CHACABUCO-malbec-750-cc-Vino-CHACABUCO-malbec-750-cc-1-5759.jpg?v=637287210267970000",
      varietal: "Vino Tinto",
      name: "Vino Chacabuco Malbec",
      price: "1506",
      discount: "2550"
    }, {
      id: 1,
      src: "https://jumboargentina.vtexassets.com/arquivos/ids/624747/Vino-Chacabuco-Cabernet-Botella-550-Ml-1-37304.jpg?v=637510296794330000",
      varietal: "Cabernet Suavignon ",
      name: "Vino Chacabuco Malbec",
      price: "1506",
      discount: "2550"
    },
    {
      id: 2,
      src: "https://hiperlibertad.vteximg.com.br/arquivos/ids/161254-1000-1000/Vino-CHACABUCO-malbec-750-cc-Vino-CHACABUCO-malbec-750-cc-1-5759.jpg?v=637287210267970000",
      varietal: "Vino Rose",
      name: "Vino Chacabuco Malbec",
      price: "1506",
      discount: "2550"
    }, {
      id: 3,
      src: "https://cepadevinos.com/wp-content/uploads/2018/04/ESCORIHUELA.jpg",
      varietal: "Vino Cabernet Frac",
      name: "Vino Chacabuco Malbec",
      price: "1500",
      discount: "2550"
    }

  ]
  const navigate = useNavigate()
  const dispatch = useDispatch()


  return (
    <div className="ContainerHome">
      <div className="inicio__containerHeader">
        <div className="inicioContainer">
          <div className="inicio__ContainerTitle">
            <h2>Vinance</h2>
            <div>
              <img src="https://d2r9epyceweg5n.cloudfront.net/stores/097/048/themes/common/logo-1852450306-1480016030-12b8c3de573751b06e7fa6bd160efeda1512201795-480-0.png?0" alt="Wines Argentina Express" class="logo-img" />
            </div>
          </div>
          <div className="HeaderContainerPricicpal__container-itemsUser">
            <ul>
              {
               (user.userName !== null)
                ?[
                  {text: "Store",icon:"shopping-cart", path:"/store"},
                  {text: "Mis Compras ",icon:"clipboard-check", path:"/store"},
                  {text: "Cerrar Sesion",icon:"sign-in-alt", path:"/login"},
                ].map(({ text, icon, path }, i) => (
                  <li key={i} onClick={()=>{
                    if(text==="Cerrar Sesion"){
                      dispatch(removeUser())
                      localStorage.removeItem("token")
                      navigate(path)
                    }else{
                      navigate(path)
                    } }} >{text}  <MDBIcon fas icon={`${icon}`} /></li>
                ))
                : [
                  { text: "Tienda", icon: "shopping-cart", path: "/store" },
                  { text: "Ingresar", icon: "sign-in-alt", path: "/login" },
                  { text: "Registrarse", icon: "clipboard-check", path: "/register" },

                ].map(({ text, icon, path }, i) => (
                  <li key={i} onClick={() => navigate(path)}>{text}  <MDBIcon fas icon={`${icon}`} /></li>
                ))
                
              }
            </ul>
          </div>
        </div>
      </div>
      <Carrousel />
      <div className="Home__containerprodDestacados">
        <b></b>
        <h2>Ofertas</h2>
        <b></b>
      </div>

      <div className="productSelected">

        {
          arrProductSelected.map((vino, i) => (
            <CardItemList
              key={i}
              vino={vino}
            />
          ))
        }
      </div>
      <div className="Home__containerprodDestacados">
        <b></b>
        <h2>Servicios</h2>
        <b></b>
      </div>
      <div className="Container__accesories">
        {
          [
            { path: "/accesorios", text: "Accesorios", src: "https://www.dulcehogar.mx/wp-content/uploads/2020/04/Accesorios-para-vino-0.jpg" },
            { path: "/vinos", text: "Vinos Premium", src: vinos },
            { path: "/turismo", text: "Turismo", src: turismo }
          ].map(({ text, src, path }) => (
            <div onClick={() => { navigate(path) }} style={{ backgroundImage: `url(${src})` }} className="containerAccesories">
              <h2>{text}</h2>
            </div>
          ))
        }
      </div>
      <Footer />

    </div>
  )
}
