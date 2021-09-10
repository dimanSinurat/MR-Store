import React, { Component } from "react";
import Slider from "react-slick";


export default class SliderPlay extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      pauseOnHover: true,
      arrows: false
    };
    return (
      <div className="overflow-hidden">
        <Slider {...settings}>
          <div className="bg-white h-80 w-full">
            <div className=" mb-10 px-4">
              <div className="rounded-lg  overflow-hidden mt-5">
                <img alt="content" className="h-48 object-cover object-center" width="100%" src="https://dummyimage.com/1201x501" />
              </div>
              <h2 className="title-font text-md font-medium text-gray-900 mt-6 mb-1 text-center">Buy YouTube Videos</h2>
              <p className="leading-relaxed text-base text-center">neutra irony.</p>
            </div>
          </div>
          <div className="bg-white h-80 w-full">
            <div className=" mb-10 px-4">
              <div className="rounded-lg  overflow-hidden mt-5">
                <img alt="content" className="h-48 object-cover object-center" width="100%" src="https://dummyimage.com/1201x501" />
              </div>
              <h2 className="title-font text-md font-medium text-gray-900 mt-6 mb-1 text-center">Buy YouTube Videos</h2>
              <p className="leading-relaxed text-base text-center">neutra irony.</p>
            </div>
          </div>
          <div className="bg-white h-80 w-full">
            <div className=" mb-10 px-4">
              <div className="rounded-lg  overflow-hidden mt-5">
                <img alt="content" className="h-48 object-cover object-center" width="100%" src="https://dummyimage.com/1201x501" />
              </div>
              <h2 className="title-font text-md font-medium text-gray-900 mt-6 mb-1 text-center">Buy YouTube Videos</h2>
              <p className="leading-relaxed text-base text-center">neutra irony.</p>
            </div>
          </div>
          <div className="bg-white h-80 w-full">
            <div className=" mb-10 px-4">
              <div className="rounded-lg  overflow-hidden mt-5">
                <img alt="content" className="h-48 object-cover object-center" width="100%" src="https://dummyimage.com/1201x501" />
              </div>
              <h2 className="title-font text-md font-medium text-gray-900 mt-6 mb-1 text-center">Buy YouTube Videos</h2>
              <p className="leading-relaxed text-base text-center">neutra irony.</p>
            </div>
          </div>
          <div className="bg-white h-80 w-full">
            <div className=" mb-10 px-4">
              <div className="rounded-lg  overflow-hidden mt-5">
                <img alt="content" className="h-48 object-cover object-center" width="100%" src="https://dummyimage.com/1201x501" />
              </div>
              <h2 className="title-font text-md font-medium text-gray-900 mt-6 mb-1 text-center">Buy YouTube Videos</h2>
              <p className="leading-relaxed text-base text-center">neutra irony.</p>
            </div>
          </div>
          <div className="bg-white h-80 w-full">
            <div className=" mb-10 px-4">
              <div className="rounded-lg  overflow-hidden mt-5">
                <img alt="content" className="h-48 object-cover object-center" width="100%" src="https://dummyimage.com/1201x501" />
              </div>
              <h2 className="title-font text-md font-medium text-gray-900 mt-6 mb-1 text-center">Buy YouTube Videos</h2>
              <p className="leading-relaxed text-base text-center">neutra irony.</p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}