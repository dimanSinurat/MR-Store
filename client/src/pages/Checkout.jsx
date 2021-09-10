import React from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';


export default function Checkout() {
  let history = useHistory()

 let pay = () => {
    history.push('/')
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 10000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: `thank you, we will notify your email if we have received the payment `
    })
 }


  return (
    <div className="w-12/12 pb-32 pt-4 h-full bg-white">
      <div className="w-9/12 h-full mx-auto py-5">
        <div className="flex justify-between pl-5">
          <span className="text-sm font-semibold flex tracking-widest pointer" onClick={() => history.goBack()} >
            <div className="w-6 h-6 overflow-hidden mr-2">
              <img src="https://img.icons8.com/pastel-glyph/64/000000/circled-left.png" />
            </div>
            Back to cart</span>
        </div>
        <hr className="mt-5" />
      </div>
      {/* end of Navbar */}
      <input type="text" placeholder="" />
      <div className="container w-9/12 pl-5 mx-auto my-10">
        <h1 className="text-2xl">Nomor Rekening</h1>
        <h1 className="font-bold">Bank CIMB Niaga</h1>
        <p className="mt-5">a.n : Merry Riana Shop</p>
        <h1 className="font-bold">2390257936435456</h1>
        <input type="file" className="mt-5 " />
        <button className="bg-blue-500 block mt-40 p-2 text-white shadow-md  mt-5 rounded-md" onClick={()=> pay()}>BAYAR</button>
      </div>
    </div>
  )
}
