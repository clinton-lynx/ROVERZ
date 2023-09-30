import React from "react";
import './index.scss'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as AmenitiesIcon from "react-icons/io"
import * as Cancelbtn from "react-icons/ai"
import { Link } from 'react-router-dom'
const Items = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  //   var btn = document.getElementsByClassName('slick-next')[0]
  //   btn.innerHTML = '<i class="arrow right"><i/>'

  //   var btnSecond = document.getElementsByClassName('slick-prev')[0]
  //   btnSecond.innerHTML = '<i class = "arrow left"><i/>'
  
  const iconSVG = <svg viewBox="0 0 24 24" width="24px" height="24px" class="d Vb UmNoP"><path d="M20.587 12.139V4.144H3.424v7.986A3.805 3.805 0 002 15.097v4.755h1.906v-1.905h16.188v1.91H22v-4.76a3.804 3.804 0 00-1.413-2.958zm-1.906-6.09V8.83a5.048 5.048 0 00-2.865-.876c-1.565 0-2.952.69-3.816 1.749-.864-1.059-2.252-1.749-3.818-1.749-1.07 0-2.056.324-2.851.866V6.049h13.35zm-.258 5.248c-.077-.005-.155-.012-.234-.012h-4.971c.438-.838 1.437-1.426 2.598-1.426 1.168 0 2.173.593 2.607 1.438zm-7.643-.012H5.812c-.081 0-.159.007-.238.012.434-.844 1.438-1.438 2.606-1.438 1.163 0 2.163.588 2.6 1.426zM3.906 16.04v-.943c0-1.051.855-1.905 1.906-1.905h12.376c1.051 0 1.905.854 1.905 1.905v.943H3.906z"></path></svg>

  const Hotels = <AmenitiesIcon.IoIosCreate />
  const Resturrants = <AmenitiesIcon.IoIosCafe />
  const Malls = <AmenitiesIcon.IoIosCart />
  const EventsPlaces = <AmenitiesIcon.IoIosPeople />
  const Cinemas = <AmenitiesIcon.IoIosTv />

  return (
    <div className="general-items-container" id="general-items-diplay">
      <Slider {...settings}>
        <div>
          <SubItems name="Amenities" IconSVG={iconSVG} />
        </div>
        <div>
          <SubItems name="Hotels" IconSVG = {Hotels} />
        </div>
        <div>
          <SubItems name="Resturrants" IconSVG={Resturrants}/>
        </div>
        <div>
          <SubItems name="Malls" IconSVG={Malls}/>
        </div>
        <div>
          <SubItems name="Event Places" IconSVG={EventsPlaces}/>
        </div>
        <div>
          <SubItems name="Cinemas" IconSVG={Cinemas} />
        </div>
        {/* <div>
            <SubItems />
            </div>
            <div>
            <SubItems />
            </div>
            <div>
            <SubItems />
            </div>
            <div>
            <SubItems />
            </div> */}
      </Slider>
    </div>
  );
}


const SubItems = (props) => {



  return (
    <Link style={{textDecoration: 'none'}} className="subitems-container"  to="/result">
        <span className="items-one-text">{props.name}</span>
        <span className="Items-Icons">{props.IconSVG}</span>
    </Link>
  )
}

export default Items