import React from 'react'
import Image from 'next/image'
import feat from '../../../public/Image (4).png'
import hero from '../../../public/Image (9).png'
import hero1 from '../../../public/Image (10).png'
import hero2 from '../../../public/Image (11).png'
import hero3 from '../../../public/Image (12).png'
import GearOne from './GearOne'
import Link from 'next/link'

export default function Fetured() {
  return (
    <div>
      <div>
        <h2 className="text-lg font-semibold mb-6 p-5 pt-16">Featured</h2>
        <div className="flex justify-center px-4">
          <Image src={feat} alt="hero" className="w-full max-w-screen-lg object-contain" />
        </div>
        {/*Item1 */}
        <div className="px-4 text-center pt-16">
          <h2 className="font-medium text-3xl sm:text-4xl lg:text-5xl">STEP INTO WHAT FEELS GOOD</h2>
          <p className="font-light text-xs sm:text-sm lg:text-base pt-6">
            Cause everyone should know the feeling of running in that perfect pair.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="px-7 font-medium bg-black text-white rounded-full py-3 w-full sm:w-auto">
              <Link href="/Products">Find Your Shoe</Link>
              
            </button>
          </div>
        </div>
        {/*Item2 */}
        <GearOne/>
      {/*Item3 */}
      <h2 className="text-lg font-semibold mb-6 p-5 pt-16">Dont Miss</h2>
      <div className="flex justify-center px-4">
        <Image src={hero} alt="hero" className="w-full max-w-screen-lg object-contain" />
      </div>
      <div className="px-4 text-center pt-16">
        <h2 className="font-medium text-3xl sm:text-4xl lg:text-5xl">FLIGHT ESSENTIALS</h2>
        <p className="font-light text-xs sm:text-sm lg:text-base pt-6">
          Cause everyone should know the feeling of running in that perfect pair.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <button className="px-7 font-medium bg-black text-white rounded-full py-3 w-full sm:w-auto">
          <Link href="/Products">Shop</Link>
          </button>
        </div>
      </div>
      {/*item4 */}
      <h2 className="text-lg font-semibold mb-6 p-5 pt-16">The Essentials</h2>

      <div className="flex justify-center px-4 gap-3">
        <div className='w-1/3'><Image src={hero1} alt="hero" className="w-full max-w-screen-lg object-contain" />

        </div>

        <div className='w-1/3'><Image src={hero2} alt="hero" className="w-full max-w-screen-lg object-contain" /></div>
        <div className='w-1/3'><Image src={hero3} alt="hero" className="w-full max-w-screen-lg object-contain" /></div>

      </div>

    </div>

      
      </div>
    
  )
}
