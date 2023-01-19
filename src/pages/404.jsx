import { Link } from "react-router-dom"

const NotFound = () =>{
    return(
        <div className="pt-40">
            <h3 className="text-center text-6xl text-gray-600 font-bold pb-10">404</h3>
            <p className="text-center md:text-xl text-gray-600 pb-3">Page Not Found.</p>
            <p className="text-center md:text-xl text-gray-600">Return to the <Link to="/" className=" font-bold text-[#Bd2c4b]">Home Page</Link></p>
        </div>
    )
}

export default NotFound