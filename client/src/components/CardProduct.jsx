import React from 'react';
import image1 from '../_Assets/tote.png'
import {useHistory} from 'react-router-dom'

export default function CardProduct() {
  const history = useHistory()
  return (
    <section className="text-gray-600 body-font">
      <div className="container w-9/12 pl-5 mx-auto">
      <h1 className="text-2xl font-semibold my-6 mt-12">Best from our collection</h1>
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-4/12 md:w-1/2 p-4 w-full ">
            <span onClick={()=> history.push('/detailProduct')} className="block relative h-48 rounded overflow-hidden bg-gray-100 pointer">
              <img src={image1} className="mx-auto pt-5 transform hover:scale-125 duration-150" alt="" />
            </span>
            <div className="mt-4">
              <div className="flex justify-between">
                <h2 className="text-gray-900 title-font text-sm font-bold">The Catalyzer</h2>
                <p className="mt-1 text-sm font-bold">$16.00</p>
              </div>
            </div>
          </div>
          <div className="lg:w-4/12 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden bg-gray-100 pointer">
              
            </a>
            <div className="mt-4">
              <div className="flex justify-between">
                <h2 className="text-gray-900 title-font text-sm font-bold">The Catalyzer</h2>
                <p className="mt-1 text-sm font-bold">$16.00</p>
              </div>
            </div>
          </div>
          <div className="lg:w-4/12 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden bg-gray-100 pointer">
              
            </a>
            <div className="mt-4">
              <div className="flex justify-between">
                <h2 className="text-gray-900 title-font text-sm font-bold">The Catalyzer</h2>
                <p className="mt-1 text-sm font-bold">$16.00</p>
              </div>
            </div>
          </div>
          <div className="lg:w-4/12 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden bg-gray-100 pointer">
              
            </a>
            <div className="mt-4">
              <div className="flex justify-between">
                <h2 className="text-gray-900 title-font text-sm font-bold">The Catalyzer</h2>
                <p className="mt-1 text-sm font-bold">$16.00</p>
              </div>
            </div>
          </div>
          <div className="lg:w-4/12 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden bg-gray-100 pointer">
              
            </a>
            <div className="mt-4">
              <div className="flex justify-between">
                <h2 className="text-gray-900 title-font text-sm font-bold">The Catalyzer</h2>
                <p className="mt-1 text-sm font-bold">$16.00</p>
              </div>
            </div>
          </div>
          <div className="lg:w-4/12 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden bg-gray-100 pointer">
             
            </a>
            <div className="mt-4">
              <div className="flex justify-between">
                <h2 className="text-gray-900 title-font text-sm font-bold">The Catalyzer</h2>
                <p className="mt-1 text-sm font-bold">$16.00</p>
              </div>
            </div>
          </div>
          <div className="lg:w-4/12 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden bg-gray-100 pointer">
              
            </a>
            <div className="mt-4">
              <div className="flex justify-between">
                <h2 className="text-gray-900 title-font text-sm font-bold">The Catalyzer</h2>
                <p className="mt-1 text-sm font-bold">$16.00</p>
              </div>
            </div>
          </div>
          <div className="lg:w-4/12 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden bg-gray-100 pointer">
              
            </a>
            <div className="mt-4">
              <div className="flex justify-between">
                <h2 className="text-gray-900 title-font text-sm font-bold">The Catalyzer</h2>
                <p className="mt-1 text-sm font-bold">$16.00</p>
              </div>
            </div>
          </div>
          <div className="lg:w-4/12 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden bg-gray-100 pointer">
              
            </a>
            <div className="mt-4">
              <div className="flex justify-between">
                <h2 className="text-gray-900 title-font text-sm font-bold">The Catalyzer</h2>
                <p className="mt-1 text-sm font-bold">$16.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
