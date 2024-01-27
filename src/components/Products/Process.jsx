import React from 'react'
import idea from '@assets/searchingidea.svg'
import idea1 from '@assets/idea1.svg'
import idea2 from '@assets/idea3.svg'
const Process = () => {
  return (
    <section className='py-16'>
      <div className='container'>
        <div className=" font-arvo pb-16 text-center">
          <div className="font-dm-sans pb-3 text-l font-medium leading-[40px] text-[#4750EB]">
            Working Proceess
          </div>
          <b className=" text-2xl leading-[10px] tracking-[-0.5px]">
            We complete every step carefully
          </b>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3'>
          <div className='flex'>
            <div className='px-4'>
              <img src={idea} alt="" />
            </div>
            <div className='flex-col'>
                <p className='py-2'>Step 1</p>
                <b className='text-xl py-6'>Searching Idea</b>
                <p>Get your blood tests delivered at home collect a sample from the news.</p>
            </div>
          </div>
          <div className='flex'>
            <div className='px-4'>
              <img src={idea1} alt="" />
            </div>
            <div className='flex-col'>
                <p className='py-2'>Step 2</p>
                <b className='text-xl py-6'>Create Prototype</b>
                <p>Get your blood tests delivered at home collect a sample from the news.</p>
            </div>
          </div>
          <div className='flex'>
            <div className='px-4'>
              <img src={idea2} alt="" />
            </div>
            <div className='flex-col '>
                <p className='py-2'>Step 3</p>
                <b className='text-xl py-6'>Now Start your journey</b>
                <p>Get your blood tests delivered at home collect a sample from the news.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process