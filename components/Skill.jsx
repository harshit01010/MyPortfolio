import React from 'react'
import Image from 'next/image'

const Skill = ({skillName}) => {
  return (
    <div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in-out duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src="/../public/assets/pic2.jpg"  alt='/' width='64' height='64' />
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <p>{skillName}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skill