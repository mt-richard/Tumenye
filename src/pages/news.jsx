
import React from "react"
import New from "../components/new"
import pic1 from '../images/home.jpg'
import arrow from '../images/arrow.svg'

const News = () =>{
    return(
        <div>
            <div className="bg-gray-100 pb-20 pt-24 md:pt-10 p-5 md:pl-56 md:pr-56">
                <h1 className="uppercase text-xl md:text-2xl font-bold text-gray-600">Inkuru zatambutse</h1>
                <p className="text-[14px] md:text-lg font-light">Kurikirana inkuru zatambutse kurubuga rwacu.</p>
                <div className="pt-5 md:grid grid-cols-3 md:gap-0 rounded md:pl-10 md:pr-18 lg:pl-0 lg:pr-0 lg:grid-cols-4">
                    <New title="Lorem ipsmin" content="Note that the development build is not optimized." photo={pic1} arrow={arrow}/>
                    <New title="Lorem ipsmin" content="Note that the development build is not optimized." photo={pic1} arrow={arrow}/>
                    <New title="Lorem ipsmin" content="Note that the development build is not optimized." photo={pic1} arrow={arrow}/>
                    <New title="Lorem ipsmin" content="Note that the development build is not optimized." photo={pic1} arrow={arrow}/>
                    <New title="Lorem ipsmin" content="Note that the development build is not optimized." photo={pic1} arrow={arrow}/>
                </div>
            </div>
        </div>
    )
}

export default News
