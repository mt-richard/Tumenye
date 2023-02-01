import React from 'react'
import { useState } from 'react';

const Imigani = () =>{
    var data = [
        {
          question: "How To Fix a Problem?",
          answer:
            "Far far away, behind the word mountains,Consonantia, there live the blind textsWhen she reached the first hills of the Italic Mountains Bookmarksgrove, the headline of Alphabet Village Separated they live in Bookmarksgrove right",
        },
        {
          question: "How To Manage Your Website?",
          answer:
            "Far far away, behind the word mountains,Consonantia, there live the blind textsWhen she reached the first hills of the Italic Mountains Bookmarksgrove, the headline of Alphabet Village Separated they live in Bookmarksgrove right",
        },
        {
          question: "How To Grow Your Investiments Funds?",
          answer:
            "Far far away, behind the word mountains,Consonantia, there live the blind textsWhen she reached the first hills of the Italic Mountains Bookmarksgrove, the headline of Alphabet Village Separated they live in Bookmarksgrove right",
        },
        {
          question: "What Are Thos Requirements for Businness?",
          answer:
            "Far far away, behind the word mountains,Consonantia, there live the blind textsWhen she reached the first hills of the Italic Mountains Bookmarksgrove, the headline of Alphabet Village Separated they live in Bookmarksgrove right",
        },
      ];
    
      const [selected, setSelected] = useState(null);
    
      const openAnswer = (id) => {
        if (selected === id) {
          return setSelected(null);
        }
        setSelected(id);
      };
    



    return(
        <div>
            <div className="second pt-10 md:p-5 md:w-1/2">
                <h4 className="text-[#6c63ff] pb-5">FREEQUESNTLY ASK QUESTION </h4>
                <h4 className="text-2xl pb-10">Frequently Ask Question</h4>

                    <div className="allquestions">
                        <div className="qu1">
                            {data.map((item, id) => (
                            <>
                                <button
                                key={id}
                                className="w-full bg-gray-100 p-3 mt-2 rounded text-gray-800"
                                onClick={() => openAnswer(id)}
                                >
                                <div className="justify-between w-full flex md:pr-5 md:pl-5">
                                    {item.question}

                                    <span className="font-bold text-xl ">
                                    {selected === id ? "-" : "+"}
                                    </span>
                                </div>
                                </button>
                                <div
                                className={
                                    selected === id
                                    ? "font-light text-gray-400 leading-8 p-3 md:pl-20"
                                    : "hidden"
                                }
                                >
                                <ol>{item.answer}</ol>
                                </div>
                            </>
                            ))}
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Imigani;