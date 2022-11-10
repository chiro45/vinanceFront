
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
        <h5>Bodega</h5>
        <p>bodegosa</p>
      </MDBCarouselItem>
      <MDBCarouselItem className="carrouselItem" 
        itemId={2}
        src={img2}
        alt='...'
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>
      <MDBCarouselItem className="carrouselItem"
        itemId={3}
        src={img3}
        alt='...'
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>
      <MDBCarouselItem className="carrouselItem"
        itemId={4}
        src={img4}
        alt='...'
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>
      <MDBCarouselItem className="carrouselItem"
        itemId={5}
        src={img5}
        alt='...'
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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