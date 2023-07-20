import React from 'react'

export default function About() {
  return (
    <>
     <div id="about" className="pt-36 pb-32">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-10 lg:w-1/2">
            <h4 className="font-bold uppercase text-secondary text-lg mb-5 lg:text-3xl">
              Tentang Saya
            </h4>
            <p className="font-medium text-xs text-third max-w-xl lg:text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste non
              similique ut at ea eaque ducimus beatae recusandae vero quaerat.
            </p>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <h3 className="font-bold uppercase text-secondary text-lg mb-5 lg:text-3xl">
              Ayo Berteman
            </h3>
            <p className="font-medium text-xs text-third mb-6 lg:text-lg">
              Anda dapat mengenal saya lebih dekat tekan icon di bawah ini.
            </p>
            <div className="flex items-center">
              
              <a href="https://www.youtube.com/" target="blank">
                <img
                  src="/images/Youtube.svg"
                  alt="Youtube"
                  width="36px"
                  height="36px"
                  className="mr-4 rounded-full hover:bg-primary"
                />
              </a>
              
              <a href="https://www.instagram.com" target="blank">
                <img
                  src="/images/Instagram.svg"
                  alt="instagram"
                  width="36px"
                  height="36px"
                  className="mr-4 rounded-full hover:bg-primary"
                />
              </a>
             
              <a href="https://www.linkedin.com" target="blank">
                <img
                  src="/images/Linkedin.svg"
                  alt="Linkedin"
                  width="36px"
                  height="36px"
                  className="mr-4 rounded-full hover:bg-primary"
                />
              </a>
              
              <a href="https://discord.com" target="blank">
                <img
                  src="/images/discord.svg"
                  alt="discord"
                  width="36px"
                  height="36px"
                  className="mr-4 rounded-full hover:bg-primary"
                />
              </a>
              
              <a href="https://www.tiktok.com/" target="blank">
                <img
                  src="/images/Tiktok.svg"
                  alt="tiktok"
                  width="36px"
                  height="36px"
                  className="mr-4 rounded-full hover:bg-primary"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div> 
      
    </>
  )
}
