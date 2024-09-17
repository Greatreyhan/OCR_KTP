import React,{useState} from 'react'

const PopUpAddKoordinator = () => {
  return (
    <div className='fixed flex justify-center w-screen h-screen items-center z-50 left-0 top-0 bg-black bg-opacity-20'>

      <div className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
        <div className="px-4 py-8 sm:px-10">
          <div className="relative mt-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300">
              </div>
            </div>
            <div className="relative flex justify-center text-sm leading-5">
              <span className="px-2 text-gray-500 bg-white">
                Tambahkan Koordinator
              </span>
            </div>
          </div>
          <div className="mt-6">
            <div className="w-full space-y-6">
              <div className="w-full">
                <div className=" relative ">
                  <input type="text" id="search-form-price" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Nama" />
                </div>
              </div>
              <div className="w-full">
                <div className=" relative ">
                  <input type="text" id="search-form-location" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Password" />
                </div>
              </div>
              <div className="w-full">
                <div className=" relative ">
                  <input type="text" id="search-form-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Kelurahan" />
                </div>
              </div>
              <div>
                <span className="block w-full rounded-md shadow-sm">
                  <button type="button" className="py-2 px-4  bg-rose-600 hover:bg-rose-700 focus:ring-rose-500 focus:ring-offset-rose-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Tambahkan
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default PopUpAddKoordinator