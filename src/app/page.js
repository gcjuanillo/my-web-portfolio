import Image from 'next/image'

export default function Home() {
  return (
    <nav className='flex items-center justify-between px-10 py-2'>
      <Image
          src="/logo.png"
          alt="Juanillo"
          title="home"
          height={100}
          width={120}
        />
      <div className="flex items-center space-x-4">
        
        <ul className='flex items-center space-x-2 px-2'>
          <li><a href="#" className="text-black text-xl">Home</a></li>
          <li><a href="#" className="text-black text-xl">Experience</a></li>
          <li><a href="#" className="text-black text-xl">About</a></li>
          <li><a href="#" className="text-black text-xl">Music</a></li>
        </ul>
        
      </div>
      <a href="#" className='text-xl'> Download CV</a>
    </nav>
  )
}
