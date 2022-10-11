import React from "react";
import './index.scss'
import Slider from "react-slick"


var btn = document.getElementsByClassName('slick-next')[0]
console.log(btn)
btn.innerHTML = '<i class="arrow right"'

const Items = () => {
    const settings = {
        className: "center",
        infinite: false,
        centerPadding: "60px",
        slidesToShow: 4,
        swipeToSlide: true,
        afterChange: function(index) {
          console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
          );
        }

       

      };
      return (
        <div >
          <Slider {...settings}>
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
            <SubItems />
            </div>
          </Slider>
        </div>
      );
}


const SubItems = () => {
    return (
        <div className="subitems-container">
            <span className="items-one-text">Hotels</span>
            <svg viewBox="0 0 24 24" width="24px" height="24px" class="d Vb UmNoP"><path d="M20.587 12.139V4.144H3.424v7.986A3.805 3.805 0 002 15.097v4.755h1.906v-1.905h16.188v1.91H22v-4.76a3.804 3.804 0 00-1.413-2.958zm-1.906-6.09V8.83a5.048 5.048 0 00-2.865-.876c-1.565 0-2.952.69-3.816 1.749-.864-1.059-2.252-1.749-3.818-1.749-1.07 0-2.056.324-2.851.866V6.049h13.35zm-.258 5.248c-.077-.005-.155-.012-.234-.012h-4.971c.438-.838 1.437-1.426 2.598-1.426 1.168 0 2.173.593 2.607 1.438zm-7.643-.012H5.812c-.081 0-.159.007-.238.012.434-.844 1.438-1.438 2.606-1.438 1.163 0 2.163.588 2.6 1.426zM3.906 16.04v-.943c0-1.051.855-1.905 1.906-1.905h12.376c1.051 0 1.905.854 1.905 1.905v.943H3.906z"></path></svg>
        </div>
    )
}

export default Items