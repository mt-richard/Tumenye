import homeicon from '../images/home.svg'
import cart from '../images/cart.svg'
import search from '../images/search.svg'
import news from '../images/news.svg'
import user from '../images/user.svg'

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
      <div className='hidden fixed sticky md:flex w-full justify-between pl-10 pr-40 p-5 bg-[#Bd2c4b]'>
        <div>
          <h2 className='text-white uppercase font-bold'>Tumenye Ikinyarwanda</h2>
        </div>
          <ul className='flex'>
            {menu.map((item, id) => 
              
              <li key={id} className="text-white font-light">
                <a href={item.href} className="flex pl-5 pr-5">
                  {/* <img src={item.icon} alt={item.alt} className="w-5"/> */}
                  <span className='text-[15px] ml-3 justify-between'>{item.name}</span>
                </a>
              </li>
              
          )}
          </ul>
</div>
   
    </div>
   );
}
 
export default DesktopNavigation;