import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import Navbar from '../components/Navbar.jsx'
import Swal from 'sweetalert2';
import image1 from '../_Assets/tote.png';

export default function DetailProduct() {
  let [amount, setAmount] = useState(1)
  let history = useHistory()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  let addPurchase = () => {
    setAmount(amount += 1)
  }

  let minPurchase = () => {
    if (amount > 1) {
      setAmount(amount -= 1)
    }
  }

  let buy = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: `now it's ready in your chart `
    })

    history.push('/listProduct')
  }

  return (
    <div className="w-12/12 pb-32 pt-4 h-full bg-white">
      <Navbar />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-10 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="w-1/2 h-80 bg-gray-100 rounded-md shadow-xl mt-7">
              <img src={image1} alt="" className="mx-auto mt-20" />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-10">Tote bag 17 Seven original</h1>
              <div className="h-40">
                <p className="leading-relaxed text-justify">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
              </div>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                {/* count */}
                <div className="flex items-center">
                  <span className="mr-3">Amount</span>
                  <button className="bg-blue-500 w-7 rounded-sm text-white text-xl font-bold" onClick={addPurchase}>+</button>
                  <h1 className="px-3 font-bold">{amount}</h1>
                  <button className="bg-blue-500 w-7 rounded-sm text-white text-xl font-bold" onClick={minPurchase}>-</button>
                </div>
                {/* end of count */}
                {/* size */}
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
                {/* end of size */}
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">Rp 150.000</span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-3 px-7 focus:outline-none hover:bg-indigo-600 rounded font-semibold text-sm tracking-wider" onClick={buy}>BUY</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
