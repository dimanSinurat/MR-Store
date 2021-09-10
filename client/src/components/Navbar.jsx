import React from 'react';
import { Link, useHistory } from 'react-router-dom'

export default function Navbar({location}) {
  let history = useHistory()
  return (
    <div className="w-9/12 h-full mx-auto py-5">
      <div className="flex justify-between pl-5">
        <span className="text-sm font-semibold flex tracking-widest pointer"  onClick={()=> history.goBack()} >
          <div className="w-6 h-6 overflow-hidden mr-2">
            <img src="https://img.icons8.com/pastel-glyph/64/000000/circled-left.png"/>
          </div>
          BACK</span>
        <button className="font-bold text-gray-900" onClick={()=> history.push('/')}>MERRY RIANA SHOP</button>
        <div className="flex">
          <Link to="/myOrder" className="text-sm font-semibold flex tracking-widest ml-2 mr-2">
            CART</Link>
          <div className="w-6 h-6 overflow-hidden">
            <img src="https://img.icons8.com/dotty/80/000000/shopping-cart.png" onClick={()=> history.push('/myOrder')} />
          </div>
        </div>
      </div>
    </div>
  )
}
