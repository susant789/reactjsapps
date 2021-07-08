import react from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

function ISlider() {

    let settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="/images/slider-badging.jpg"/>
            </Wrap>
            <Wrap>
                <img src="/images/slider-badag.jpg"/>
            </Wrap>
        </Carousel>
    )
}

const Carousel = styled(Slider)`
   .slick-list {
       overflow:visible;
   }
   li.slick-active button::before {
       color:white;
   }
   ul li button{
       &:before{
           font-size:1rem;
           color:rgb(150,150,171);
       }
   }
   button{
    z-index:1;
   }



`

const Wrap = styled.div`
    margin-top:1rem;
    border-radius:1rem;
    
    img {
        width:100%;
        object-fit:contain;
        box-shadow: .5rem .5rem 4rem #111;
        border:.5rem solid transparent;
        transition: all .3s;
        &:hover {
            border: 5px solid #fff;
            cursor:pointer;
            transition: all .3s;
        }
        
    }
    
`

export default ISlider
