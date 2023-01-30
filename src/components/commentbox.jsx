
import user from '../images/user.svg'
import userprofile from '../images/home.jpg'


const Commentbox = (props) => {
    return (
        <div>
            <div className="m-2 commentbox flex rounded w-full  ">
                <div className='p-3' >
                    <div className="  mb-[-20%] img  rounded-full w-[80px] h-[80px]">
                        <img src={props.userprofile} alt="" className=" rounded-full h-full w-full object-cover" />
                    </div>
                </div>
                <div className="rounded-r-xl rounded-b-xl w-full content bg-gray-200 p-5 pt-1">
                    <div className="md:flex border-b border-gray-300 justify-between">
                        <h3 className='font-bold text-gray-600 '>{props.username}</h3>
                        <span className='text-[12px]'>Commented On, <span className=' font-bold'>{props.date} </span></span>
                    </div>
                    <p className='text-[14px] text-gray-600 md:text-[16px] font-light pt-2 md:pl-5'>{props.comment}</p>
                </div>
            </div>
        </div>
    )
}

export default Commentbox;