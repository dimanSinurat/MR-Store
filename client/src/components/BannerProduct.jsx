import React from 'react';
import moon from '../_Assets/moon.png'
import mrg2 from '../_Assets/mrg2.png'

export default function BannerProduct() {
  return (
    <div className="w-9/12 mx-auto">
      <section className="ml-5 mt-5">
        <div className="w-full h-80 bg-gray-100  overflow-hidden">
          <div className="flex">
            <div className="w-8/12 p-20">
              <h1 className="font-semibold text-3xl">Merry Riana shop</h1>
              <h1 className="font-semibold text-3xl">minimal online store</h1>
              <div className="flex mt-10 text-gray-400 text-xs font-semibold tracking-widest">
                <p className="mr-10">FOR MEN</p>
                <p className="mr-10">FOR WOMEN</p>
                <p>FOOD AND SNACK</p>
              </div>
            </div>
            {/* section2 */}
            <div className="w-4/12">
              <div className="w-64 h-64 mt-5">
                <img src={moon} alt="" />
                <div className="absolute -mt-40 -ml-7" style={{width:'300px', height:'300px'}}>
                  <img src={mrg2} alt=""/>
                </div>
              </div>
            </div>
            {/* end of section */}
          </div>
        </div>
      </section>
    </div>
  )
}
