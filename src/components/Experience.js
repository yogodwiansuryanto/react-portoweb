import { useEffect, useState } from 'react'
import { fetchApi } from '../services/ExperContactServ'

export default function Experience() {

    const [dataList, setDataList] = useState([])
    const [isLoading] = useState(false)

    const getData = async () => {
      const data = await fetchApi()
      setDataList(data)

    }

    useEffect(() => {
      getData()

  }, [])


  return (
    <>
      <section id="experience" className="pt-36 pb-32 bg-primary">
  <div className="container">
    <div className="w-full px-4">
      <div className="max-w-xl mx-auto text-center mb-16">
        <h4 className="font-bold text-lg text-secondary mb-2 md:text-2xl lg:text-4xl">Pengalaman</h4>
        <p className="font-semibold text-[12px] text-third md:text-lg">“Berikut pengalaman Karier Saya”</p> 
      </div>
    </div>

    <div className="flex flex-wrap">
    {isLoading ? (<div>Loading</div>) : ""}
                    {dataList.map((item) => (
      <div className="w-full px-4 lg:w-1/2 xl:w-1/3" key={item.id}>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
          <img src={"asset" + "/" + item.images} alt="IMM Logo" className="w-full"/>
          <div className="py-1 px-6">
            <h3> <a href="#" className="block mb-0.5 font-semibold text-[12px] text-black transition duration-500 hover:text-secondary uppercase">{item.perusahaan}</a>
            </h3>
            <p className="font-medium text-[12px] text-fourth">{item.tahun}</p>
            <a href="#" className="block mt-6 mb-7 font-semibold text-[12px] text-black underline transition duration-500 hover:text-secondary">Baca Selengkapnya</a>
          </div>
        </div>
      </div>
      ))}
    </div>
  </div>
</section>
    </>
  )
}


<section id="experience" className="pt-36 pb-32 bg-primary">
  <div className="container">
    <div className="w-full px-4">
      <div className="max-w-xl mx-auto text-center mb-16">
        <h4 className="font-bold text-lg text-secondary mb-2 md:text-2xl lg:text-4xl">Pengalaman</h4>
        <p className="font-semibold text-[12px] text-third md:text-lg">“Berikut pengalaman Karier Saya”</p> 
      </div>
    </div>

    <div className="flex flex-wrap">
      <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
          <img src="asset/IMM.svg" alt="IMM Logo" className="w-full"/>
          <div className="py-1 px-6">
            <h3> <a href="#" className="block mb-0.5 font-semibold text-[12px] text-black transition duration-500 hover:text-secondary">PT Indominco Mandiri</a>
            </h3>
            <p className="font-medium text-[12px] text-fourth">Sep 2014 - Apr 2015</p>
            <a href="#" className="block mt-6 mb-7 font-semibold text-[12px] text-black underline transition duration-500 hover:text-secondary">Baca Selengkapnya</a>
          </div>
        </div>
      </div>
      <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
          <img src="asset/KNE.svg" alt="IMM Logo" className="w-full"/>
          <div className="py-1 px-6">
            <h3> <a href="#" className="block mb-0.5 font-semibold text-[12px] text-black transition duration-500 hover:text-secondary">PT Kaltim Nusa Etika</a>
            </h3>
            <p className="font-medium text-[12px] text-fourth">Jul 2015 - Des 2019</p>
            <a href="#" className="block mt-6 mb-7 font-semibold text-[12px] text-black underline transition duration-500 hover:text-secondary">Baca Selengkapnya</a>
          </div>
        </div>
      </div>
      <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
          <img src="asset/KMU.svg" alt="KMU Logo" className="w-full"/>
          <div className="py-1 px-6">
            <h3> <a href="#" className="block mb-0.5 font-semibold text-[12px] text-black transition duration-500 hover:text-secondary">PT Kaltim Medika Utama</a>
            </h3>
            <p className="font-medium text-[12px] text-fourth">Agu 2020 - Apr 2023</p>
            <a href="#" className="block mt-6 mb-7 font-semibold text-[12px] text-black underline transition duration-500 hover:text-secondary">Baca Selengkapnya</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


   