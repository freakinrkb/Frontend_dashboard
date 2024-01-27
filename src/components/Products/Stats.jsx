import React from 'react';
import img1 from '@assets/1.svg';
import img2 from '@assets/2.svg';
import img3 from '@assets/3.svg';
import img4 from '@assets/4.svg';

const Stats = () => {
    return (
        <section className='py-16 bg-[#EDEEF1]'>
            <main className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-32 justify-center pb-10'>
                    <div className='text-center'>
                        <div className='flex justify-center'><img src={img1} alt="" /></div>
                        <div className='text -[#2576BC] py-4 text-5xl font-extrabold'>85.45%</div>
                        <div className='text-[#2576BC] text-l'>Accuracy rate</div>
                        <div>in fulfilling orders</div>
                    </div>
                    <div className='text-center'>
                        <div className='flex justify-center'><img src={img2} alt="" /></div>
                        <div className='text -[#2576BC] py-4 text-5xl font-extrabold'>12.5M</div>
                        <div className='text-[#2576BC] text-l'>On the Inc. 5000</div>
                        <div>Business Deals</div>
                    </div>
                    <div className='text-center'>
                        <div className='flex justify-center'><img src={img3} alt="" /></div>
                        <div className='text -[#2576BC] py-4 text-5xl font-extrabold'>3,200+</div>
                        <div className='text-[#2576BC] text-l'>E-commerce Businesses</div>
                        <div>happy customers</div>
                    </div>
                    <div className='text-center'>
                        <div className='flex justify-center'><img src={img4} alt="" /></div>
                        <div className='text -[#2576BC] py-4 text-5xl font-extrabold'>R45</div>
                        <div className='text-[#2576BC] text-l'>World class</div>
                        <div>Service Provider</div>
                    </div>
                    
                </div>
            </main>
        </section>
    );
};

export default Stats;
