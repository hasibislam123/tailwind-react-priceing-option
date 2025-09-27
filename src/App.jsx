import { Suspense } from 'react'

import './App.css'
import DaisyNave from './component/DaisyNave/DaisyNave'
import Navbar from './component/Navbar/Navbar'
import PricingOption from './component/pricingOption/PricingOption'
import ResultChart from './component/ResultChart/ResultChart'
import MarckChart from './component/MarckChart/MarckChart'
import axios from 'axios'

function App() {

  const PricingPromiss = fetch('/public/PricingData.json')
  .then(res => res.json())
  
  const maksPromise = axios.get('/public/MarksData.json')
  return (
    <>
      <header>
        {/* <DaisyNave></DaisyNave> */}
        <Navbar></Navbar>

      </header>
      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <PricingOption PricingPromiss={PricingPromiss}></PricingOption>
        </Suspense>
        
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <MarckChart></MarckChart>
        </Suspense>

        <ResultChart maksPromise={maksPromise}></ResultChart>
      </main>
      
    </>
  )
}

export default App
