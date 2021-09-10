import React from 'react'
import { useHistory } from "react-router-dom";
import content from '../_Assets/mrg.png'
import logoutIcon from '../_Assets/logout.png'


export default function Banner() {
  const history = useHistory()
  let tmp = true

  let login = () => {
    history.push('/login')
  }

  let register = () => {
    history.push('/register')
  }

  let logout = () => {
    console.log('logout')
  }

  return (
    <>
      <div className="container w-10/12 mx-auto">
        <section className="text-gray-600 body-font flex justify-between">
          <div className="px-5 py-10 ">
            <h2 className="text-white text-xl">selamat datang di</h2>
            <h1 className="sm:text-3xl title text-white font-bold title-font mb-2">Merry Riana Shop</h1>
          </div>
          {
            !tmp ? (
              <div className="py-10 flex mt-2">
                <div className="w-4 h-4 ">
                  <img src={logoutIcon} alt="" className="-ml-2 pointer" onClick={logout} />
                </div>
                <button className="text-white text-right font-bold pointer -mt-11 mr-5" onClick={logout}>Logout</button>
              </div>
            ) :
              (
                <div className="py-10 flex mt-2">
                  <div className="w-4 h-4 ">
                    <img src={logoutIcon} alt="" className="-ml-2 pointer" onClick={login} />
                  </div>
                  <button className="text-white text-right font-bold pointer -mt-11 mr-5" onClick={login}>Login</button>
                  <button className="text-white text-right font-bold pointer -mt-11" onClick={register}>Register</button>
                </div>
              )
          }

        </section>

        <section className="ml-5 mt-20">
          <div className="flex justify-between">
            <div className="w-3/12 h-80 bg-white shadow-xl rounded-2xl">
              <img src={content} alt="" className="-mt-32" />
              <div className="mt-5">
                <p className="text-center text-2xl font-light text-gray-600 pointer hover:text-blue-600" onClick={() => history.push('/listProduct')}>Discover Now</p>
                <p className="text-center text-gray-400 text-xs mt-1">Books of Miss Merry Riana</p>
              </div>
            </div>
            <div className="banner h-80 bg-white shadow-xl rounded-2xl overflow-hidden">
              <div className="w-11/12 mx-auto flex justify-between">
                <div className="w-4/12 mt-10">
                  <h1 className="text-2xl font-light">Discount 15%</h1>
                  <h1 className="text-2xl font-light">on All Clickcart</h1>
                  <h1 className="text-2xl font-semibold">Electronics Items</h1>

                  <p className="text-sm text-gray-400 mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt consectetur itaque</p>

                  <button className="mt-10 bg-blue-600 py-3 px-5 hover:bg-blue-200 hover:text-black text-white rounded-3xl text-xs font-bold" onClick={() => history.push('/listProduct')}>SHOP NOW</button>
                </div>
                <div className="8/12 overflow-hidden">
                  <img src="https://themes.themeregion.com/carrito/wp-content/uploads/2017/12/promotion-right-bg-1.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
