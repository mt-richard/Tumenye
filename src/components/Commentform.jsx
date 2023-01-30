import React from "react";

const CommentForm = () =>{
    return (
        <div>
            <div className="bg-gray-200 rounded p-5">
                <h3 className="font-bold text-gray-600 ">You can Leave a Comment</h3>
                <form method="post" className="w-full">
                    
                    <div className="p-2">
                        <label htmlFor="" className="text-[14px] font-light pb-2 ">Username</label>
                        <input type="text" name="username" placeholder="Type Your Username" className="w-full rounded p-2 pl-5 outline-none text-light text-gray-400" />
                    </div>
                    <div className="p-2">
                        <label htmlFor="" className="text-[14px] font-light text-gray-600 pb-2 ">Comment</label>
                        <textarea name="comment" placeholder="Type Your Comment" className="w-full rounded-b p-3 pl-5 outline-none text-light text-gray-400" rows="3"></textarea>
                    </div>
                    <div className="p-2">
                        <input type="button" value="Submit" className="bg-[#Bd2c4b] pl-5 pr-5 pt-2 pb-2 rounded text-white font-bold hover:pl-5 hover:text-gray-200" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CommentForm;