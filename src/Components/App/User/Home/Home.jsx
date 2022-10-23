import { useNavigate } from "react-router-dom"
import { CardItemList } from "../../UI/CardsItemList/CardItemList"
import { Carrousel } from "../../UI/Carrousel/CarrouselHome/Carrousel"
import { Footer } from "../../UI/Footer/Footer"
import { Header } from "../../UI/Header/Header"

import "./Home.scss"

export const Home = () => {
  const navigate = useNavigate()
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

  return (
    <div className="ContainerHome">
      <Header/>
      <Carrousel/>
      <div className="Home__containerprodDestacados">
        <b></b>
        <h2>Productos Destacados</h2>
        <b></b>
      </div>
      <div> 
        <div className="productSelected">
          
        {
          arrProductSelected.map((vino,i)=>(
            <CardItemList key={i} src={vino.src} varietal={vino.varietal} index={i} id={vino.id} name={vino.name} price={vino.price} discount={vino.discount} navigate={navigate} />
          ))
        }
        </div>
      
      </div>
      
      <Footer/>
    
    </div>
  )
}
