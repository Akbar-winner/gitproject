import React from 'react'
import logo from '../assets/Logo.png'
import Sign from './Sign'
import Input from './Input'
import yuklash from '../assets/Downloadapps.svg'
import laptop from '../assets/laptop.svg'

const Header = () => {
    return (
        <>
            <header className='mt-[23px]'>
                <div className="container mx-auto max-w-full w-[85%]">
                    <nav className='flex items-center justify-between'>
                        <img className='' src={logo} alt="" />
                        <ul className='flex items-center gap-[40px]'>
                            <li>
                                <a className='text-[20px] text-[#021206] font-[600] text-gray-500' href="#">
                                    Feature
                                </a>
                            </li>
                            <li>
                                <a className='text-[20px] text-[#021206] font-[600] text-gray-500' href="#">
                                    Download
                                </a>
                            </li>
                            <li>
                                <a className='text-[20px] text-[#021206] font-[600] text-gray-500' href="#">
                                    Pricing
                                </a>
                            </li>
                        </ul>
                        <ul className='flex items-center gap-[20px]'>
                            <li>
                                <a className='text-[18px] font-[600] text-gray-500' href="#">
                                    Login
                                </a>
                            </li>
                            <li>
                                <Sign />
                            </li>
                        </ul>
                    </nav>
                    <div className='mt-[60px] flex items-center justify-between w-full'>
                        <div className='flex items-start flex-col gap-[40px]'>
                            <p className='w-[487px] text-[54px] font-[600]'>
                                Develop Your Life With <span className='text-[#4EDAAC]'>One Step.</span>
                            </p>
                            <p className='text-[21px] opacity-[0.9] font-[500] w-[500px]'>
                                Pushing the possibilities of the internet. Good for
                                the last software. Make it A software night.
                            </p>
                            <Input/>
                            <img src={yuklash} alt="" />
                        </div>
                        <img src={laptop} alt="" />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header