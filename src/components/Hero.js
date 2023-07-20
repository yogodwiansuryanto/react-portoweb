import React from 'react'

export default function Hero() {
  return (
    <>
      <div id="home" className="pt-36">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-xs font-semibold text text-primary mb-2 md:text-xl">
                Hai semua 🙌,saya
                <span className="block font-bold text-secondary text-2xl mt-1 lg:text-5xl">
                  Yogo Dwi Ansuryanto
                </span>
              </h1>
              <h2 className="font-semibold text-xs text-third mb-2 lg:text-2xl">
                Fullstack developer
              </h2>
              <p className="font-semibold text-third mb-10 leading-relaxed">
                “Lebih baik gagal telah mencoba, daripada menyesal tidak
                mencoba”
              </p>

              <a
                href="#"
                className="text-base font-semibold text-white bg-primary opacity-80 px-5 py-3 rounded-full hover:shadow-lg hover:opacity-100 hover:text-secondary transition duration-300 ease-in-out"
              >
                Hubungi Saya
              </a>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="mt-10 lg:mt-9 lg:right-0">
                <img
                  src="/images/FotoProfile2.svg"
                  alt="Yogo Dwi"
                  className="max-w-full mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
