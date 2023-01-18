import book from '../images/ubuvuzi.png'


const  Service = (props) => {
    return(
        <div>
            <div className="mycard bg-white rounded flex gap-2 mb-5 shadow-xl" >
                <div className="w-1/2"> 
                    <img src={props.photo} alt=".." className='rounded h-full object-cover' />
                </div>
                <div className='w-1/2 p-3'>
                    <h3 className='font-bold text-xl text-gray-700 pt-5'>{props.name}</h3>
                    <p className='p-3 text-gray-600'>{props.cont}</p>
                </div>
            </div> 
            
        </div>
    )
}

export default Service