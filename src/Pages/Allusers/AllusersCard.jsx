
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllUsersCard = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: 'users',
    queryFn: async () => {
      try {
        const res = await axios.get('http://localhost:5000/users');
        return res.data;
      } catch (error) {
        throw new Error("Error loading data");
      }
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading data</p>;
  }

  const handleUserDelete = user => {


    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        axios.delete(`http://localhost:5000/users/${user._id}`)
          .then(res => {
            // console.log(res);
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              
            }
          })
      }
    });

  }

  return (
    <div>
      <table className="table">
        <thead className="bg-purple-400 text-black">
          <tr className="">
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Details</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="bg-blue-400">
          {data.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <Link to={`/userDetails/${user._id}`}>
                  <button className="btn bg-purple-500">Details</button>
                </Link>
              </td>
              <td><button  onClick={() => handleUserDelete(user)}>X</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="justify-center text-center m-5 items-center">
        <Link to={'/addUser'}>
          <button className="btn bg-gradient-to-r from-blue-400 to-purple-400">Add Users</button>
        </Link>
      </div>
    </div>
  );
};

export default AllUsersCard;
