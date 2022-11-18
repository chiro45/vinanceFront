
import { useNavigate } from "react-router-dom"
import { CardItemList } from "../../UI/CardsItemList/CardItemList"
import { Carrousel } from "../../UI/Carrousel/CarrouselHome/Carrousel"
import { Footer } from "../../UI/Footer/Footer"
import turismo from "../../../../Assets/imgs/turismo.jpeg"
import vinos from "../../../../Assets/imgs/vinos.jpg"
import "./Home.scss"
import { HeaderHome } from "../../UI/HeaderHome/HeaderHome"


export const Home = () => {

  const arrProductSelected = [
    {
      id: 5000,
      active: true,
      brand: { id: 19, brand: 'Giorgio Gieco' },
      category: { id: 1, category: 'Malbec' },
      description: "Sus características organolépticas más  A la generosa graduación que suelen tener sus vinos se añaden tintos con un gran cuerpo, color intenso y una importante presencia tánica.",
      discount: 4356,
      images: [
        { id: 34, image: 'https://images.vivino.com/thumbs/WtMN5CptRACOR_oqitzXVw_pb_600x600.png' }
      ],
      name: "Giorgio Gieco - Malbec Special Selection ",
      price: 1500,
      stock: 2050,
      brand: { id: 2, brand: 'Cabernet Suavignon' },
      varietal: { id: 2, varietal: 'Cabernet Suavignon' },
      type: "Wines"
    },
    {
      id: 5001,
      active: true,
      brand: { id: 19, brand: 'Vino Tor' },
      category: { id: 1, category: 'Tinto' },
      description: "Sus características organolépticas más  A la generosa graduación que suelen tener sus vinos se añaden tintos con un gran cuerpo, color intenso y una importante presencia tánica.",
      discount: 4356,
      images: [
        { id: 34, image: 'https://www.andbank.es/observatoriodelinversor/wp-content/uploads/2014/10/vino.jpg' }
      ],
      name: "2016 MESA TERRACE PINOT NOIR",
      price: 1500,
      stock: 2050,
      brand: { id: 2, brand: 'Cabernet Suavignon' },
      varietal: { id: 2, varietal: 'Cabernet Suavignon' },
      type: "Wines"
    },
    {
      id: 5002,
      active: true,
      brand: { id: 19, brand: 'Vino Tor' },
      category: { id: 1, category: 'Tinto' },
      description: "Sus características organolépticas más  A la generosa graduación que suelen tener sus vinos se añaden tintos con un gran cuerpo, color intenso y una importante presencia tánica.",
      discount: 4356,
      images: [
        { id: 34, image: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/812/913/products/es-cs-161-66ec632412bcb31d3a15435061546040-1024-1024.jpg' }
      ],
      name: "Vino Alta Vista Estate Premium",
      price: 1500,
      stock: 2050,
      brand: { id: 2, brand: 'Cabernet Suavignon' },
      varietal: { id: 2, varietal: 'Cabernet Suavignon' },
      type: "Wines"
    },
    {
      id: 5003,
      active: true,
      brand: { id: 19, brand: 'Vino Tor' },
      category: { id: 1, category: 'Tinto' },
      description: "Sus características organolépticas más  A la generosa graduación que suelen tener sus vinos se añaden tintos con un gran cuerpo, color intenso y una importante presencia tánica.",
      discount: 4356,
      images: [
        { id: 34, image: 'https://www.andbank.es/observatoriodelinversor/wp-content/uploads/2014/10/vino.jpg' }
      ],
      name: "2016 MESA TERRACE PINOT NOIR",
      price: 1500,
      stock: 2050,
      brand: { id: 2, brand: 'Cabernet Suavignon' },
      varietal: { id: 2, varietal: 'Cabernet Suavignon' },
      type: "Wines"
    },
    

  ]
  const navigate = useNavigate()

  return (
    <div className="ContainerHome">
      <HeaderHome />
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
              type={"Wines"}
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
            { path: "/storeaccesories", text: "Accesorios", src: "https://www.dulcehogar.mx/wp-content/uploads/2020/04/Accesorios-para-vino-0.jpg" },
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
