import Image from 'next/image'
import Navbar from './Navbar'
import backgroundImage from '../images./white.png'

export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col items-center">
      <Navbar/>
      {/* move the code from navbar.tsx into page.tsx because its supposed to be here
      and then make small compontent .tsx files for each component on the page that im
      creating such as: navbar( which exist alr), about me, projects, skills  */}

        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        
          
        </div>
      
    </main>
   
  )
}
