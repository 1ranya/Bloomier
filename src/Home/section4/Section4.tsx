import React from 'react'
import logo from '../../medias/section_4_bg.jpg'
export default function Section4() {
  return (
    <section className="section4
      tablet:flex flex-row justify-between tablet:border-y-4 border-[#dda15e26]
    ">
      <div className='hidden 
        tablet:block w-[50%] tablet:flex flex-row text-secondary-color mx-5 items-center  
      '>
        <p className='font-text text-[0.9rem] font-thin text-white 
          laptop:text-[1.2rem]
        '>
            Computer engineer, painter and photographer.
            Passioned by portrait and food photography, based in Paris.
            I love meeting people, creating beautiful photo sets, 
            mix colors and create smiles on people's face.  
            I started my business in 2022. 
        </p>
      </div>
      <div className='h-[40vh] 
        widePhone:h-[50vh] tablet:w-[50%] tablet:h-[60vh]
        '>
        <p className='font-title text-center text-5xl text-primary-color mt-5 absolute
          laptop:text-[4rem]
          '>Services</p>
        <img className= 'h-[inherit] object-cover' src={logo} alt="img of the section 3"  width="100%"></img>
      </div>
    </section>
  )
}
