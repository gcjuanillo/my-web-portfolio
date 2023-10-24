import Image from "next/image";

export default function Experiences(){
    return (
        <div>
            <div className="flex items-center justify-center">
                <p className="flex px-5">Experiences</p>
                <p className="flex px-5">経験</p>
            </div>
            <div className="flex h-2/3">
                <div className="flex basis-2/3">
                    Slide
                </div>
                <div className="flex-col basis-1/3">
                    <div>
                        As a student taking Bachelor of
                        Science in Computer Science
                        specializing in Software and
                        Systems, I have an experience
                        in developing systems from
                        back end to front end. I also have
                        the knowledge in managing projects
                    </div>
                    <div className="flex-col">
                        Project Proofs
                    </div>
                </div>
            </div>
        </div>
    )
}