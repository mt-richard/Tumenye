// import homeicon from '../images/homeicon.svg'
import home from '../images/home.svg'
import cart from '../images/cart.svg'
import search from '../images/search.svg'
import news from '../images/news.svg'
import user from '../images/user.svg'

const Navigation = () => {

  const menu = [
    { name: "Ahabanza", icon:  home , href:"/"},
    { name: "Serivisi", icon:cart , href:"/service"},
    { name: "Gushaka", icon: search, href:"/search"},
    {name:"Inkuru", icon:news, href:"/news"},
    {name:"Konti", icon:user, href:"/user"}
  ]

  return ( 

    <div>
      <div className='fixed bg-[#Bd2c4b] p-3 top-0  w-full md:hidden'>
        <h2 className='text-white uppercase font-bold'>Tumenye Ikinyarwanda</h2>
      </div>

      <div className='w-full fixed bottom-0  pl-5 pr-5 border-t  border-gray-400 bg-white md:hidden'>
          <ul className='flex'>
            {menu.map((item, id) => 
              
              <li key={id} className="hover:bg-gray-300 w-1/5 pt-5 pb-5 p-2">
                <a href={item.href} className="text-center">
                  <img src={item.icon} alt={item.alt} className="w-full h-7 sm:pr-4"/>
                  {/* <span className='text-[15px] ml-3 justify-between'>{item.name}</span> */}
                </a>
              </li>
              
          )}
          </ul>
</div>
   
    </div>
   );
}
 
export default Navigation;