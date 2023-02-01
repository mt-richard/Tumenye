import React from 'react'
import { useState } from 'react';
import Service from '../components/service'

import ubuvuzi from '../images/ubuvuzi.png'
import ubwami from '../images/ubwami.jpg'
import ubworozi from '../images/ubworozi.jpg'
import ubuhinzi from '../images/ubuhinzi.jpg'
import arrow from '../images/arrow.svg'
import imigani from '../images/imigani.jpg'
import sakwe from '../images/sakwe.jpg'
import inshobera from '../images/inshobera.jpg'

const Imigani = () =>{
    var data = [
      
{id: 1, umugani: "AgaFuni kabagara ubucuti ni akarenge."},
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

                    <div className="allumuganis">
                        <div className="qu1">
                            {data.map((item, id) => (
                            <>
                                <button
                                key={id}
                                className="w-full bg-gray-100 p-1 mt-2 rounded text-gray-800"
                                onClick={() => openubusobanuro(id)}
                                >
                                <div className="justify-between w-full flex md:pr-5 md:pl-5">
                                   <span className='capitalize text-gray-600'>{item.umugani}</span> 

                                    <span className="font-bold text-xl ">
                                    {selected === id ? "-" : "+"}
                                    </span>
                                </div>
                                </button>
                                <div
                                className={
                                    selected === id
                                    ? "font-light text-gray-600 leading-8 p-3 md:pl-16 flex"
                                    : "hidden"
                                }
                                >
                                <img src={arrow} alt="" className='w-3'/>
                                <span className='pl-2'>{item.ubusobanuro}</span>
                                </div>
                            </>
                            ))}
                        </div>
                    </div>
              </div>

              {/* other options */}
              <div className='md: p-5 md:w-1/3'>
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