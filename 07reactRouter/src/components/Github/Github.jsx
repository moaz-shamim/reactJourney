import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";



function Github() {
  const data = useLoaderData();
  console.log(data);
  // const [data,setData] = useState([])

  // useEffect(()=>{
  //     fetch('https://api.github.com/users/hiteshchoudhary')
  //     .then(response => response.json())
  //     .then(data =>{
  //         console.log(data);
  //         setData(data)
  //     })
  // },[] )

  return (
    <div>
      <div className="flex flex-col justify-center items-center my-7">
        <div>Github Followers:{data.followers}</div>
        <img
          src={data.avatar_url}
          alt="Profile Picture"
          className=" w-[300px] rounded-full"
        />
      </div>
    </div>
  );
}

export default Github;
