import React from 'react'

const Details = () => {
    return (
        <section>
            <div className='px-4 two-row container'>
                <div className='odd pb-4'>
                    <ul>
                        <li><b className='text-xl'>Job Title :</b> Full Time</li>
                        <li><b className='text-xl'>Location : </b>Remote</li>
                        <li><b className='text-xl'>Knowledge :</b> Swift, Objective-c, SwiftUI</li>
                        <li><b className='text-xl'>Salary : </b>Negotiable</li>
                    </ul>
                </div>
                <div className='even pb-6'>
                    <h1 className='pb-3 text-2xl ml-0 font-semibold'>Responsibility</h1>
                    <ul className='list-disc ml-6  text-[120%] font-medium'>
                        <li>Be a part of our team</li>
                        <li>Be a part of our teamBe a part of our team Be a part of our team Be a part of our team </li>
                        <li>Be a part of our team, Be a part of our team </li>
                        <li>Be a part of our team</li>
                        <li>Be a part of our team</li>
                        <li>Be a part of our team, Be a part of our team </li>
                        <li>Be a part of our team Be a part of our team Be a part of our team Be a part of our team </li>
                        <li>Be a part of our team</li>
                        <li>Be a part of our team, Be a part of our team </li>
                    </ul>
                </div>
                <buttons className="ml-4  items-center justify-center rounded-lg bg-[#bf3131] px-6 p-2 text-white text-xl">
                    APPLY NOW
                </buttons>
            </div>

        </section>
    )
}

export default Details