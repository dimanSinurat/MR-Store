import React from 'react';
import { useHistory } from 'react-router';

export default function Register() {
  let history = useHistory()

  return (
    <div className="bg-blue-500 h-screen">
      <div className="container mx-auto">
        <div className="flex justify-center px-6 py-6">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            {/* sideA */}
            <div
              className="w-full pt-32 h-auto bg-gray-100 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
            >
              <img src="https://merryrianashop.com/assets/Logo_MRS_PNG-03.png" className="w-10/12" alt="" />
            </div>
            {/* sideB */}
            <div className="w-full lg:w-7/12 bg-white px-5 pt-5 rounded-lg lg:rounded-l-none">
              <h3 className="py-4 text-2xl text-center">Create an Account!</h3>
              <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div className="mb-4">
                  <div className="mb-4  md:mb-0">
                    <label className="block mb-1 text-sm font-bold text-gray-700" for="firstName">
                      First Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded-md appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block mb-1 text-sm font-bold text-gray-700" for="email">
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded-md appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1 text-sm font-bold text-gray-700" for="email">
                    Address
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded-md appearance-none focus:outline-none focus:shadow-outline"
                    id="address"
                    type="text"
                    placeholder="Address"
                  />
                </div>
                <div className="mb-4">
                  <div className="mb-4  md:mb-0">
                    <label className="block mb-1 text-sm font-bold text-gray-700" for="password">
                      Password
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded-md appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                    />
                  </div>
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Register Account
                  </button>
                  <button
                    className="w-full mt-2 px-4 py-2 font-bold text-gray-400 bg-gray-200 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={() => history.push('/')}
                  >
                    B A C K
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
