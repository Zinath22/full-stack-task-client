import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";



const UserDetails = () => {
   const {id} = useParams();

   const { data, isLoading, isError } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/users/${id}`);
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
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
 <img className="rounded-full w-[150px] h-[150px] mx-auto" src={data.photo} alt="Shoes" />
  <div className="card-body">
    <h2 className="card-title">{data.name}</h2>
    <p>{data.email}</p>
    <p>{data.phone}</p>
    <p>{data.gender}</p>
    <p>{data.hear}</p>
    <p>{data.city}</p>
    <p>{data.state}</p>
    
    <div className="flex gap-7 mx-auto">
      {/* <button  className="btn btn-primary">Buy Now</button> */}
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default UserDetails;