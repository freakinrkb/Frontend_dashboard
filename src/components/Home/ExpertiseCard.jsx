import React from 'react'
const ExpertiseCard = ({accent,title,iconPath}) => {
    
    return (
        <div className={`text-[${accent}] relative flex h-36 bg-[#F9FBFD] p-6 px-10 rounded-md`}>
            <div className={`absolute top-0 left-0 colored h-36 w-2.5 rounded-md bg-[${accent}]`}></div>
            <div className="flex flex-col justify-between">
                <img
                    className="w-10"
                    alt=""
                    src={`${iconPath}`}
                />
                <div className={`rounded-8xs bg-[${accent}] `} />
                <div className="text-lg">
                    {`${title}`}
                </div>
            </div>
        </div>
    )
}

export default ExpertiseCard