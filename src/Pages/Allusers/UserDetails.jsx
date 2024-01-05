import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useParams } from "react-router-dom";



const UserDetails = () => {
   const {id} = useParams();

   const { data, isLoading, isError } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axios.get(`https://full-stack-task-server.vercel.app/users/${id}`);
      return res.data;
      
    },
    
  });
console.log(data);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading data</p>;
  }


    return (
        <div>
            <div className="card mt-5 card-compact w-96 bg-gradient-to-r from-blue-200 to-purple-300 shadow-xl">
 <img className="rounded-full w-[200px] h-[200px] mx-auto p-5 " src={data.photo} alt="Shoes" />
  <div className="card-body ">
   <div className="text-lg ">
   <p className="text-center items-center text-2xl text-orange-500">Name: {data.name}</p>
   
   <div className="flex gap-3">
   <p>Email: {data.email}</p>
    <p>Contact: {data.phone}</p>
   </div>
    <div className="flex gap-3">
    <p>Gender: {data.gender}</p>
    <p>Hear: {data.hear}</p>
    </div>
    <div className="flex gap-3">
    <p>City: {data.city}</p>
    <p>State: {data.state}</p>
    </div>
   
   </div>
    
    <div className="flex gap-7 mx-auto">
      {/* <button  className="btn btn-primary">Buy Now</button> */}
   <Link to={`/update/${data._id}`}>   <button className="btn bg-gradient-to-r from-blue-400 to-purple-400">Update</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default UserDetails;