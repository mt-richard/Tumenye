import homeicon from '../images/home.svg'
import cart from '../images/cart.svg'
import search from '../images/search.svg'
import news from '../images/news.svg'
import user from '../images/user.svg'
import logo from '../images/logo.svg'
import { NavLink } from 'react-router-dom'


const DesktopNavigation = () => {

  const menu = [
    { name: "Ahabanza", icon:  homeicon , href:"/"},
    { name: "Serivisi", icon:cart , href:"/service"},
    { name: "Gushaka", icon: search, href:"/search"},
    {name:"Inkuru", icon:news, href:"/news"},
    {name:"Konti", icon:user, href:"/user"}
  ]

  return ( 

    <div>
      <div className='hidden fixed sticky md:flex w-full justify-between pl-10 pr-40 p- bg-[#Bd2c4b]'>
        <div className='flex'>
          <img src={logo} alt='...' className='w-14 '></img>
          <div className='p-3 pl-5'>
            <h2 className='text-white uppercase font-bold'>Tumenye </h2>
            <span className='text-[14px] text-gray-200 font-light uppercase'>Ikinyarwanda</span>
          </div>
        </div>
          <ul className='flex p-5'>
            {menu.map((item, id) => 
              
              <li key={id} className="text-white font-light hover:font-bold hover:text-gray-100">
                <NavLink href={item.href} onClick={({isActive}) => isActive} className={({isActive}) => isActive ? 'font-bold flex pl-5 pr-5':'flex pl-5 pr-5'}>
                  {/* <img src={item.icon} alt={item.alt} className="w-5"/> */}
                  <span className='text-[15px] ml-3 justify-between'>{item.name}</span>
                </NavLink>
              </li>
              
          )}
          </ul>
</div>
   
    </div>
   );
}
 
export default DesktopNavigation;