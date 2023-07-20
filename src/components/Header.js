import React from 'react'

export default function Header() {
  window.onscroll = function () {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;
  
    if (window.pageYOffset > fixedNav) {
      header.classList.add("navbar-fixed");
    } else {
      header.classList.remove("navbar-fixed");
    }
  };
  return (
    <div>
      <header className="bg-primary absolute top-0 left-0 w-full flex items-center z-10">
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <a href="#home" className="w-16 block py-6">
                <img src="/images/logo.svg" alt="logoweb" />
              </a>
            </div>
            <div className="flex items-center px-4">
              <button
                id="hamburger"
                aria-label="hamburger"
                name="hamburger"
                type="button"
                className="block absolute right-4 lg:hidden"
              >
                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>

              <nav
                id="nav-menu"
                className="hidden absolute py-5 bg-primary bg-opacity-90 shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <a
                      href="#home"
                      className="text-base text-white py-2 mx-8 flex group-hover:text-secondary"
                    >
                      Beranda
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#about"
                      className="text-base text-white py-2 mx-8 flex group-hover:text-secondary"
                    >
                      Tentang Saya
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#experience"
                      className="text-base text-white py-2 mx-8 flex group-hover:text-secondary"
                    >
                      Pengalaman
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#contact"
                      className="text-base text-white py-2 mx-8 flex group-hover:text-secondary"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      
    </div>
  )
}
