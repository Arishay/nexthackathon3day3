// import React from 'react'
// import Hero  from './components/Hero'
// import Best from './components/Best'
// import Essential from './components/Essential'
// import Fetured from './components/Fetured'



// export default function Home() {
//   return (
//     <div>
      
//       <Hero/>
//       <Best/>
//       <Fetured/>
//       <Essential/>
   
//     </div>
//   )
// }
import React from "react";
import Hero from "./components/Hero";
import Best from "./components/Best";
import Essential from "./components/Essential";
import Fetured from "./components/Fetured";
//import CartSummary from "./components/CartSummary";

export default function Home() {
  return (
    <div>
      <Hero />
      <Best />
      <Fetured />
      <Essential />
    
    </div>
  );
}
