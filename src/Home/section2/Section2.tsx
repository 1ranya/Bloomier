import React from 'react';
import largeLogo from '../../medias/section_logo_bg.jpg';
function Section2() {
  return (
      <section className="section2 
        tablet:flex flex-row justify-between tablet:border-t-4 border-[#dda15e26]
      ">
        <div className='phone:h-[40vh] tablet:h-[60vh] tablet:w-[50%]'>
          <p className='font-title text-5xl text-primary-color mt-5 absolute'
          >Founder</p>
          <img className='object-cover h-[inherit]' alt="logo" src={largeLogo} width="100%"/>
        </div>
        <div className='hidden tablet:block w-[50%] tablet:flex flex-row text-secondary-color mr-5 items-center  
        '>
          <p className='font-title 
            tablet:text-[4rem]'
            style={{writingMode: "vertical-rl", textOrientation: "mixed", transform: 'scale(-1, -1)'}}
            >
            Meet Rania
          </p>
          <p className='font-text phone:text-[0.9rem] font-thin text-white 
            tablet:text-[1rem] laptop:text-[1.2rem]
          '>
              Computer engineer, painter and photographer.
              Passioned by portrait and food photography, based in Paris.
              I love meeting people, creating beautiful photo sets, 
              mix colors and create smiles on people's face.  
              I started my business in 2022. 
          </p>
        </div>
      </section>
  );
} 

export default Section2;