
import { useNavigate } from "react-router-dom"
import { CardItemList } from "../../UI/CardsItemList/CardItemList"
import { Carrousel } from "../../UI/Carrousel/CarrouselHome/Carrousel"
import { Footer } from "../../UI/Footer/Footer"
import turismo from "../../../../Assets/imgs/turismo.jpeg"
import vinos from "../../../../Assets/imgs/vinos.jpg"
import "./Home.scss"
import { HeaderHome } from "../../UI/HeaderHome/HeaderHome"
import Swal from "sweetalert2"


export const Home = () => {

  const arrProductSelected = [
    {
      id: 5000,
      active: true,
      brand: { id: 19, brand: 'Giorgio Gieco' },
      category: { id: 1, category: 'Malbec' },
      description: "Sus características organolépticas más  A la generosa graduación que suelen tener sus vinos se añaden tintos con un gran cuerpo, color intenso y una importante presencia tánica.",
      discount: 4300,
      images: [
        { id: 34, image: 'https://images.vivino.com/thumbs/WtMN5CptRACOR_oqitzXVw_pb_600x600.png' }
      ],
      name: "Giorgio Gieco - Malbec Special Selection ",
      price: 2800,
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
      discount: 5300,
      images: [
        { id: 34, image: 'https://res.cloudinary.com/dka1fqaps/image/upload/v1668799742/m7ukxgxeo08vbfn1d9em.png' }
      ],
      name: "2016 MESA TERRACE PINOT NOIR",
      price: 3000,
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
      discount: 5500,
      images: [
        { id: 34, image: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/812/913/products/es-cs-161-66ec632412bcb31d3a15435061546040-1024-1024.jpg' }
      ],
      name: "Vino Alta Vista Estate Premium",
      price: 2000,
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
      discount: 3000,
      images: [
        { id: 34, image: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/211/660/products/maljunta-cab-fran-res1-071eba501bca83feae16146969257952-640-0.png' }
      ],
      name: "Vino malajunta cabernet Franc",
      price: 1500,
      stock: 2050,
      brand: { id: 2, brand: 'Cabernet Suavignon' },
      varietal: { id: 2, varietal: 'Cabernet Franc' },
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
        <h2>Productos recomendados</h2>
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
            { path: "/store", text: "Accesorios", src: "https://www.dulcehogar.mx/wp-content/uploads/2020/04/Accesorios-para-vino-0.jpg" },
            { path: "/store", text: "Vinos Premium", src: vinos },
            { path: "/turismo", text: "Turismo", src: turismo }
          ].map(({ text, src, path }) => (
            <div key={text} onClick={() => { 
              if(path === "/turismo"){
                Swal.fire("Próximamente!", "Estamos trabajando en ello.", "warning")
            }else{
              navigate(path)
            }}
            } style={{ backgroundImage: `url(${src})` }} className="containerAccesories">
              <h2>{text}</h2>
            </div>
          ))
        }
      </div>
      <Footer />

    </div>
  )
}
