import React from 'react'
import { useState } from 'react';
import Service from '../components/service'
import SearchBox from '../components/searchbox'
import ubuvuzi from '../images/ubuvuzi.png'
import ubwami from '../images/ubwami.jpg'
import ubworozi from '../images/ubworozi.jpg'
import ubuhinzi from '../images/ubuhinzi.jpg'
import arrow from '../images/arrow.svg'
import imigani from '../images/imigani.jpg'
import sakwe from '../images/sakwe.jpg'
import inshobera from '../images/inshobera.jpg'
import { useEffect } from 'react';

const Imigani = () =>{
useEffect(()=>{
  window.scrollTo(0,0)
  
},data)



    var data = [
      
{id: 1, umugani: "Agafuni kabagara ubucuti ni akarenge."},
{id: 2, umugani: "Agahinda k’inkoko kamenywa n’inkike yatoyemo."},
{id: 3, umugani: "Agahinda si uguhora urira."},
{id: 4, umugani: "Agahwa kari k’uwundi karahandurika."},
{id: 5, umugani: "Agakecuru gahaze gakina n’imyenge y’inzu."},
{id: 6, umugani: "Agakono gashaje karyoshya ibiryo"},
{id: 7, umugani: "Agakono gashaje niko karyoshya imboga.."},
{id: 8, umugani: "Agakungu gakuna imbwa."},
{id: 9, umugani: "Agakungu iyo gashize agashino kayora ivu."},
{id: 10, umugani: "Agakungu kavamo imbwa yiruka."},
{id: 11, umugani: "Agapfa kabuliwe ni impongo."},
{id: 12, umugani: "Agapfundikiye gatera amatsiko."},
{id: 13, umugani: "Agasaza kamwera akandi kazakamwa?"},
{id: 14, umugani: "Agashyize kera gahinyuza inshuti."},
{id: 15, umugani: "Agashyize kera gahinyuza intwari."},
{id: 16, umugani: "Agasozi kagusabye amaraso ntuyakarenza."},
{id: 17, umugani: "Agasozi kamanutse inka kazamuka indi."},
{id: 18, umugani: "Agati gateretswe n’Imana ntigahungabanywa n’umuyaga."},
{id: 19, umugani: "Agatinze kazaryoha ni agatuba k’uruhinja."},
{id: 20, umugani: "Agatinze kazaza ni amenyo ya ruguru."},
{id: 21, umugani: "Ahanze ubwana hamera ubwanwa."},
{id: 22, umugani: "Aharaye inzara haramuka inzigo."},
{id: 23, umugani: "Ahari amahoro, uruhu rw’imbaragasa rwisasira batanu."},
{id: 24, umugani: "Ahari amahoro uruhu rw'urukwavu rwisasira batanu."},
{id: 25, umugani: "Ahari ubuhoro umuhoro urogosha."},
{id: 26, umugani: "Aho guhana umupfu wayobya umuvu."},
      ];
    
      const [selected, setSelected] = useState(null);
      const [search, setSearch] = useState('');
      console.log(search)
    
      const openubusobanuro = (id) => {
        if (selected === id) {
          return setSelected(null);
        }
        setSelected(id);
      };

    return(
        <div>
          <div className='pt-10 rounded md:pl-40 md:pr-40 '>
            
            <div className='bg-gray-200 p-5 md:flex'>
               <div className="second pt-10 md:p-5 ">
                <h4 className="text-[#Bd2c4b] font-bold pb-5 uppercase">Imigani Migufi </h4>
                <p className=" font-light text-gray-600 pb-5">Menya ibisobanuro biruseho ukurikirana ubusobanuro bwa magambo amwe akoreshwa k' Imigani</p>
                <div>
                    <form className="flex items-center">   
                        <label for="voice-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            </div>
                            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-200 focus:border-red-200 block w-full pl-10 p-2.5 outline-none" placeholder="Shakisha Imigani..." required />
                            <button type="button" className="absolute outline-none inset-y-0 right-0 flex items-center pr-3">
                              <span className='' onClick={(e) => setSearch('')}>x</span>
                            </button>
                        </div>
                        
                    </form>
                    {/* <SearchBox/> */}
                    {/* <input type="text" onChange={(e) => setSearch(e.target.value)} /> */}
                </div>
                    <div className="allumuganis pb-10 border-b">
                        <div className="qu1">
                            {data
                              .filter((item) => {
                                return search.toLowerCase() === '' 
                                ? item
                                : item.umugani.toLowerCase().includes(search);
                            })
                            .map((item, id) => (
                            <>
                                <div
                                key={id}
                                className="w-full bg-gray-100 p-1 mt-2 rounded text-gray-800">
                                <div key={id} className="justify-between w-full flex md:pr-5 md:pl-5">
                                   <span key={id} className=' text-gray-600'>{item.umugani}</span> 

                                </div>
                                </div>
                                
                            </>
                            ))}
                        </div>
                    </div>
              </div>

              {/* other options */}
              <div className='md:p-5 md:w-1/3'>
              <h3 className="latest uppercase font-bold text-gray-600 ">Kurikirana Ibijyanye</h3>
                        <p className="pb-5 font-light">Servivisi zigezweho</p>
                    <Service link="/ubworozi" name="Ubworozi" arrow={arrow} photo={ubworozi} cont="Lorem ipsum dolor sit amet consectetur"/>
                    <Service link="/ubucuruzi" name="Ubucuruzi" arrow={arrow} photo={ubuhinzi} cont="Lorem ipsum dolor sit amet consectetur"/>
                    <Service link="/ubwami" name="Ubwami" arrow={arrow}  photo={ubwami} cont="Lorem ipsum dolor sit amet consectetur"/>
              </div>
            </div>
           

          </div>
        </div>
    )
}

export default Imigani;