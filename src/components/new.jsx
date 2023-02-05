import React from "react";
import {Link} from "react-router-dom"

const New = (props) => {
    return(
        <div>
            <Link to='/news/1'>
            <div className="newspanel bg-white w-80 mb-5 rounded shadow-lg">
                <div className="photo h-60 ">
                    <img src={props.photo} alt="" className="object-cover h-full w-full rounded-t"></img>
                    <p className="text-right font-light text-[13px] pt-1 pr-5">Created At : <b>2022-04-55</b></p>
                </div>
                <div className="content pt-2 p-5 border-t">
                    <h3 className="font-bold text-gray-600">{props.title}</h3>
                    <p className="font-light text-[14px] pl-5 border-b">{props.content}</p>
                    <Link to="/news/:id" className="" >
                        <div className="flex gap-2 pl-5 pt-2">
                            <img src={props.arrow} className="w-3"></img>
                            <span className="text-[#bd2c4b] text-[14px]">Menya Birambuye ...</span>
                        </div>
                    </Link>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default New