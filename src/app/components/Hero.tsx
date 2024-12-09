// import React from 'react'
// import Image from 'next/image'
// import hero from '../../../public/Image.png'
// export default function Hero() {
//   return (
//     <div className='bg-white'>
//       <div>
//         <p className='font-medium text-sm text-center'>Hello Nike App</p>
//         <p className='font-normal text-xs text-center pb-3'>Download the app to access everything Nike. <span className='font-medium text-sm text-center underline '>Get your Great</span> </p>
//       </div>
//       <div>
//         <Image
//         src={hero}
//         alt='hero'
//         className='pl-6 pr-6'/>
//       </div>

//       <div>
//         <p className='font-medium text-xs text-center pb-3 pt-6'>First Look</p>
//         <h2 className='font-medium text-5xl text-center'>NIKE AIR MAX PULSE</h2>
//         <p className='font-light text-xs text-center pb-3 pt-4'>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse <br />
//         —designed to push you past your limits and help you go to the max.</p>

//         <div className='flex gap-7 pl-96 pt-9'>
//           <button className='px-7 font-medium bg-black text-white rounded-full py-3'>Notify Me</button>
//           <button className='px-7 font-medium bg-black text-white rounded-full py-3'>Shop Air Max</button>
//         </div>
//       </div>

//     </div>
//   )
// }
import React from 'react';
import Image from 'next/image';
import hero from '../../../public/Image.png';

export default function Hero() {
  return (
    <div className="bg-white">
      {/* Header Text */}
      <div className="px-4">
        <p className="font-medium text-sm text-center">Hello Nike App</p>
        <p className="font-normal text-xs text-center pb-3">
          Download the app to access everything Nike.{' '}
          <span className="font-medium text-sm underline">Get your Great</span>
        </p>
      </div>

      {/* Hero Image */}
      <div className="flex justify-center px-4">
        <Image src={hero} alt="hero" className="w-full max-w-screen-lg object-contain" />
      </div>

      {/* Main Content */}
      <div className="px-4 text-center">
        {/* Section Title */}
        <p className="font-medium text-xs pb-3 pt-6">First Look</p>
        <h2 className="font-medium text-3xl sm:text-4xl lg:text-5xl">NIKE AIR MAX PULSE</h2>
        <p className="font-light text-xs sm:text-sm lg:text-base pt-4">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse <br />
          —designed to push you past your limits and help you go to the max.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <button className="px-7 font-medium bg-black text-white rounded-full py-3 w-full sm:w-auto">
            Notify Me
          </button>
          <button className="px-7 font-medium bg-black text-white rounded-full py-3 w-full sm:w-auto">
            Shop Air Max
          </button>
        </div>
      </div>
    </div>
  );
}
