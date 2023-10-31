import Image from "next/image";

export default function Experiences(){
    return (
        <div className="h-2/3 w-4/5">
            <div className="flex items-center justify-center p-8">
                <p className="flex px-5 text-5xl">Experiences</p>
                <p className="flex px-5 text-5xl">経験</p>
            </div>
            <div className="flex">
                <div className="flex items-center justify-center basis-2/3">
                    Carousel
                </div>
                <div className="flex-col basis-1/3 bg-pastel-blue px-8 py-14 shadow-gray-50">
                    <div className="flex text-3xl">
                        As a student taking Bachelor of
                        Science in Computer Science
                        specializing in Software and
                        Systems, I have an experience
                        in developing systems from
                        back end to front end. I also have
                        the knowledge in managing projects
                    </div>
                    <div className="flex justify-end">
                        <button className="my-8 hover:text-white">
                            <a href="/" className="text-xl font-semibold p-2">See my previous projects</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}