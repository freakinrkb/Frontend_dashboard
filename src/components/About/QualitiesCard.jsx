import React from 'react'

const QualitiesCard = ({ title, description, imagePath }) => {
    return (
            <div className="shadow-[0px_1px_1px_rgba(0,_0,_0,_0.1)] flex p-4 ">
                <img
                    className="w-12 h-12"
                    alt=""
                    src={imagePath}
                />
                <div className="px-4">
                    <b className="pt-8">
                        {title}
                    </b>
                    <div className="pt-2 text-base leading-[30px] text-darkslategray-100 inline-block">
                        {description}
                    </div>
                </div>
            </div>
    );
};

export default QualitiesCard