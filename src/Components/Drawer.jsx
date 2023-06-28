import React from 'react'
import { FaBars } from 'react-icons/fa'
import Hero from './Hero'
import Projects from './Projects'
import Tech from './Tech'
import Contact from './Contact'
import Footer from './Footer'


const Drawer = () => {
  return (
    <div>
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col gap-10">
                <label htmlFor="my-drawer" className="btn drawer-button fixed top-4 left-4"><FaBars/></label>
                {/* Page content here */}
                <div><Hero/></div>
                <div><Tech/></div>
                <div><Projects/></div>
                <div><Footer/></div>
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content flex flex-col gap-20 justify-center">
                    <li ><a href='#home'>Home</a></li>
                    <li ><a href='#projects'>Projects</a></li>
                    <li ><a href='#tech'>Tech Tool Belt</a></li>

                </ul>
            </div>
        </div>
    </div>

  )
}

export default Drawer