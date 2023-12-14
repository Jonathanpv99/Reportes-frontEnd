
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
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
                <h1>texto random</h1>
            </div>
            <div className='max-w-xl'>
                <Slider {...settings} >
                <div>
                    <img src="../../../public/grafica.png" alt="grafica1" />
                </div>
                <div>
                    <img src="../../../public/lapicero.png" alt="desiciones" />
                </div>
                <div>
                    <img src="../../../public/almacen.png" alt="grafica1" />
                </div>
                <div>
                    <img src="../../../public/transporte.png" alt="grafica1" />
                </div>
                </Slider>
            </div>
        
        </div>
    )
}

export default HomePage;