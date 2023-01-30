import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <div className="footer bg-gray-700 p-10  md:pt-10 md:pl-40 md:pr-40">
        <div className="footer-card md:flex">
          <div className="card1 pb-10 md:w-1/4 pr-3">
            <h3 className="text-[#Bd2c4b] text-xl font-bold pb-5">Tumenye Ikinyarwanda</h3>
            <p className="text-gray-200 font-light">
              Far far away, behind the word mountains, far from the countries.
            </p>
            <div className="icons pt-5">
              <span className="bg-[#Bd2c4b] text-white text-xl mr-2 p-2 justify-center rounded-full ">
                <ion-icon name="logo-twitter"></ion-icon>
              </span>
              <span className="bg-[#Bd2c4b] text-white text-xl mr-2 p-2 justify-center rounded-full ">
                <ion-icon name="logo-facebook"></ion-icon>
              </span>
              <span className="bg-[#Bd2c4b] text-white text-xl mr-2 p-2 justify-center rounded-full ">
                <ion-icon name="logo-instagram"></ion-icon>
              </span>
            </div>
          </div>

          <div className="card1 pb-10 md:w-1/4">
            <h3 className="text-[#Bd2c4b] text-xl font-bold pb-5">Explore</h3>
            <div className="links text-gray-300 grid grid-cols-1">
              <Link
                to="/about"
                className=" mt-2 hover:text-[#Bd2c4b] hover:font-bold"
              >
                <span className="mt-5 font">
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </span>
                About
              </Link>
              <Link
                to="/service"
                className=" mt-2 hover:text-[#Bd2c4b] hover:font-bold"
              >
                <span className="mt-5 font">
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </span>
                Services
              </Link>
              <Link
                to="/portfolio"
                className=" mt-2 hover:text-[#Bd2c4b] hover:font-bold"
              >
                <span className="mt-5 font">
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </span>
                Portfolio
              </Link>
              <Link
                to="/contact"
                className=" mt-2 hover:text-[#Bd2c4b] hover:font-bold"
              >
                <span className="mt-5 font">
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </span>
                Contact
              </Link>
            </div>
          </div>

          <div className="card1 pb-10 md:w-1/4">
            <h3 className="text-[#Bd2c4b] text-xl font-bold pb-5">Info</h3>
            <div className="links text-gray-300 grid grid-cols-1">
              <Link
                to="/about"
                className=" mt-2 hover:text-[#Bd2c4b] hover:font-bold"
              >
                <span className="mt-5 font">
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </span>
                About
              </Link>
              <Link
                to="/contact"
                className=" mt-2 hover:text-[#Bd2c4b] hover:font-bold"
              >
                <span className="mt-5 font">
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </span>
                Join Us
              </Link>
              <Link
                to="/"
                className=" mt-2 hover:text-[#Bd2c4b] hover:font-bold"
              >
                <span className="mt-5 font">
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </span>
                Privacy & Policy
              </Link>
              <Link
                to="//"
                className=" mt-2 hover:text-[#Bd2c4b] hover:font-bold"
              >
                <span className="mt-5 font">
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </span>
                Terms & conditions
              </Link>
            </div>
          </div>

          <div className="card1 pb-10 md:w-1/4">
            <h3 className="text-[#Bd2c4b] text-xl font-bold pb-5">Company</h3>
            <div className="links text-gray-300 grid grid-cols-1">
              <Link
                to="/service"
                className=" mt-2 hover:text-[#Bd2c4b] hover:font-bold"
              >
                <span className="mt-5 font">
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </span>
                Services
              </Link>
              <Link
                to="/about"
                className=" mt-2 hover:text-[#Bd2c4b] hover:font-bold"
              >
                <span className="mt-5 font">
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </span>
                About
              </Link>
              <Link
                to="/contact"
                className=" mt-2 hover:text-[#Bd2c4b] hover:font-bold"
              >
                <span className="mt-5 font">
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </span>
                Contact Us
              </Link>
              <Link
                to="/"
                className=" mt-2 hover:text-[#Bd2c4b] hover:font-bold"
              >
                <span className="mt-5 font">
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </span>
                Carrier
              </Link>
            </div>
          </div>

          <div className="card1 md:w-1/4">
            <h3 className="text-[#Bd2c4b] text-xl font-bold pb-5">
              Have a Question ?
            </h3>
            <div className="flex">
              <span className="text-[#Bd2c4b] text-xl mr-2 p-2 justify-center rounded-full ">
                <ion-icon name="location-outline"></ion-icon>
              </span>
              <p className="text-gray-200 font-light mt-1">
                Kg 108 St. Mountain View at Remera, Gasabo, Kigali, Rwanda.
              </p>
            </div>

            <div className="flex pt-3">
              <span className=" text-[#Bd2c4b] text-xl mr-2 p-2 justify-center rounded-full ">
                <ion-icon name="call-outline"></ion-icon>
              </span>
              <p className="text-gray-200 font-light mt-2">(+250) 786 544 038</p>
            </div>

            <div className="flex ">
              <span className=" text-[#Bd2c4b] text-xl mr-2 p-2 justify-center rounded-full ">
                <ion-icon name="mail-outline"></ion-icon>
              </span>
              <p className="text-gray-200 font-light mt-2">
                info@yourdomain.com
              </p>
            </div>
          </div>
        </div>
        <p className="text-gray-300 pt-10 md:ml-[calc(50%-13rem)]">
          Copyright ©2022 All rights reserved{" "}
        </p>
      </div>
    );
}
 
export default Footer;