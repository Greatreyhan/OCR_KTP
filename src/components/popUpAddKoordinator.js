import React,{useState} from 'react'

const PopUpAddKoordinator = ({popUp,setPopUp}) => {
  const [namaKoordinator, setNamaKoordinator] = useState('')
  const [nikKoordinator, setNikKoordinator] = useState('')
  const [passwordKoordinator, setPasswordKoordinator] = useState('')
  const [kelurahanKoordinator, setKelurahanKoordinator] = useState('')

  return (
    <div onClick={()=>setPopUp(!popUp)} className='fixed flex justify-center w-screen h-screen items-center z-50 left-0 top-0 bg-black bg-opacity-20'>

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
                <div className="relative ">
                  <label className='text-sm text-gray-900 mb-2'>Nama Koordinator</label>
                  <input type="text" id="namaKoordinator" className="mt-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-gray-100 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-rose-600 focus:border-transparent" placeholder="Nama" />
                </div>
              </div>
              <div className="w-full">
                <div className="relative ">
                <label className='text-sm text-gray-900 mb-2'>NIK Koordinator</label>
                <input type="text" id="nikKoordinator" className="mt-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-gray-100 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-rose-600 focus:border-transparent" placeholder="NIK" />
                </div>
              </div>
              <div className="w-full">
                <div className="relative ">
                <label className='text-sm text-gray-900 mb-2'>Password</label>
                <input type="password" id="passwordKoordinator" className="mt-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-gray-100 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-rose-600 focus:border-transparent" placeholder="*****" />
                </div>
              </div>
              <div className="w-full">
                <div className="relative ">
                <label className='text-sm text-gray-900 mb-2'>Kelurahan Koordinator</label>
                  <input type="text" id="kelurahanKoordinator" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-gray-100 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-rose-600 focus:border-transparent" placeholder="Kelurahan" />
                </div>
              </div>
              <div>
                <span className="flex w-full rounded-md shadow-sm">
                  <button onClick={()=>setPopUp(!popUp)} type="button" className="py-2 px-4 text-gray-900 w-full transition ease-in duration-200 text-center text-base font-semibold ">
                    Kembali
                  </button>
                  <button type="button" className="py-2 px-4  bg-rose-600 hover:bg-rose-700 focus:ring-rose-500 focus:ring-offset-rose-200 text-gray-100 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
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