import React from 'react';
import Slider from '../components/SliderPlay.jsx';


export default function CategoryCard(props) {
  let {icon, title, subTitle, image} = props;
  return (
    <>
      <div className="w-10/12 mx-auto">
        <section className="ml-5 mt-5">
          <div className="flex justify-start w-full h-80 bg-white rounded-2xl shadow-xl">
            <div className="w-2/12">
              {/* float label */}
              <div className="bg-blue-400 w-60 h-16 mt-7 absolute flex justify-around shadow-md">
                <div className="w-6/12 ml-5">
                  <p className="text-white text-lg font-semibold mt-2">{title}</p>
                  <p className="text-white text-lg font-semibold -mt-2">{subTitle}</p>
                </div>
                <div className="w-6/12 ml-20 mt-4">
                  <img src={icon} alt="" />
                </div>
              </div>
              {/* end of float label */}
              <div className="ml-5 mt-28">
                <ul>
                  <li className="text-gray-300">Pants</li>
                  <li className="text-gray-300 mt-1">T-Shirt</li>
                  <li className="text-blue-500 mt-1">Suit</li>
                  <li className="text-gray-300 mt-1">Polo Shirt</li>
                  <li className="text-gray-300 mt-1">Watches</li>
                  <li className="text-gray-300 mt-1">Shoes and Sandals</li>
                </ul>
              </div>
            </div>
            <div className="w-3/12 overflow-hidden">
              <img src={image} alt="" />
            </div>
            <div className="w-6/12 bg-blue-200 mx-auto">
              <Slider />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
