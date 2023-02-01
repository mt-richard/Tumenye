import  Service from "../components/service";
import ubuvuzi from '../images/ubuvuzi.png'
import ubwami from '../images/ubwami.jpg'
import ubworozi from '../images/ubworozi.jpg'
import ubuhinzi from '../images/ubuhinzi.jpg'
import arrow from '../images/arrow.svg'
import imigani from '../images/imigani.jpg'
import sakwe from '../images/sakwe.jpg'
import inshobera from '../images/inshobera.jpg'


const Home = () => {
    return ( 
        <div className="w-full">
            <div className="banner pt-28 pb-10 pl-10 pr-10 md:pl-40 md:pt-20 md:pb-20">
                <div className="content md:w-1/2">
                    <h3 className="uppercase font-bold text-white pb-5 md:pb-10">Tumenye Ikinyarwanda</h3>
                    <p className="text-gray-300 md:text-xl font-light pb-10 leading-xl md:leading-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta adipisci nisi, iure exercitationem ipsa architecto. Rerum unde quasi rem hic culpa quidem optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ipsum</p>
                    <button className="bg-[#Bd2c4b] text-white rounded p-2 coursor-pointer pl-5 pr-5">Menya Byinshi ...</button>
                </div>
            </div>

            {/* Services */}

            <div className="bg-gray-100 pt-10 pb-10 ">
                <h3 className="font-bold pb-3 md:pb-10 text-center text-xl md:text-3xl text-gray-600">Menya Byinshi kuri Servisi Zikurikira</h3>
                <div className="Services p-5 md:grid grid-cols-3 gap-5 md:pl-40 md:pr-40 w-full">
                    <Service link="/ubuvuzi" name="Ubuvuzi" arrow={arrow} photo={ubuvuzi} cont="Lorem ipsum dolor sit amet consectetur"/>
                    <Service link="/ubworozi" name="Ubworozi" arrow={arrow} photo={ubworozi} cont="Lorem ipsum dolor sit amet consectetur"/>
                    <Service link="/ubuhinzi" name="Ubuhinzi" arrow={arrow} photo={ubuhinzi} cont="Lorem ipsum dolor sit amet consectetur"/>
                    <Service link="/ubwami" name="Ubwami" arrow={arrow}  photo={ubwami} cont="Lorem ipsum dolor sit amet consectetur"/>
                    <Service link="/ubucuruzi" name="Ubucuruzi" arrow={arrow} photo={ubuhinzi} cont="Lorem ipsum dolor sit amet consectetur"/>
                    <Service link="/imigani" name="Imigani" arrow={arrow} photo={imigani} cont="Lorem ipsum dolor sit amet consectetur"/>
                    <Service link="/ibisakuzo" name="Ibisakuzo" arrow={arrow} photo={sakwe} cont="Lorem ipsum dolor sit amet consectetur"/>
                    <Service link="/inshobera" name="Inshoberamahanga" arrow={arrow} photo={inshobera} cont="Lorem ipsum dolor sit amet consectetur"/>
                </div>
            </div>
       
        </div>
     );
}
 
export default Home;