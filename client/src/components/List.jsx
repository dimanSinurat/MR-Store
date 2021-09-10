import React from 'react'

export default function List() {

  let style = {
    space : {
      letterSpacing: 5
    }
  }

  return (
    <div className="w-12/12  bg-blue-800 mt-32 pl-5">
      <div className="container w-10/12 mx-auto py-10">
          
        <div className="flex justify-between">
          <div className="w-2/12 flex justify-between">
            <div style={{width:45,height:45, overflow:'hidden'}}>
              <img src="https://themes.themeregion.com/carrito/wp-content/uploads/2017/12/icon1-1.png"  alt="" width="100%" />
            </div>
            <span className="font-semibold text-sm text-white tracking-widest leading-4 mt-1" style={style.space}> FREE <br/> DELIVERY </span>
          </div>
          <div className="w-2/12 flex justify-around">
          <div style={{width:45,height:45, overflow:'hidden'}}>
            <img src="https://themes.themeregion.com/carrito/wp-content/uploads/2017/12/icon2-1.png"  alt="" width="100%"/>
          </div>
            <span className="font-semibold text-sm text-white tracking-widest leading-4 mt-1" style={style.space}>CLIENTS <br/> DISCOUNT </span>
          </div>
          <div className="w-2/12 flex justify-around">
          <div style={{width:45,height:45, overflow:'hidden'}}>
            <img src="https://themes.themeregion.com/carrito/wp-content/uploads/2017/12/icon3-1.png"  alt="" width="100%" />
          </div>
            <span className="font-semibold text-sm text-white tracking-widest leading-4 mt-1" style={style.space}>RETURN OF <br/> GOODS </span>
          </div>
          <div className="w-2/12 flex justify-around">
          <div style={{width:45,height:45, overflow:'hidden'}}>
            <img src="https://themes.themeregion.com/carrito/wp-content/uploads/2017/12/icon4-1.png"  alt="" width="100%" />
          </div>
            <span className="font-semibold text-sm text-white tracking-widest leading-4 mt-1" style={style.space}>OWN <br/> BRANDS </span>
          </div>
        </div>

      </div>
    </div>
  )
}
