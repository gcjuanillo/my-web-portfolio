import Image from "next/image"

export default function NavBar(){
    return (
        <nav className='sticky top-0 flex items-center justify-between px-28 py-5'>
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
                <li><a href="#" className="lg:text-4xl md:text-3xl font-semibold">Home</a></li>
                <p className="text-4xl font-bold">|</p>
                <li><a href="#" className="lg:text-4xl md:text-3xl font-semibold">Experience</a></li>
                <p className="text-4xl font-bold">|</p>
                <li><a href="#" className="lg:text-4xl md:text-3xl font-semibold">About</a></li>
                <p className="text-4xl font-bold">|</p>
                <li><a href="#" className="lg:text-4xl md:text-3xl font-semibold">Music</a></li>
            </ul>
            
        </div>
        <a href="#" className='lg:text-3xl md:text-2xl font-semibold'> Download CV</a>
        </nav>
    )
}