import React from 'react'
import Link from 'next/link'

const projects = [
  {
    src: "/college/tucil2stima.webm",
    title: "Bezier Curve (Group Project)",
    desc: "A website to generate bezier curve points with divide and conquer or brute force algorithm",
    href: "https://tucil2-13522145-13522163-t4uo.vercel.app/"
  },
  {
    src: "/college/tubes2oop.webm",
    title: "Harvest Moon (Group Project)",
    desc: "Create simple harvest moon game with Java using JavaFX",
    href: "",
  }
]

const CollegeProjects = () => {
  return (
    <div className='space-y-8'>
      <h3 className='text-2xl font-black' data-aos="fade-up">College Assigments</h3>
      <ul className='flex flex-wrap justify-between gap-y-6'>
          {projects.map((item, index) => {
            return (
              <li key={index} data-aos="zoom-in">
                <Link href={item.href} className='space-y-2 w-full flex flex-col items-center justify-center '>
                  <video
                    autoPlay
                    muted
                    loop
                    className="rounded-lg w-[365px]"
                  >
                    <source src={item.src} type="video/webm" />
                  </video>
                  <div>
                    <p className='font-semibold text-center max-w-[300px]'>{item.title}</p>
                    <p className='font-regular text-gray-700 text-center max-w-[300px]'>{item.desc}</p>
                  </div>
                </Link>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default CollegeProjects