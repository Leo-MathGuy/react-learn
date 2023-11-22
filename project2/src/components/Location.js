import React from "react";

export default function Location(props) {
    return (
        <div className="mx-6 h-64 md:h-52 grid grid-cols-[5fr_6fr] row-auto gap-x-4 md:mx-24 md:grid-cols-[13rem_1fr] md:gap-x-8">
            <img src={ require(`../images/${props.img}`) } alt="" className="object-cover h-full row-start-1 row-end-7 rounded-lg md:w-52" />
            <p className="col-start-2 mt-6 text-sm font-thin tracking-widest"><i className="mr-1 text-red-600 fa-solid fa-location-pin"></i> { props.country }</p>
            <h2 className="col-start-2 text-xl font-bold md:text-3xl md:mt-0">{ props.location }</h2>
            <p className="col-start-2 mt-2 text-xs font-medium md:text-sm">{ props.date_start } - { props.date_end }</p>
            <p className="col-start-2 mt-2 text-sm md:mt-0 md:text-lg">{ props.description }</p>
        </div>
    );
}