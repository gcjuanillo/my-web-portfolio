import Image from 'next/image'
import NavBar from './components/Navbar';
import LandingPage from './components/LandingPage';

export default function Home() {
  return (
    <div className="snap-y scroll-smooth top-0 snap-mandatory overflow-auto h-screen w-screen">
      {/* Landing Page */}
      <NavBar />
      <div className="snap-center h-screen w-screen">
        <LandingPage />
      </div>
      {/* Experience Page */}
      <div className="snap-center h-screen w-screen flex items-center justify-center">
        <p className='text-5xl'>Two</p>
      </div>
      {/* About */}
      <div className="snap-center h-screen w-screen flex items-center justify-center">
        <p className='text-5xl'>Three</p>
      </div>
      {/* Music */}
      <div className="snap-center h-screen w-screen flex items-center justify-center">
        <p className='text-5xl'>Four</p>
      </div>
    </div>
    
  )
}
