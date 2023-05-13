import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    // bg-gradient-to-tl from-sky-500 to-fuchsia-500
    // bg-slate-700

    <div className="min-h-screen flex flex-col bg-gradient-to-tl from-sky-500 to-fuchsia-500 text-white overflow-x-hidden">

      <div id="navbar-wrap" className="bg-slate-200 fixed w-screen z-50">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto px-8">
          <Link className="py-4 text-slate-800 text-xl font-bold" href="#">Portfolio</Link>

          <div className="lg:hidden inline-block relative group/smnav text-slate-700 font-medium text-center">
            <button className="text-center py-4 px-2 hover:text-slate-900">Menu</button>
            <div className="hidden absolute right-0 group-hover/smnav:flex flex-col bg-slate-200 rounded-b-md divide-y divide-slate-700 border-solid border-2 border-slate-700">
              <Link className="px-6 py-2 hover:text-slate-900" href="#">Home</Link>
              <Link className="px-6 py-2 hover:text-slate-900" href="#projects" scroll={false}>Projects</Link>
              <Link className="px-6 py-2 hover:text-slate-900 rounded-b-md" href="#contact" scroll={false}>Contact</Link>
            </div>
          </div>

          <div className="text-slate-700 font-medium my-auto hidden lg:flex">
            <Link className="px-4 hover:text-slate-900" href="#">Home</Link>
            <Link className="px-4 hover:text-slate-900" href="#projects" scroll={false}>Projects</Link>
            <Link className="pl-4 hover:text-slate-900" href="#contact" scroll={false}>Contact</Link>
          </div>
        </div>
      </div>

      <div className="py-4 text-xl font-bold text-transparent">T</div>

      <div id="intro-wrap" className="bg-white w-screen">
        <div className="flex lg:flex-row flex-col content-center max-w-screen-lg mx-auto py-8 lg:gap-x-12">
          <div className="relative overflow-hidden flex-none w-40 lg:w-[28rem] h-40 lg:h-[28rem] group/intropic mx-auto lg:mx-0 mb-4 lg:mb-0 order-first lg:order-last">
            <Image fill className="my-auto aspect-square object-cover transition-all duration-500 delay-150 ease-in-out rounded-3xl group-hover/intropic:rounded-full" src="/photo2.jpg" alt="wallpaper_pic.jpg" />
          </div>
          <div className="my-auto px-16 lg:px-0 lg:px-none order-last lg:order-first">
            <h2 className="text-slate-800 text-6xl font-bold mb-3 text-center lg:text-justify">Hello there<span className="hidden lg:inline-block">...</span></h2>
            <p className="text-slate-700 text-md text-center lg:text-justify">
              <span className="block font-medium text-base mb-1">Welcome to my Website!</span>
              <span className="block mb-2">I&apos;m an Indonesian Web Developer, I started coding since I was 15 years old, now I am an 18 years old fresh graduate, and I am looking for a job or an internship.</span>
              <span className="block mb-2">It was my father&apos;s idea, at first I hated Programming, but as time goes on I guess it started to grow on me, so I continued to study programming up until today and for the rest of my life (maybe... Idk).</span>
              <span className="block">I studied Programming at <span className="font-medium">FreeCodeCamp</span>.</span>
              <span className="block">Thank you <Link className="text-blue-500/80 hover:text-blue-500 font-medium underline" href="#"> @quincylarson</Link> and all of the people in <Link className="text-blue-500/80 hover:text-blue-500 font-medium underline" href="#">freecodecamp</Link>.</span>
              <span className="block">I created this site to showcase my projects and the things I achieved.</span>
            </p>
          </div>
        </div>
      </div>

      <div id="projects" className="max-w-screen-md mx-auto py-12">
        <div className="flex justify-center mb-10">
          <h2 className="py-6 px-12 rounded-full text-5xl lg:text-6xl font-bold text-center bg-white text-slate-700 flex">Projects & Certificates</h2>
        </div>

        <div className="flex gap-x-8 text-slate-700 bg-white rounded-none lg:rounded-xl py-6 px-8 mb-0 lg:mb-6">
          <div className="flex-none h-fit w-fit">
            <Image className="aspect-square object-cover rounded-xl" src="/fcc_primary_small.jpg" width={150} height={150} alt="freecodecamp_logo.jpg"/>
          </div>
          <ul className="flex-auto my-auto list-disc">
            <span className="block text-xl font-bold mb-2">FreeCodeCamp Certificates</span>
            <li>
              <span className="block text-md font-medium">FreeCodeCamp Responsive Web Design Certificate</span>
              <Link className="text-blue-500/80 hover:text-blue-500" href="https://www.freecodecamp.org/certification/hanifas424/responsive-web-design">
                Link
              </Link> to see the Certificate.
            </li>
            <li>
              <span className="block text-md font-medium">FreeCodeCamp JavaScript Algorithms and Data Structures</span>
              <Link className="text-blue-500/80 hover:text-blue-500" href="https://www.freecodecamp.org/certification/hanifas424/javascript-algorithms-and-data-structures">
                Link
              </Link> to see the Certificate.
            </li>
            <li>
              <span className="block text-md font-medium">FreeCodeCamp Front End Development Libraries</span>
              <Link className="text-blue-500/80 hover:text-blue-500" href="https://www.freecodecamp.org/certification/hanifas424/front-end-development-libraries">
                Link
              </Link> to see the Certificate.
            </li>
            <li>
              <span className="block text-md font-medium">FreeCodeCamp Scientific Computing with Python</span>
              <Link className="text-blue-500/80 hover:text-blue-500" href="https://www.freecodecamp.org/certification/hanifas424/scientific-computing-with-python-v7">
                Link
              </Link> to see the Certificate.
            </li>
          </ul>
        </div>
      </div>

      <div id="contact" className="bg-slate-700 w-screen text-white/75">
        <div className="max-w-screen-md mx-auto my-4 flex flex-col justify-center items-center">
          <h2 className="font-semibold cursor-pointer hover:text-white -mb-0.5">@hanif424</h2>
          <div className="text-white/50">
            <Link className="mx-2 hover:text-white" href="https://github.com/hanifas-cs50/">Github</Link>
            <Link className="mx-2 hover:text-white" href="https://www.linkedin.com/in/hanif-as-976aaa247/">LinkedIn</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
