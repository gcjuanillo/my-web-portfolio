import Image from "next/image"

export default function NavBar(){
    return (
        <nav className='sticky top-0 flex items-center justify-between px-10 py-5'>
        <a href="/">
            <Image
                src="/logo.png"
                alt="Juanillo"
                title="home"
                height={100}
                width={120}
            />
        </a>
        <div className="flex items-center space-x-4">
            
            <ul className='flex items-center space-x-2 px-2'>
            <li><a href="#" className="text-black lg:text-4xl md:text-3xl">Home</a></li>
            <li><a href="#" className="text-black lg:text-4xl md:text-3xl">Experience</a></li>
            <li><a href="#" className="text-black lg:text-4xl md:text-3xl">About</a></li>
            <li><a href="#" className="text-black lg:text-4xl md:text-3xl">Music</a></li>
            </ul>
            
        </div>
        <a href="#" className='lg:text-3xl md:text-2xl'> Download CV</a>
        </nav>
    )
}