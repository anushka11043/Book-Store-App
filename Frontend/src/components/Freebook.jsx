import React from 'react'
import list from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

function Freebook() {

    const filterData = list.filter((data)=>data.category==="Free");
    console.log(filterData);

    var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <>
    <div className='container px-4 mx-auto max-w-screen-2xl md:px-20'>
        <div>
            <h1 className='pb-2 text-xl font-semibold'>Free Offered Books</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dignissimos perspiciatis fugit voluptas minus eos natus, ex praesentium, ipsum autem tempora totam doloribus. Possimus, reiciendis assumenda odio aperiam error iste!</p>
        </div>
    
    <div>
        <Slider {...settings}>
        {filterData.map((item)=>(
          <Cards item = {item} key= {item.id}/>
        )
          
        )}
      </Slider>
 
    </div>
    </div>
    </>
  )
}

export default Freebook
