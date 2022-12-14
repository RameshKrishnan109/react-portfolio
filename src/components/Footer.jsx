import React from 'react'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'

function Footer() {
    return (
        <div className='flex flex-col items-center bg-black'>
            <div className='max-w-[1200px] w-[90%] py-[5rem]'>

                <div className='flex flex-col gap-6 sm:gap-0 sm:flex-row sm:justify-between'>

                    <div className='flex flex-col gap-4 w-[90%] sm:w-[50%]'>
                        <h2 className='text-white font-bold'>
                            RAMESH KRISHNAN
                        </h2>
                        <p className='text-white text-[15px]'>
                            A Frontend React Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
                        </p>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <h2 className='text-white'>
                            SOCIAL
                        </h2>
                        <div className='flex gap-4'>
                            <FaLinkedinIn size={20} className='text-white cursor-pointer' onClick={()=>{
                                window.open("https://www.linkedin.com/in/ramesh-krishnan-6a5b91202/","_blank");
                            }}/>
                            <FaGithub size={20} className='text-white cursor-pointer' onClick={()=>{
                                window.open("https://github.com/RameshKrishnan109","_blank");
                            }}/>
                        </div>
                    </div>

                </div>

                <div className='w-full h-[1px] rounded-md bg-[#797979] mt-12'/>

                <p className='text-white text-[14px] text-center mt-8 font-normal'>
                    © Copyright 2022. Made by <span className='font-bold'>RAMESH KRISHNAN</span>
                </p>

            </div>
        </div>

    )
}

export default Footer