
import "./Carrousel.scss"
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

import img1 from "../../../../../Assets/imgs/mujerCaminando.png"
import img3 from "../../../../../Assets/imgs/paisaje.png"
import img2 from "../../../../../Assets/imgs/vinopaisaje.png"
import img4 from "../../../../../Assets/imgs/vinopaisaje2.png"
import img5 from "../../../../../Assets/imgs/paisaje5.png"
export const Carrousel = () => {
  
  return (
    <div className="CarrouselHome">
      <MDBCarousel showIndicators showControls className="carrousel">
      <MDBCarouselItem className="carrouselItem"
        itemId={1}
        src={img1}
        alt='...'
      >
        <h5>High Risk, High Reward Single Vineyard Wines.</h5>
        <p>Hartford Family Winery es una bodega familiar ubicada en el área de Russian River en el condado de Sonoma. La bodega está especializada en Pinot Noir, Chardonnay y Zinfandel de viña vieja. Los vinos producidos expresan el carácter de sus singulares viñedos.</p>
      </MDBCarouselItem>
      <MDBCarouselItem className="carrouselItem" 
        itemId={2}
        src={img2}
        alt='...'
      >
        <h5>Cambria Wine Club.</h5>
        <p>Venga a disfrutar de unos exquisitos vinos en nuestro hotel Cambria State Winery.</p>
      </MDBCarouselItem>
      <MDBCarouselItem className="carrouselItem"
        itemId={3}
        src={img3}
        alt='...'
      >
        <h5>Experiencia por los viñedos.</h5>
        <p>Puede disfrutar y observar en primera persona de nuestros amados viñedos.</p>
      </MDBCarouselItem>
      <MDBCarouselItem className="carrouselItem"
        itemId={4}
        src={img4}
        alt='...'
      >
        <h5>Bodega Vistalba 2018.</h5>
        <p>Foto de videños DOC de Malbec.</p>
      </MDBCarouselItem>
      <MDBCarouselItem className="carrouselItem"
        itemId={5}
        src={img5}
        alt='...'
      >
        <h5>Bodega Cambria 2010.</h5>
        <p>Foto de viñedos Cabernet Suavignon.</p>
      </MDBCarouselItem>

     
    </MDBCarousel>
       
    </div>
  )



}
/*<Slider className="carrousel" {...settings}>
      <div className="containerElement">
        <img src="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/05/20114742/vinos-4.jpg"/>
      </div>
      <div className="containerElement">
        <img src="https://enolife.com.ar/es/wp-content/uploads/2021/09/01-1024x440.jpg"/>
      </div>
      <div className="containerElement">
        <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_900,h_492/https://etheriamagazine.com/wp-content/uploads/2019/04/Mendoza-bodega-A16.jpg"/>
      </div>
      <div className="containerElement">
        <img src="https://i0.wp.com/thebigwinetheory.com/wp-content/uploads/2016/11/image582a11cf3783a.jpg?fit=1100%2C450&ssl=1"/>
      </div>
      <div className="containerElement">
        <img src="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/05/20114742/vinos-4.jpg"/>
      </div>
    </Slider>
    */