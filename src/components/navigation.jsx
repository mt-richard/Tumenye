// import homeicon from '../images/homeicon.svg'
import home from '../images/home.svg';
import activehome from '../images/active-home.svg'
import cart from '../images/cart.svg';
import activecart from '../images/active-cart.svg'
import search from '../images/search.svg';
import activesearch from '../images/active-search.svg'
import news from '../images/news.svg';
import activenews from '../images/active-news.svg'
import user from '../images/user.svg';
import activeuser from '../images/active-user.svg'
import logo from '../images/logo.svg';
import { NavLink } from 'react-router-dom'

const Navigation = () => {

  const menu = [
    { name: "Ahabanza", iconedit: activehome, icon:  home , href:"/"},
    { name: "Serivisi", iconedit: activecart, icon:cart , href:"/service"},
    { name: "Gushaka", iconedit: activesearch, icon: search, href:"/search"},
    {name:"Inkuru", iconedit: activenews, icon:news, href:"/news"},
    {name:"Konti", iconedit: activeuser, icon:user, href:"/user"}
  ]

  return ( 

    <div>
      <div className='fixed flex bg-[#Bd2c4b] p2 pl-5 top-0  w-full md:hidden'>
        <img src={logo} alt='...' className='w-14 '></img>
        <div className='p-3 pl-5'>
          <h2 className='text-white uppercase font-bold'>Tumenye </h2>
          <span className='text-[14px] text-gray-200 font-light uppercase'>Ikinyarwanda</span>
        </div>
      </div>

      <div className='w-full fixed bottom-0  pl-5 pr-5 border-t  border-gray-400 bg-white md:hidden'>
          <ul className='flex'>
            {menu.map((item, id) => 
              
              <li key={id} className="hover:bg-gray-300 w-1/5 pt-5 pb-5 p-2">
                <NavLink to={item.href}  className="text-center">
                  {({isActive})=>isActive ? (
                    <img src={item.iconedit} alt={item.alt} className="w-full h-7 sm:pr-4"/>
                   ):( 
                   <img src={item.icon} alt={item.alt} className="w-full h-7 sm:pr-4"/>
                   )}
                  {/* <span className='text-[15px] ml-3 justify-between'>{item.name}</span> */}
                </NavLink>
              </li>
              
          )}
          </ul>
</div>
   
    </div>
   );
}
 
export default Navigation;