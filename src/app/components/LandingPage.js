import Image from "next/image";

export default function LandingPage(){
    return (
        <div className="flex md:flex-row flex-col">
            <div className="flex justify-center items-center basis-2/3 h-screen">
                <div className="flex h-3/4 justify-center items-center md:text-left text-center py-24">
                    <div>
                        <div className="flex"><h2 className="text-4xl">I am</h2><h3 className="text-3xl mx-10">名前は</h3></div>
                        <h1 className="text-6xl">Jonathan Juanillo</h1>
                        <h3 className="text-3xl">Full Stack & Software</h3>
                        <h3 className="text-3xl">Developer with a musical passion based in</h3>
                        <h3 className="text-3xl">Manila</h3>
                        <button className="text-3xl border-2 py-2 px-4 my-5">get in touch</button>
                    </div>
                </div>
            </div>
            <div class="flex justify-end items-end basis-1/3">
                <Image
                    src="/landing-profile.png"
                    alt="Profile Pic"
                    height={500}
                    width={500}
                />
            </div>
        </div>
    )
}