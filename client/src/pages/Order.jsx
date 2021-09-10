import React from 'react';
import { useHistory } from 'react-router-dom';
import image1 from '../_Assets/tote.png'

export default function Order() {
  let history = useHistory()
  return (
    <div className="w-12/12 pb-32 pt-4 h-full bg-white">
      {/* Navbar */}
      <div className="w-9/12 h-full mx-auto py-5">
        <div className="flex justify-between pl-5">
          <span className="text-sm font-semibold flex tracking-widest pointer" onClick={() => history.goBack()} >
            <div className="w-6 h-6 overflow-hidden mr-2">
              <img src="https://img.icons8.com/pastel-glyph/64/000000/circled-left.png" />
            </div>
            Continue Shopping</span>
        </div>
      <hr className="mt-5"/>
      </div>
      {/* end of Navbar */}
      <div className="container w-9/12 pl-5 mx-auto my-10">
        <div className="flex">
          {/* sideA */}
          <div className="w-6/12 h-24">
            <div className=" rounded-lg bg-gray-100 shadow-xl my-7">
              <div className="flex justify-between items-center max-h-24 overflow-hidden px-10">
                <img src={image1} alt="" />
                <div className="flex">
                  <p className="text-lg">150.000</p>
                  <button className="ml-3">
                    <img src="https://img.icons8.com/fluency-systems-filled/48/000000/delete-forever.png" className="w-3/5"/>
                  </button>
                </div>
              </div>
            </div>
            <div className=" rounded-lg bg-gray-100 shadow-xl my-7">
              <div className="flex justify-between items-center max-h-24 overflow-hidden px-10">
                <img src={image1} alt="" />
                <div className="flex">
                  <p className="text-lg">150.000</p>
                  <button className="ml-3">
                    <img src="https://img.icons8.com/fluency-systems-filled/48/000000/delete-forever.png" className="w-3/5"/>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* sideB */}
          <div className="ml-20">
            <h1 className="font-semibold text-xl text-gray-900">GRAND TOTAL</h1>
            <h1 className="font-bold text-4xl mt-4 text-gray-700">Rp 400.000</h1>
            <button className="mt-10 bg-green-400 px-3 py-2 rounded-md text-white hover:bg-green-800" onClick={()=> history.push('/checkout')}>CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  )
}
