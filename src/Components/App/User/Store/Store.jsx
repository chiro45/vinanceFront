
import { MDBBtn } from "mdb-react-ui-kit"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import { CardItemList } from "../../UI/CardsItemList/CardItemList"

import { Header } from "../../UI/Header/Header"
import { ModalWines } from "../../UI/Modals/ModalWInes/ModalWines"
import "./Store.scss"
export const Store = () => {
  const arrProductSelected = [
    {
      id: 0,
      src: "https://hiperlibertad.vteximg.com.br/arquivos/ids/161254-1000-1000/Vino-CHACABUCO-malbec-750-cc-Vino-CHACABUCO-malbec-750-cc-1-5759.jpg?v=637287210267970000",
      varietal: "Vino Tinto",
      name: "Vino Chacabuco Malbec",
      price: "1506",

    }, {
      id: 1,
      src: "https://jumboargentina.vtexassets.com/arquivos/ids/624747/Vino-Chacabuco-Cabernet-Botella-550-Ml-1-37304.jpg?v=637510296794330000",
      varietal: "Cabernet Suavignon ",
      name: "Vino Chacabuco Malbec",
      price: "1506",

    },
    {
      id: 2,
      src: "https://hiperlibertad.vteximg.com.br/arquivos/ids/161254-1000-1000/Vino-CHACABUCO-malbec-750-cc-Vino-CHACABUCO-malbec-750-cc-1-5759.jpg?v=637287210267970000",
      varietal: "Vino Rose",
      name: "Vino Chacabuco Malbec",
      price: "1506",

    }, {
      id: 3,
      src: "https://cepadevinos.com/wp-content/uploads/2018/04/ESCORIHUELA.jpg",
      varietal: "Vino Cabernet Frac",
      name: "Vino Chacabuco Malbec",
      price: "1500",

    },
    {
      id: 0,
      src: "https://hiperlibertad.vteximg.com.br/arquivos/ids/161254-1000-1000/Vino-CHACABUCO-malbec-750-cc-Vino-CHACABUCO-malbec-750-cc-1-5759.jpg?v=637287210267970000",
      varietal: "Vino Tinto",
      name: "Vino Chacabuco Malbec",
      price: "1506",

    }, {
      id: 1,
      src: "https://jumboargentina.vtexassets.com/arquivos/ids/624747/Vino-Chacabuco-Cabernet-Botella-550-Ml-1-37304.jpg?v=637510296794330000",
      varietal: "Cabernet Suavignon ",
      name: "Vino Chacabuco Malbec",
      price: "1506",

    },
    {
      id: 2,
      src: "https://hiperlibertad.vteximg.com.br/arquivos/ids/161254-1000-1000/Vino-CHACABUCO-malbec-750-cc-Vino-CHACABUCO-malbec-750-cc-1-5759.jpg?v=637287210267970000",
      varietal: "Vino Rose",
      name: "Vino Chacabuco Malbec",
      price: "1506",

    }, {
      id: 3,
      src: "https://cepadevinos.com/wp-content/uploads/2018/04/ESCORIHUELA.jpg",
      varietal: "Vino Cabernet Frac",
      name: "Vino Chacabuco Malbec",
      price: "1500",

    }, {
      id: 0,
      src: "https://hiperlibertad.vteximg.com.br/arquivos/ids/161254-1000-1000/Vino-CHACABUCO-malbec-750-cc-Vino-CHACABUCO-malbec-750-cc-1-5759.jpg?v=637287210267970000",
      varietal: "Vino Tinto",
      name: "Vino Chacabuco Malbec",
      price: "1506",

    }, {
      id: 1,
      src: "https://jumboargentina.vtexassets.com/arquivos/ids/624747/Vino-Chacabuco-Cabernet-Botella-550-Ml-1-37304.jpg?v=637510296794330000",
      varietal: "Cabernet Suavignon ",
      name: "Vino Chacabuco Malbec",
      price: "1506",

    },
    {
      id: 2,
      src: "https://hiperlibertad.vteximg.com.br/arquivos/ids/161254-1000-1000/Vino-CHACABUCO-malbec-750-cc-Vino-CHACABUCO-malbec-750-cc-1-5759.jpg?v=637287210267970000",
      varietal: "Vino Rose",
      name: "Vino Chacabuco Malbec",
      price: "1506",

    }, {
      id: 3,
      src: "https://cepadevinos.com/wp-content/uploads/2018/04/ESCORIHUELA.jpg",
      varietal: "Vino Cabernet Frac",
      name: "Vino Chacabuco Malbec",
      price: "1500",

    }, {
      id: 0,
      src: "https://hiperlibertad.vteximg.com.br/arquivos/ids/161254-1000-1000/Vino-CHACABUCO-malbec-750-cc-Vino-CHACABUCO-malbec-750-cc-1-5759.jpg?v=637287210267970000",
      varietal: "Vino Tinto",
      name: "Vino Chacabuco Malbec",
      price: "1506",

    }, {
      id: 1,
      src: "https://jumboargentina.vtexassets.com/arquivos/ids/624747/Vino-Chacabuco-Cabernet-Botella-550-Ml-1-37304.jpg?v=637510296794330000",
      varietal: "Cabernet Suavignon ",
      name: "Vino Chacabuco Malbec",
      price: "1506",

    },
    {
      id: 2,
      src: "https://hiperlibertad.vteximg.com.br/arquivos/ids/161254-1000-1000/Vino-CHACABUCO-malbec-750-cc-Vino-CHACABUCO-malbec-750-cc-1-5759.jpg?v=637287210267970000",
      varietal: "Vino Rose",
      name: "Vino Chacabuco Malbec",
      price: "1506",

    }, {
      id: 3,
      src: "https://cepadevinos.com/wp-content/uploads/2018/04/ESCORIHUELA.jpg",
      varietal: "Vino Cabernet Frac",
      name: "Vino Chacabuco Malbec",
      price: "1500",

    }, {
      id: 0,
      src: "https://hiperlibertad.vteximg.com.br/arquivos/ids/161254-1000-1000/Vino-CHACABUCO-malbec-750-cc-Vino-CHACABUCO-malbec-750-cc-1-5759.jpg?v=637287210267970000",
      varietal: "Vino Tinto",
      name: "Vino Chacabuco Malbec",
      price: "1506",

    }, {
      id: 1,
      src: "https://jumboargentina.vtexassets.com/arquivos/ids/624747/Vino-Chacabuco-Cabernet-Botella-550-Ml-1-37304.jpg?v=637510296794330000",
      varietal: "Cabernet Suavignon ",
      name: "Vino Chacabuco Malbec",
      price: "1506",

    },
    {
      id: 2,
      src: "https://hiperlibertad.vteximg.com.br/arquivos/ids/161254-1000-1000/Vino-CHACABUCO-malbec-750-cc-Vino-CHACABUCO-malbec-750-cc-1-5759.jpg?v=637287210267970000",
      varietal: "Vino Rose",
      name: "Vino Chacabuco Malbec",
      price: "1506",

    }, {
      id: 3,
      src: "https://cepadevinos.com/wp-content/uploads/2018/04/ESCORIHUELA.jpg",
      varietal: "Vino Cabernet Frac",
      name: "Vino Chacabuco Malbec",
      price: "1500",

    }, {
      id: 0,
      src: "https://hiperlibertad.vteximg.com.br/arquivos/ids/161254-1000-1000/Vino-CHACABUCO-malbec-750-cc-Vino-CHACABUCO-malbec-750-cc-1-5759.jpg?v=637287210267970000",
      varietal: "Vino Tinto",
      name: "Vino Chacabuco Malbec",
      price: "1506",

    }, {
      id: 1,
      src: "https://jumboargentina.vtexassets.com/arquivos/ids/624747/Vino-Chacabuco-Cabernet-Botella-550-Ml-1-37304.jpg?v=637510296794330000",
      varietal: "Cabernet Suavignon ",
      name: "Vino Chacabuco Malbec",
      price: "1506",

    },
    {
      id: 2,
      src: "https://hiperlibertad.vteximg.com.br/arquivos/ids/161254-1000-1000/Vino-CHACABUCO-malbec-750-cc-Vino-CHACABUCO-malbec-750-cc-1-5759.jpg?v=637287210267970000",
      varietal: "Vino Rose",
      name: "Vino Chacabuco Malbec",
      price: "1506",

    }, {
      id: 3,
      src: "https://cepadevinos.com/wp-content/uploads/2018/04/ESCORIHUELA.jpg",
      varietal: "Vino Cabernet Frac",
      name: "Vino Chacabuco Malbec",
      price: "1500",

    }
  ]
const user = useSelector(state => state.userReducer)
const [userMode, setUserMode] = useState("user")
const [openModal, setOpenModal]= useState(false)
const handleOpenModal = ()=>{
  setOpenModal(!openModal)
}
const [wines, setWines] = useState([  
  {
    active: true,
    brand:{id: 19, brand: 'Vino Toro2'},
    category: {id: 1, category: 'Tinto'},
    description: "Sus características organolépticas más  A la generosa graduación que suelen tener sus vinos se añaden tintos con un gran cuerpo, color intenso y una importante presencia tánica.",
    imagesWine:[
       {id: 34, image: 'https://cdn.computerhoy.com/sites/navi.axelspringe…asta-precio-desorbitado-2336969.jpg?itok=6GoSz_9H'}
    ],
    name: "Vino Toro",
    price: 1500,
    stock: 2050,
    brand: {id: 2, brand: 'Cabernet Suavignon'},
    varietal: {id: 2, varietal: 'Cabernet Suavignon'}
  }
])
useEffect(()=>{
  const token =  localStorage.getItem("token")
        
        fetch(`${process.env.REACT_APP_URLBASE}wines`, {
            method: "GET",
            headers: {
                Accept: "application/json, text/plain",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            }
          })
            .then((response) => response.json())
            .then((data) => {
              if(data.length > 4){
                setWines(data)
              }
              console.log(data)})
            .catch((err) => console.log(err));
          
},[])
useEffect(() => {
  if(user.rol[1].authority === "ROLE_SELLER"){
    setUserMode("seller")
  }else if (user.rol[0].authority !== "ROLE_SELLER" ){
    setUserMode("user")
  }
}, [user]);
  return (
    <div >
      <Header />
      <ModalWines
        openModal={openModal}
        handleOpenModal={handleOpenModal}
      />
      <div className="containerPrincipalStore">
        <div className="storeContainer">
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
          </div>
          <div >
         { userMode=== "seller"
         ?
           <div className="CardContainerItemList__buttonStore">
      
           <MDBBtn onClick={()=>{setOpenModal(!openModal)}}>Nuevo producto</MDBBtn>
          </div>
           :null
         }
          <div className="storeContainerStore">
         
            {
              wines.map((vino, i) => (
                <div className="list">
                  <CardItemList
                    key={i}
                    vino={vino}
                    userMode={userMode}
                  />
                </div>
              ))
            } 


          </div>
          </div>
        </div>

      </div>

    </div>
  )
}
