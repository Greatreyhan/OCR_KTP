import React, { useEffect, useState } from 'react'

const PengolahanData = () => {

  // KTP Record Data
  const [KTPRecord, setKTPRecord] = useState([])

  // Get KTP Record
  useEffect(() => {
    // Fetching data from the API
    fetch('http://localhost:4000/ktp', {
      method: 'GET'
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.data)
        setKTPRecord(data.data);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  const deleteKTPRecord = (idKtp)=>{
      // Fetching data from the API
    fetch('http://localhost:4000/ktp/'+idKtp, {
      method: 'DELETE'
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.data)
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }

  return (
    <div>

      <div class="container max-w-3xl px-4 mx-auto sm:px-8">
        <div class="py-8">
          <div class="flex flex-row justify-between w-full mb-1 sm:mb-0">
            <h1 className='text-3xl font-black text-gray-400'>Data Pengguna</h1>
            <div class="text-end">
              <form class="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                <div class=" relative ">
                  <input type="text" id="&quot;form-subscribe-Filter" class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-gray-100 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-rose-600 focus:border-transparent" placeholder="name" />
                </div>
                <button class="flex-shrink-0 px-6 py-2 text-base text-white bg-rose-700 rounded-lg shadow-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-rose-200" type="submit">
                  Cari
                </button>
              </form>
            </div>
          </div>
          <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
            <div class="inline-block min-w-full overflow-hidden rounded-lg shadow">
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th scope="col" class="px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                      Nama
                    </th>
                    <th scope="col" class="px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                      NIK
                    </th>
                    <th scope="col" class="px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                      Kelurahan
                    </th>
                    <th scope="col" class="px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                      Kecamatan
                    </th>
                    <th scope="col" class="px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                      KTP
                    </th>
                    <th scope="col" class="px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {KTPRecord == [] ? null :
                  KTPRecord.map((record)=>{
                    return(
                      <tr key={record.idktp}>
                        <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <div class="flex items-center">
                            <div>
                              <p class="text-gray-900 whitespace-no-wrap">
                                {record.nama}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <p class="text-gray-900 whitespace-no-wrap">
                          {record.nik}
                          </p>
                        </td>
                        <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <p class="text-gray-900 whitespace-no-wrap">
                          {record.kelurahan}
                          </p>
                        </td>
                        <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <p class="text-gray-900 whitespace-no-wrap">
                          {record.kecamatan}
                          </p>
                        </td>
                        <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                            <span aria-hidden="true" class="absolute inset-0 bg-green-200 rounded-full opacity-50">
                            </span>
                            <span class="relative">
                              active
                            </span>
                          </span>
                        </td>
                        <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <a href="#" class="text-indigo-600 hover:text-indigo-900">
                            Detail
                          </a>
                        </td>
                      </tr>
                      )
                  })
                  }



                </tbody>
              </table>
              <div class="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
                <div class="flex items-center">
                  <button type="button" class="w-full p-4 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100">
                    <svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                      </path>
                    </svg>
                  </button>
                  <button type="button" class="w-full px-4 py-2 text-base text-indigo-500 bg-white border-t border-b hover:bg-gray-100 ">
                    1
                  </button>
                  <button type="button" class="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100">
                    2
                  </button>
                  <button type="button" class="w-full px-4 py-2 text-base text-gray-600 bg-white border-t border-b hover:bg-gray-100">
                    3
                  </button>
                  <button type="button" class="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100">
                    4
                  </button>
                  <button type="button" class="w-full p-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-100">
                    <svg width="9" fill="currentColor" height="8" class="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                      </path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PengolahanData