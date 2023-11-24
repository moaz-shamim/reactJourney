import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {


  

  return (
    
    <Link to={`/post/${$id}`}>
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      

      <div class="max-w-sm  overflow-hidden shadow-lg bg-gray-100 rounded-xl">
      <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className=""
          />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2"> {title}</div>
        
      </div>
      
    </div>








   
    </Link>
  );
}

export default PostCard;
