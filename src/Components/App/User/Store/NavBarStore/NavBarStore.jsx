
import { useNavigate } from 'react-router-dom'
import "../Store.scss"
export const NavBarStore = () => {
const navigate = useNavigate()

  return (
    <div className="storeContainerBar">
            <div className="divList">
              <h2 className="titleList">Varietal</h2>
              <ul>
                <li>Malbec</li>
                <li>Suavignon Blanc</li>
                <li>Cabernet Suavignon</li>
                <li>Cabernet Franc</li>
              </ul>
            </div>
            <div className="divList">
              <h2 className="titleList">Tipo</h2>
              <ul>
                <li>Rosado</li>
                <li>Tinto</li>
                <li>Blanco</li>
                <li></li>
              </ul>
            </div>
            <div className="divList">
              <h2 className="titleList">Marcas</h2>
              <ul>
                <li>Los Haroldos</li>
                <li>Zuccardi</li>
                <li>Durigutti</li>
              </ul>
            </div>
            <div className="divList">
              <h2 className="titleList">Precio</h2>
              <ul>
                <li>Mayor precio</li>
                <li>Menor Precio</li>
              </ul>
            </div>
            <div className="divList">
              <h2 className="titleList">Accesorios</h2>
              <ul>
                <li onClick={()=> navigate("/storeaccessories")}>Nuevos Productos</li>
              </ul>
            </div>
          </div>
          
  )
}
