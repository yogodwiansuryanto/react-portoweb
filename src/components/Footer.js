import React from 'react'

export default function Footer() {
  return (
    <div>
     <footer className="bg-primary pt-8 pb-8">
    <div className="container">
      <div className="flex flex-wrap">
        <div className="w-full px-4 mb-12 text-white font-semibold text-xs md:w-1/3">
          <h2 className="font-bold text-xl text-secondary mb-5">Yogo Dwi Ansuryanto</h2>
          <h3 className="font-bold text-lg text-black mb-2">Hubungi Saya</h3>
          <p className="opacity-80">+62 821 5070 1084 · yogodwiansuryanto@gmail.com</p>
          <p className="opacity-80">Jalan Mawar IV No. 111 RT 36 Tanjung Laut, Bontang Selatan</p>
          <p className="opacity-80">Bontang - Kalimantan Timur</p>
        </div>
        <div className="hidden lg:block lg:pl-32 2xl:xl:pl-44 w-full px-4 mb-12 md:w-1/3">
          <a href="#" className="">
            <img src="images/logo.svg" alt="logo footer" className="w-32 h-28"/>
          </a>
        </div>
        <div className="w-full px-4 mb-12 md:w-1/3 lg:pl-[200px] 2xl:pl-72">
          <h3 className="font-bold text-lg text-black mb-2">Tautan</h3>
          <ul className="text-white text-sm">
            <li>
                <a href="#home" className="opacity-80 inline-block hover:text-secondary hover:opacity-100 mb-3">Beranda</a>
            </li>
            <li>
              <a href="#about" className="opacity-80 inline-block hover:text-secondary hover:opacity-100 mb-3">Tentang Saya</a>
            </li>
            <li>
              <a href="#experience" className="opacity-80 inline-block hover:text-secondary hover:opacity-100 mb-3">Pengalaman</a>
            </li>
            <li>
              <a href="#contact" className="opacity-80 inline-block hover:text-secondary hover:opacity-100 mb-3">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full pt-10 border-t border-secondary">
        <div className="flex items-center justify-center mb-5">

          <a href="https://www.youtube.com/" target="blank">
            <img
              src="/images/Youtube2.svg"
              alt="youtube2"
              width="36px"
              height="36px"
              className="mr-4 rounded-full bg-blue-950 hover:bg-secondary"
            />
          </a>
          <a href="https://www.instagram.com" target="blank">
            <img
              src="/images/Instagram2.svg"
              alt="instagram2"
              width="36px"
              height="36px"
              className="mr-4 rounded-full bg-blue-950 hover:bg-secondary"
            />
          </a>
          <a href="https://www.linkedin.com" target="blank">
            <img
              src="/images/Linkedin2.svg"
              alt="Linkedin2"
              width="36px"
              height="36px"
              className="mr-4 rounded-full bg-blue-950 hover:bg-secondary"
            />
          </a>
          <a href="https://discord.com" target="blank">
            <img
              src="/images/discord2.svg"
              alt="discord2"
              width="36px"
              height="36px"
              className="mr-4 rounded-full bg-blue-950 hover:bg-secondary"
            />
          </a>
          <a href="https://www.tiktok.com/" target="blank">
            <img
              src="/images/Tiktok2.svg"
              alt="tiktok2"
              width="36px"
              height="36px"
              className="mr-4 rounded-full bg-blue-950 hover:bg-secondary"
            />
          </a>
        </div>
        <p className="text-center font-medium text-xs text-white opacity-80">est 2023</p>
      </div>
    </div>
  </footer> 
    </div>
  )
}