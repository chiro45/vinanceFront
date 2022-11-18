
import "../Store.scss"
export const NavBarStore = ({setFetchType}) => {

  const urlVarietal = "wines/searchVarietal/paged/"
  const urlCategory = "wines/searchForCategory/paged/"
  return (
    <div className="storeContainerBar">
            <div className="divList">
              <h2 className="titleList">Varietal</h2>
              <ul>
                <li onClick={()=>{setFetchType(`${urlVarietal}Malbec`)}}>Malbec</li>
                <li onClick={()=>{setFetchType(`${urlVarietal}Suavignon Blanc`)}}>Suavignon Blanc</li>
                <li onClick={()=>{setFetchType(`${urlVarietal}Cabernet Suavignon`)}}>Cabernet Suavignon</li>
                <li onClick={()=>{setFetchType(`${urlVarietal}Cabernet Franc`)}}>Cabernet Franc</li>
                <li onClick={()=>{setFetchType(`${urlVarietal}Chardonnay`)}}>Chardonnay</li>
                <li onClick={()=>{setFetchType(`${urlVarietal}Pinot Noir`)}}>Pinot Noir</li>
              </ul>
            </div>
            <div className="divList">
              <h2 className="titleList">Tipo</h2>
              <ul>
                <li onClick={()=>{setFetchType(`${urlCategory}Rose`)}}>Rosado</li>
                <li onClick={()=>{setFetchType(`${urlCategory}Tinto`)}}>Tinto</li>
                <li onClick={()=>{setFetchType(`${urlCategory}Blanco`)}}>Blanco</li>
                
              </ul>
            </div>
            <div className="divList">
              <h2 className="titleList" >Accesorios</h2>
              <ul>
                <li onClick={()=>{setFetchType("accessories/paged")}}>Nuevos Productos</li>
              </ul>
            </div>
          </div>
          
  )
}
