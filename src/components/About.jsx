import { useGSAP } from "@gsap/react"
import { gsap } from "gsap";


const About = () => {

    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#clip",
                start: "center center",
                end: "+=800px",
                scrub: 0.5,
                pin: true,
                pinSpacing: true

            }
        })
    }, [])

    return (
        <div id="about" className="min-h-screen w-screen">
            <div className="relative mb-8 mt-36 flex flex-col items-center gap-5 ">
                <h2 className="font-general text-sm uppercase md:text-[10px]">
                    Welcome to Zentry
                </h2>
                <div className="mt-5 text-center text-4xl uppercase leading-[0.8] md:text[6rem]">
                    Disc<b>o</b>ver the world's <br />
                    <b>l</b>argest shared adventure
                </div>
                <div className="about-subtext">
                    <p>The Game of Games begins-your life, now an epic MMORPG</p>
                    <p>Zentry unites every player from countless games an platforms, <br />
                        both digital and physical, into a Unified Economy</p>
                </div>
            </div>\
            <div id="clip" className="h-dvh w-screen ">
                <div className="mask-clip-path about-image">
                    <img src="img/about.webp" alt="Background"
                        className="absolute-left-0 top-0 size-full object-cover" />
                </div>
            </div>
        </div>
    )
}

export default About