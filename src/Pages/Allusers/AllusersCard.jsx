
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";

// const AllUsersCard = () => {
//   const { data, isLoading, isError, refetch } = useQuery({
//     queryKey: 'users',
//     queryFn: async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/users');
//         return res.data;
//       } catch (error) {
//         throw new Error("Error loading data");
//       }
//     },
//   });

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   if (isError) {
//     return <p>Error loading data</p>;
//   }

//   const handleUserDelete = user => {


//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!"
//     }).then((result) => {
//       if (result.isConfirmed) {

//         axios.delete(`http://localhost:5000/users/${user._id}`)
//           .then(res => {
//             // console.log(res);
//             if (res.data.deletedCount > 0) {
//               refetch();
//               Swal.fire({
//                 title: "Deleted!",
//                 text: "Your file has been deleted.",
//                 icon: "success"
//               });
              
//             }
//           })
//       }
//     });

//   }

//   return (
//     <div>
//       <table className="table">
//         <thead className="bg-purple-400 text-black">
//           <tr className="">
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Details</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody className="bg-blue-400">
//           {data.map((user) => (
//             <tr key={user._id}>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.phone}</td>
//               <td>
//                 <Link to={`/userDetails/${user._id}`}>
//                   <button className="btn bg-purple-500">Details</button>
//                 </Link>
//               </td>
//               <td><button  onClick={() => handleUserDelete(user)}>X</button></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="justify-center text-center m-5 items-center">
//         <Link to={'/addUser'}>
//           <button className="btn bg-gradient-to-r from-blue-400 to-purple-400">Add Users</button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default AllUsersCard;


// import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";

// const AllUsersCard = () => {
//   const { data, isLoading, isError, refetch } = useQuery({
//     queryKey: 'users',
//     queryFn: async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/users');
//         return res.data;
//       } catch (error) {
//         throw new Error("Error loading data");
//       }
//     },
//   });

//   const [searchInput, setSearchInput] = useState("");
//   const [filteredData, setFilteredData] = useState([]);

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   if (isError) {
//     return <p>Error loading data</p>;
//   }

//   const handleUserDelete = (user) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         axios.delete(`http://localhost:5000/users/${user._id}`).then((res) => {
//           if (res.data.deletedCount > 0) {
//             refetch();
//             Swal.fire({
//               title: "Deleted!",
//               text: "Your file has been deleted.",
//               icon: "success",
//             });
//           }
//         });
//       }
//     });
//   };

//   const handleSearch = () => {
//     const lowerCaseSearch = searchInput.toLowerCase();
//     const filteredUsers = data.filter(
//       (user) =>
//         user.name.toLowerCase().includes(lowerCaseSearch) ||
//         user.email.toLowerCase().includes(lowerCaseSearch) ||
//         user.phone.toLowerCase().includes(lowerCaseSearch)
//     );
//     setFilteredData(filteredUsers);
//   };

//   const clearSearch = () => {
//     setSearchInput("");
//     setFilteredData([]);
//   };

//   return (
//     <div>
//       <div>
//         {/* Search input for filtering users */}
//         <div className="mb-4">
//           <input
//             type="text"
//             placeholder="Search by Name, Email, or Phone"
//             value={searchInput}
//             onChange={(e) => setSearchInput(e.target.value)}
//             className="p-2 border border-gray-300"
//           />
//           <button className="btn bg-blue-500 ml-2" onClick={handleSearch}>
//             Search
//           </button>
//           <button className="btn bg-gray-500 ml-2" onClick={clearSearch}>
//             Clear
//           </button>
//         </div>
//         <div>
//            {/* Button to toggle sorting order */}
//         </div>

//         <table className="table">
//           <thead className="bg-purple-400 text-black">
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Phone</th>
//               <th>Details</th>
//               <th>Delete</th>
//             </tr>
//           </thead>
//           <tbody className="bg-blue-400">
//             {(filteredData.length > 0 ? filteredData : data).map((user) => (
//               <tr key={user._id}>
//                 <td>{user.name}</td>
//                 <td>{user.email}</td>
//                 <td>{user.phone}</td>
//                 <td>
//                   <Link to={`/userDetails/${user._id}`}>
//                     <button className="btn bg-purple-500">Details</button>
//                   </Link>
//                 </td>
//                 <td>
//                   <button onClick={() => handleUserDelete(user)}>X</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       {data.length > 0 ? (
//         <div className="justify-center text-center m-5 items-center">
//           <Link to={"/addUser"}>
//             <button className="btn bg-gradient-to-r from-blue-400 to-purple-400">
//               Add Users
//             </button>
//           </Link>
//         </div>
//       ) : (
//         <p>No data found</p>
//       )}
//     </div>
//   );
// };

// export default AllUsersCard;

import { useState } from "react";
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

  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc"); // Default sort order

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading data</p>;
  }

  const handleUserDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleSearch = () => {
    const lowerCaseSearch = searchInput.toLowerCase();
    const filteredUsers = data.filter(
      (user) =>
        user.name.toLowerCase().includes(lowerCaseSearch) ||
        user.email.toLowerCase().includes(lowerCaseSearch) ||
        user.phone.toLowerCase().includes(lowerCaseSearch)
    );
    setFilteredData(filteredUsers);
  };

  const clearSearch = () => {
    setSearchInput("");
    setFilteredData([]);
  };

  const handleSort = (key) => {
    const sortedData = [...(filteredData.length > 0 ? filteredData : data)];
    sortedData.sort((a, b) => {
      if (sortOrder === "asc") {
        return a[key].localeCompare(b[key]);
      } else {
        return b[key].localeCompare(a[key]);
      }
    });

    setFilteredData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div>
      <div>
        {/* Search input for filtering users */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by Name, Email, or Phone"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="p-2 border border-gray-300"
          />
          <button className="btn bg-blue-500 ml-2" onClick={handleSearch}>
            Search
          </button>
          <button className="btn bg-gray-500 ml-2" onClick={clearSearch}>
            Clear
          </button>
        </div>

        {/* Sorting buttons */}
        <div className="mb-4">
          <button className="btn bg-purple-500" onClick={() => handleSort("name")}>
            Sort A-Z
          </button>
          <button className="btn bg-purple-500 ml-2" onClick={() => handleSort("name")}>
            Sort Z-A
          </button>
          <button className="btn bg-purple-500 ml-2" onClick={() => handleSort("lastModified")}>
            Sort Last Modified
          </button>
          <button className="btn bg-purple-500 ml-2" onClick={() => handleSort("createdAt")}>
            Sort Last Inserted
          </button>
        </div>

        <table className="table">
          <thead className="bg-purple-400 text-black">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Details</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="bg-blue-400">
            {(filteredData.length > 0 ? filteredData : data).map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <Link to={`/userDetails/${user._id}`}>
                    <button className="btn bg-purple-500">Details</button>
                  </Link>
                </td>
                <td>
                  <button onClick={() => handleUserDelete(user)}>X</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {data.length > 0 ? (
        <div className="justify-center text-center m-5 items-center">
          <Link to={"/addUser"}>
            <button className="btn bg-gradient-to-r from-blue-400 to-purple-400">
              Add Users
            </button>
          </Link>
        </div>
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
};

export default AllUsersCard;
