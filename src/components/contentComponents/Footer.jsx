import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col gap-6 mt-20 md:mt-40 md:px-[50px] p-[20px] lg:flex-col'>
            <div>
                <img src="/paypalLogoFull.svg" alt="paypalLogo" width={120} />
            </div>
            <div>
                <div>
                    <ul className='flex flex-row gap-[30px] font-bold text-[.875rem] text-[#2360cf] lg:gap-8'>
                        <li>
                            <a>
                                Help
                            </a>
                        </li>
                        <li>
                            <a>
                                Contact
                            </a>
                        </li>
                        <li>
                            <a>
                                Fees
                            </a>
                        </li>
                        <li>
                            <a>
                                Security
                            </a>
                        </li>
                        <li>
                            <a>
                                Shop
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className="hidden lg:block border-0 lg:border-t lg:border-solid lg:border-gray-400 lg:h-0 lg:my-4" />
                <div>
                    <div className="flex flex-row justify-between font-bold text-[#2360cf] mt-[20px] lg:mt-0">
                        <ul className="flex flex-col text-[.875rem] gap-4 lg:flex-row">
                            <li><a>About</a></li>
                            <li><a>Newsroom</a></li>
                            <li><a>Jobs</a></li>
                            <li><a>Investor Relationship</a></li>
                            <li><a>Value in Action</a></li>
                            <li><a>Public Policy</a></li>
                            <li><a>Sitemap</a></li>
                        </ul>
                        <ul className="flex flex-col text-[.875rem] gap-4 lg:flex-row">
                            <li className=' text-gray-400 font-medium'>© 1999–2024</li>
                            <li><a>Accessibility</a></li>
                            <li><a>Privacy</a></li>
                            <li><a>Cookies</a></li>
                            <li><a>Legal</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer