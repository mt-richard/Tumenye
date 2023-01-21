import book from '../images/ubuvuzi.png'
import info from '../images/info.svg'
import { Link } from 'react-router-dom'

const  Service = (props) => {
    return(
        <div>
            <Link to="/news" >
            <div className="p-2 mycard bg-white rounded flex gap-2 mb-5 shadow-sm shadow-gray-300" >
                <div className="w-40 "> 
                    <img src={props.photo} alt=".." className='rounded h-full object-cover' />
                </div>
                <div className='w-full'>
                    <div className='border-b flex text-right w-full justify-between'>
                    <h3 className=' md:text-xl text-gray-600 font-bold '>{props.name}</h3>
                    <img src={info} alt='...' className='cursor-pointer w-4 h-5'/>
                    </div>
                    <p className=' text-gray-500 font-light pl-3 p-2 text-[14px] leading-2xl '>{props.cont}</p>
                    <Link className='md:ml-3 font-font  md:hover:pl-4  p-1 pl-2 md:pl-5 pr-2 md:pr-5 rounded text-[#Bd2c4b] text-[14px]'>#Menya byinshi ...</Link>
                </div>
            </div> 
            </Link>
            
        </div>
    )
}

export default Service