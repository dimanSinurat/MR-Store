import React, {useEffect} from 'react';
import CardProduct from '../components/CardProduct';
import BannerProduct from '../components/BannerProduct';
import Navbar from '../components/Navbar';

export default function ListProduct() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="w-12/12 pb-32 pt-4 h-full bg-white">
      <Navbar/>
      <BannerProduct/>
      <CardProduct/>
    </div>
  )
}
