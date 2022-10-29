import { CardItemList } from "../../UI/CardsItemList/CardItemList"
import { Footer } from "../../UI/Footer/Footer"
import { Header } from "../../UI/Header/Header"
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
  return (
    <div>
      <Header />

      <div className="containerPrincipalStore">
        <div className="storeContainer">
          <div className="storeContainerBar">
            <div className="divList">
              <h2 className="titleList">Varietal</h2>
              <ul>
                <li>Vino Malbec</li>
                <li>Vino Blanco</li>
                <li>Cabernet Suavignon</li>
                <li>Cabernet Franc</li>
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
          <div className="storeContainerStore">

            {
              arrProductSelected.map((vino, i) => (
                <div className="list">
                  <CardItemList
                    key={i}
                    vino={vino}
                  />
                </div>
              ))
            }


          </div>
        </div>

      </div>

    </div>
  )
}
