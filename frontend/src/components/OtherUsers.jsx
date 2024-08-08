import React from "react";
import OtherUser from "./OtherUser";
import useGetOtherUser from "../hooks/useGetOtherUser";
import { useSelector } from "react-redux";

const OtherUsers = () => {
   //My custom hooks
   useGetOtherUser();
   const {otherUsers} = useSelector(store=>store.user);
   if(!otherUsers) return; //early return ..

  return (
    <div className="overflow-auto flex-1">

           {
                otherUsers?.map((user)=>{
                    return (
                        <OtherUser key={user._id} user={user}/>
                    )
                })
            }

      

    </div>
  );
};

export default OtherUsers;
