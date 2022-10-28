
import { useNavigate } from "react-router-dom"
import { CardItemList } from "../../UI/CardsItemList/CardItemList"
import { Carrousel } from "../../UI/Carrousel/CarrouselHome/Carrousel"
import { Footer } from "../../UI/Footer/Footer"
import { Header } from "../../UI/Header/Header"


import turismo from "../../../../Assets/imgs/turismo.jpeg"

import "./Home.scss"

export const Home = () => {
 
const arrProductSelected = [
  {
    id:0,
    src:"https://hiperlibertad.vteximg.com.br/arquivos/ids/161254-1000-1000/Vino-CHACABUCO-malbec-750-cc-Vino-CHACABUCO-malbec-750-cc-1-5759.jpg?v=637287210267970000",
    varietal:"Vino Tinto",
    name:"Vino Chacabuco Malbec",
    price:"1506",
    discount: "2550"
},{
  id:1,
  src:"https://jumboargentina.vtexassets.com/arquivos/ids/624747/Vino-Chacabuco-Cabernet-Botella-550-Ml-1-37304.jpg?v=637510296794330000",
  varietal:"Cabernet Suavignon ",
  name:"Vino Chacabuco Malbec",
  price:"1506",
  discount: "2550"
},
{
  id:2,
  src:"https://hiperlibertad.vteximg.com.br/arquivos/ids/161254-1000-1000/Vino-CHACABUCO-malbec-750-cc-Vino-CHACABUCO-malbec-750-cc-1-5759.jpg?v=637287210267970000",
  varietal:"Vino Rose",
  name:"Vino Chacabuco Malbec",
  price:"1506",
  discount: "2550"
},{
id:3,
src:"https://cepadevinos.com/wp-content/uploads/2018/04/ESCORIHUELA.jpg",
varietal:"Vino Cabernet Frac",
name:"Vino Chacabuco Malbec",
price:"1500",
discount: "2550"
}

]
const navigate = useNavigate()
  return (
    <div className="ContainerHome">
      <Header/>
      <Carrousel/>
      <div className="Home__containerprodDestacados">
        <b></b>
        <h2>Ofertas</h2>
        <b></b>
      </div>
      
        <div className="productSelected">
          
        {
          arrProductSelected.map((vino,i)=>(
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
              {path:"/accesorios",text:"Accesorios", src:"https://www.dulcehogar.mx/wp-content/uploads/2020/04/Accesorios-para-vino-0.jpg"},
              {path:"/vinos",text:"Vinos Premium", src:"https://cdn.shopify.com/s/files/1/0425/0642/0390/products/ComiteWines-Foto-_MISEREREOK-IMG_5132_7a6ca59e-a932-40be-a0ea-63900c11c426.jpg?v=1623092025"},
              {path:"/turismo",text:"Turismo", src:turismo}
              ].map(({text, src,path})=>(
                <div onClick={()=>{navigate(path)}} style={{backgroundImage: `url(${src})`}} className="containerAccesories">
                  <h2>{text}</h2>
                </div>
              ))
            }
          </div>
       
      
      
      
      <Footer/>
    
    </div>
  )
}
