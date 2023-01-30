import book from '../images/ubuvuzi.png'
import info from '../images/info.svg'
import { Link } from 'react-router-dom'


const  Service = (props) => {
    return(
        <div>
            <Link to="/" >
            <div className="p-2 mycard bg-white rounded flex gap-2 mb-5 shadow-sm shadow-gray-300" >
                <div className="w-40 "> 
                    <img src={props.photo} alt=".." className='rounded h-full object-cover' />
                </div>
                <div className='w-full'>
                    <div className='border-b flex text-right w-full justify-between'>
                    <h3 className=' md:text-xl text-gray-600 font-bold '>{props.name}</h3>
                    <img src={info} alt='...' className='cursor-pointer w-4 h-5'/>
                    </div>
                    <p className=' text-gray-500 font-light pl-3 p-2 text-[14px] md:text-[16px] leading-2xl '>{props.cont}</p>
                    {/* <Link className='md:ml-3 font-font  md:hover:pl-4  p-1 pl-2 md:pl-5 pr-2 md:pr-5 rounded text-[#Bd2c4b] text-[14px]'>#Menya byinshi ...</Link> */}
                    <Link to="/" className="" >
                        <div className="flex gap-2 pl-5 pt-2">
                            <img src={props.arrow} className="md:w-3 w-2"></img>
                            <span className="text-[#bd2c4b] text-[12px] md:text-[14px]">Menya Byinshi ...</span>
                        </div>
                    </Link>
                </div>
            </div> 
            </Link>
            
        </div>
    )
}

export default Service