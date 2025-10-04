import { NavLink } from "react-router";
import './nav.css'
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Nabvar = () => {
    const [Open,setOpen]=useState(false)
    return (
          <nav className="flex justify-between items-center max-w-[1140px] mx-auto my-10">
             <div>
                <span onClick={()=>setOpen(!Open)} className="flex gap-2 justify-center items-center">
                    {
                        Open?<X className="md:hidden"></X>:<Menu className="md:hidden"></Menu>
                    }
                    <div className={`md:hidden duration-1000 flex flex-col absolute ${Open?'top-18':'-top-40'} `}>
                      <NavLink to='/'>Home</NavLink>
                      <NavLink to='/books'>Listed Books</NavLink>
                      <NavLink to='/pages'>Pages to Read</NavLink>
                    </div>
                    <h1 className="text-[1.6rem] font-medium text-black work-sans">Book Vibe</h1>
                </span>
             </div>
               <div className="hidden md:flex gap-4 work-sans text-[1.1rem]">
                   <NavLink to='/'>Home</NavLink>
                   <NavLink to='/books'>Listed Books</NavLink>
                   <NavLink to='/pages'>Pages to Read</NavLink>
               </div>
               <div className="work-sans flex gap-2">
                  <button className="bg-[#23be0a] text-[1.1rem] font-medium px-2 py-1.5 text-white rounded-[.6rem]">Sign In</button>
                  <button className="bg-[#59c6d2] text-[1.1rem] font-medium px-2 py-1.5 text-white rounded-[.6rem]">Sign Up</button>
               </div>
          </nav>
    );
};

export default Nabvar;