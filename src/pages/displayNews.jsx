import React from "react";
import { Link } from "react-router-dom";
import New from "../components/new"
import pic1 from '../images/home.jpg'
import pic2 from '../images/book.jpg'
import arrow from '../images/arrow.svg'
import barrow from '../images/barrow.svg'

const NewsDisplay = () =>{
    return(
        <div>
            <div className="  bg-gray-100 pb-10 md:pl-40 md:pr-40 pt-20 md:pt-10">
                <div className="md:flex w-full gap-5 ">
                    {/* Left side / news display */}
                    <div className="first bg-white md:w-2/3 p-5 rounded">
                        <div className=" bg-gray-100 hover:bg-gray-200 p-3 w-10 h-10 rounded-full">
                            <Link to='/news' className="">
                                <img src={barrow} alt="" className="w-3 object-cover mt-1 rounded"></img>
                            </Link>
                        </div>
                        <h3 className="pt-3 font-bold pb-5 text-2xl text-gray-600">Lorem ipsum dolor sit amet.</h3>
                        <div className="newsdisplay w-full">
                            <div className="image w-full">
                                <img src={pic2} alt="news Picture" className="rounded"></img>
                            </div>
                            <div className="content">
                                <h3 className="pt-3 font-bold pb-5 text-2xl text-gray-600">Lorem ipsum dolor sit amet.</h3>
                                <p className="font-light text-gray-600 leading-7 pl-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam excepturi iste tempora, debitis sapiente soluta minus, fugiat, fugit eaque ab perspiciatis? Sequi optio deserunt laudantium architecto fugit quibusdam odit dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit numquam debitis voluptatibus, eum cupiditate quam enim perspiciatis, nesciunt, atque illum pariatur ut libero in laborum unde eaque adipisci quod amet repudiandae iusto ad? Natus repellat perferendis temporibus expedita, quis magnam.</p>
                            </div>
                        </div>
                    </div>

                    {/* second / right sidebar */}
                    <div className="second p-5 md:w-1/3">
                        <h3 className="latest">Inkuru Ziheruka</h3>
                        <p>Kurikirana Inkuru Ziheruka</p>
                        <New title="Lorem ipsmin" content="Note that the development build is not optimized." photo={pic1} arrow={arrow}/>
                    </div>

                </div>
                
                
            </div>
        </div>
    )
}
export default NewsDisplay