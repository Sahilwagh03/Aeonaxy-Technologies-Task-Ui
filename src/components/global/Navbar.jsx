import React from 'react'

const Navbar = () => {
    return (
        <header className='border-b-[1px] border-gray-300 bg-white'>
            <div className='flex flex-row justify-between md:px-[50px] p-[20px] '>
                <div className='flex flex-row gap-10 items-center'>
                    <img src="/paypalLogo.png" alt="paypal" width={35} height={35} />
                    <nav className='hidden md:block'>
                        <ul className="flex items-center gap-10 list-none">
                            <li>
                                <a href="#">Personal</a>
                            </li>
                            <li>
                                <a href="#">Business</a>
                            </li>
                            <li>
                                <a href="#">Developer</a>
                            </li>
                            <li>
                                <a href="#">Help</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='flex flex-row items-center gap-3'>
                    <button
                        className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none min-w-[84px]"
                    >
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full  px-4 py-1 text-sm font-medium backdrop-blur-3xl text-[#012f86] border-2 border-[#012f86]">
                            Login
                        </span>
                    </button>
                    <button
                        className="relative  h-10 overflow-hidden rounded-full p-[2px] focus:outline-none min-w-[84px] hidden md:inline-flex"
                    >
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl bg-[#012f86]">
                            Sign Up
                        </span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Navbar