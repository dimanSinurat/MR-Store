import React from 'react'

export default function Footer() {
  return (
    <div className="w-12/12 bg-gray-900">
      <footer className="text-gray-600 body-font">
        <div className="container w-10/12 mx-auto py-24 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
            
            <p className="mt-2 text-2xl text-gray-200">Merry Riana Shop</p>
          </div>
          <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-200 tracking-widest text-sm mb-3">AFILIASI</h2>
              <nav className="list-none mb-10">
                <li>
                  <p className="text-gray-400">Shopee</p>
                </li>
                <li>
                  <p className="text-gray-400">Tokopedia</p>
                </li>
                <li>
                  <p className="text-gray-400">Lazada</p>
                </li>
                <li>
                  <p className="text-gray-400">Bukalapak</p>
                </li>
                <li>
                  <p className="text-gray-400">Bli-bli</p>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-200 tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <p className="text-gray-400">Men's Clothes</p>
                </li>
                <li>
                  <p className="text-gray-400">Woman Clothes</p>
                </li>
                <li>
                  <p className="text-gray-400">Food</p>
                </li>
                <li>
                  <p className="text-gray-400">Book & DVD</p>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-800 tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <p className="text-gray-600">First Link</p>
                </li>
                <li>
                  <p className="text-gray-600">Second Link</p>
                </li>
                <li>
                  <p className="text-gray-600">Third Link</p>
                </li>
                <li>
                  <p className="text-gray-600">Fourth Link</p>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-800 tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <p className="text-gray-600">First Link</p>
                </li>
                <li>
                  <p className="text-gray-600">Second Link</p>
                </li>
                <li>
                  <p className="text-gray-600">Third Link</p>
                </li>
                <li>
                  <p className="text-gray-600">Fourth Link</p>
                </li>
              </nav>
            </div>
          </div>
        </div>
        {/* end footer */}
        <div className="bg-gray-100">
          <div className=" container w-10/12 mx-auto py-4 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">© 2021 yadiman aprianto —
              <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">Hacktiv8 student</a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <span className="text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </span>
              <span className="ml-3 text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </span>
              <span className="ml-3 text-gray-500">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </span>
            </span>
          </div>
        </div>
      </footer>
      {/* end of footer */}
    </div>
  )
}
