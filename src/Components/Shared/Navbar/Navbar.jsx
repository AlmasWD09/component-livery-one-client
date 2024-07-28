import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className=' bg-white z-10 shadow-sm'>
            <div className=" px-6 py-4   dark:bg-slate-800">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Link to='/' className="flex items-center">
                                <img src={"icon"} alt="" />
                                <h2 className="text-2xl font-bold">Project<span className="text-primary">Name</span></h2>
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <div className="flex lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                aria-label="toggle menu"
                            >
                                {!isOpen ? (
                                    <TiThMenu className="text-2xl " />
                                ) : (
                                    <IoMdClose className="text-2xl " />
                                )}
                            </button>
                        </div>
                    </div>

                        {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                <div className={`absolute flex flex-col lg:hidden bg-gray-100 w-[89%] z-20 transition-all duration-300 ease-in-out 
                 ${isOpen ? 'translate-x-8 opacity-100' : 'opacity-0 -translate-x-full'
                        }`}
                >
                    <div className="">
                    <NavLink
                        to='/dashboard/my-enroll-class'
                        className={({ isActive }) =>
                            ` flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'}`}>
                        <FaHome className='w-5 h-5' />
                        <span className='mx-4 font-medium'>My Enroll Class</span>
                    </NavLink>
                    <NavLink
                        to='/dashboard/add-class'
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'}`}>
                        <FaHome className='w-5 h-5' />
                        <span className='mx-4 font-medium'>Add Class</span>
                    </NavLink>
                     {/* user---> Home/Profile/Logout menu */}
                     <div className="">
                        <hr />

                        {/* Home Menu */}
                        <NavLink
                        to='/'
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                            }`
                        }
                    >
                        <FaHome className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Home</span>
                    </NavLink>

                        {/* profile menu */}
                        {
                            role === 'student' ? <NavLink
                                to='/dashboard/profile'
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                                    }`
                                }
                            >
                                <FcSettings className='w-5 h-5' />

                                <span className='mx-4 font-medium'>Profile</span>
                            </NavLink>
                                :
                                ''
                        }

                        <NavLink to='/login'>
                            <button
                                className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
                            >
                                <GrLogout className='w-5 h-5' />

                                <span className='mx-4 font-medium'>Logout</span>
                            </button>
                        </NavLink>
                    </div>
                    </div>
                    
                </div>




                    {/* Large Device for */}
                    <div className="hidden  lg:flex">
                        <a href="#" className="hover:text-primary">
                            <Button text={"Home"} />
                        </a>
                        <a href="#" className="hover:text-primary">
                            <Button text={"About"} />
                        </a>
                        <a href="#" className="hover:text-primary">
                            <Button text={"Protfolio"} />
                        </a>
                        <a href="#" className="hover:text-primary">
                            <Button text={"Blogs"} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;