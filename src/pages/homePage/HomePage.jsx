
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import almacen from '../../assets/almacen.png';
import grafica from '../../assets/grafica.png';
import lapicero from '../../assets/lapicero.png';
import transporte from '../../assets/transporte.png';
const HomePage = () => {



  const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
  };

    return (
        <div className=" mt-5 flex justify-around items-center">
            <div>
                <h1 className='m-8 text-justify text-lg'>
                    architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut 
                    fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui 
                    dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam 
                    eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
                </h1>
            </div>
            <div className='max-w-xl text-center'>
                <Slider {...settings} >
                <div>
                    <h1>Graphics</h1>
                    <img src={ grafica } alt="grafica1" />
                </div>
                <div>
                    <h1>Decisions</h1>
                    <img src={ lapicero } alt="desiciones" />
                </div>
                <div>
                    <h1>Commodity</h1>
                    <img src={ almacen } alt="almacen" />
                </div>
                <div>
                    <h1>Transport</h1>
                    <img src={ transporte } alt="transporte" />
                </div>
                </Slider>
            </div>
        
        </div>
    )
}

export default HomePage;