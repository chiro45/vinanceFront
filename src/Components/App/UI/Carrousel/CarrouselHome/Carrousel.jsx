
import "./Carrousel.scss"
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";


export const Carrousel = () => {
  
  return (
    <div className="CarrouselHome">
      <MDBCarousel showIndicators showControls className="carrousel">
      <MDBCarouselItem className="carrouselItem"
        itemId={1}
        src='https://enolife.com.ar/es/wp-content/uploads/2021/09/01-1024x440.jpg'
        alt='...'
      >
        <h5>Bodega</h5>
        <p>bodegosa</p>
      </MDBCarouselItem>
      <MDBCarouselItem className="carrouselItem"
        itemId={2}
        src='https://cdn2.civitatis.com/argentina/mendoza/tour-privado-bodegas-mendoza-grid.jpg'
        alt='...'
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>
      <MDBCarouselItem className="carrouselItem"
        itemId={3}
        src='https://www.kahuak.com.ar/img/fotos/principales/home-toursvinos01.jpg'
        alt='...'
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>
      <MDBCarouselItem className="carrouselItem"
        itemId={4}
        src='https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_900,h_492/https://etheriamagazine.com/wp-content/uploads/2019/04/Mendoza-bodega-A16.jpg'
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