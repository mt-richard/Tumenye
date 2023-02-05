import React from 'react'
import { useState, useEffect } from 'react';
import Service from '../components/service'

import ubuvuzi from '../images/ubuvuzi.png'
import ubwami from '../images/ubwami.jpg'
import ubworozi from '../images/ubworozi.jpg'
import ubuhinzi from '../images/ubuhinzi.jpg'
import arrow from '../images/arrow.svg'
import imigani from '../images/imigani.jpg'
import sakwe from '../images/sakwe.jpg'
import inshobera from '../images/inshobera.jpg'

const Ubwami = () =>{
  useEffect(()=>{
    window.scrollTo(0,0)
  },data)

    var data = [
        {
          ijambo: "agashungo",
          ubusobanuro:
            "igikorwa kibi umuntu akorera undi yabigambiriye",
        },
        {
          ijambo: "amarebe",
          ubusobanuro:
            "ibyatsi biba hejuru y'amazi",
        },
        {
          ijambo: "ibirorero",
          ubusobanuro:
            "ahantu hari amazu menshi",
        },
        {
          ijambo: "amatage",
          ubusobanuro:
            "ibibazo cyangwa ibihe bigoranye",
        },
        {
          ijambo: "amatage",
          ubusobanuro:
            "ibibazo cyangwa ibihe bigoranye",
        },
        {
          ijambo: "amatage",
          ubusobanuro:
            "ibibazo cyangwa ibihe bigoranye",
        },
        {
          ijambo: "amatage",
          ubusobanuro:
            "ibibazo cyangwa ibihe bigoranye",
        },
        {
          ijambo: "amatage",
          ubusobanuro:
            "ibibazo cyangwa ibihe bigoranye",
        },
        {
          ijambo: "amatage",
          ubusobanuro:
            "ibibazo cyangwa ibihe bigoranye",
        },
        {
          ijambo: "amatage",
          ubusobanuro:
            "ibibazo cyangwa ibihe bigoranye",
        },
        {
          ijambo: "amatage",
          ubusobanuro:
            "ibibazo cyangwa ibihe bigoranye",
        },
        {
          ijambo: "amatage",
          ubusobanuro:
            "ibibazo cyangwa ibihe bigoranye",
        },
        {
          ijambo: "amatage",
          ubusobanuro:
            "ibibazo cyangwa ibihe bigoranye",
        },
        {
          ijambo: "amatage",
          ubusobanuro:
            "ibibazo cyangwa ibihe bigoranye",
        },
        {
          ijambo: "amatage",
          ubusobanuro:
            "ibibazo cyangwa ibihe bigoranye",
        },
        {
          ijambo: "amatage",
          ubusobanuro:
            "ibibazo cyangwa ibihe bigoranye",
        },
        {
          ijambo: "amatage",
          ubusobanuro:
            "ibibazo cyangwa ibihe bigoranye",
        },
        {
          ijambo: "amatage",
          ubusobanuro:
            "ibibazo cyangwa ibihe bigoranye",
        },
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
                <h4 className="text-[#Bd2c4b] font-bold pb-5 uppercase">Ubwami </h4>
                <p className=" font-light text-gray-600 pb-5">Menya ibisobanuro biruseho ukurikirana ubusobanuro bwa magambo amwe akoreshwa kubwami</p>

                    <div className="allijambos">
                        <div className="qu1">
                            {data.map((item, id) => (
                            <>
                                <button
                                key={id}
                                className="w-full bg-gray-100 p-1 mt-2 rounded text-gray-800"
                                onClick={() => openubusobanuro(id)}
                                >
                                <div className="justify-between w-full flex md:pr-5 md:pl-5">
                                   <span className='capitalize text-gray-600'>{item.ijambo}</span> 

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
              <div className='md:p-5 md:w-1/3'>
              <h3 className="latest uppercase font-bold text-gray-600 ">Kurikirana Ibijyanye</h3>
                        <p className="pb-5 font-light">Servivisi zigezweho</p>
                    <Service link="/ubworozi" name="Ubworozi" arrow={arrow} photo={ubworozi} cont="Lorem ipsum dolor sit amet consectetur"/>
                        
                      <Service link="/ubucuruzi" name="Ubucuruzi" arrow={arrow} photo={ubuhinzi} cont="Lorem ipsum dolor sit amet consectetur"/>
                      <Service link="/imigani" name="Imigani" arrow={arrow} photo={imigani} cont="Lorem ipsum dolor sit amet consectetur"/>
              </div>
            </div>
           

          </div>
        </div>
    )
}

export default Ubwami;