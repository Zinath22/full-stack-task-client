
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";


const Update = () => {
  const {id} = useParams()
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const {user, updateUserProfile} = useContext(AuthContext);
//   const navigate = useNavigate();
const { data: updateUser = [], } = useQuery({
    queryKey: ['updateuser'],
    queryFn: async () => {
      const res = await axios.get(`https://full-stack-task-server.vercel.app/users/${id}`);
      return res.data
    }

  });
  //  console.log('uu', updateUser.phone);
  // const filterUser = allUsers.find(item => item.email === user?.email)
 
  const onSubmit = async (data) => {
    console.log('a',data);
    try {
      await updateUserProfile( data.photoURL,data.email,data.number,data.gender,data.hear,data.city,data.state);
      const userInfo = {
        name: data.name,
        email: data.email,
        phone: data.number,
        gender: data.gender,
        hear: data.hear,
        city: data.city,
        state: data.state,
        // role: 'users',
        photo: data.photoURL,
       
      };
     

      const response = await axios.patch(`https://full-stack-task-server.vercel.app/users/${updateUser._id}`, userInfo);

      if (response.data.updated) {
        reset();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'User updated successfully.',
          showConfirmButton: false,
          timer: 1500,
        });
        // Redirect the user to a different page after a successful update
        // navigate('/dashboard'); // Change '/dashboard' to your desired route
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to update user.',
        });
      }
    } catch (error) {
      console.error('Error updating user profile:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong. Please try again later.',
      });
    }
  };

  return (
    <div>
      
      <div className="lg:w-1/2 w-full my-10 font-bold mx-auto py-10 px-12 bg-white ">
        <h2 className="text-2xl text-center mb-4">Update Your Profile</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
                   <label className="label ">
                    <span className="label-text">Name</span>
                 </label>
                   <input type="text"
                       defaultValue={updateUser.name}
                       
                    placeholder="name" {...register("name", { required: true })} name="name" className="input input-bordered border-teal-400" />
  
                  {/* {errors.name && <span className="text-red-600">Name is required</span>} */}
                 </div>
              
                <div className="form-control">
                    <span className="label-text">Email</span>
                 <input type="email" 
                 defaultValue={updateUser.email}
                 readOnly
                 placeholder="email" {...register("email", { required: true })} name="email" className="input input-bordered border-teal-400" />
                  {/* {errors.email && <span className="text-red-600">email is required</span>} */}
                 
                </div>

                {/* photo  */}

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input type="text"
                  defaultValue={updateUser.photo
                  }
                   placeholder="Photo URL" {...register("photoURL", { required: true })} className="input input-bordered border-teal-400" />
  
                  {/* {errors.photoURL && <span className="text-red-600">Photo url is required</span>} */}
                 </div>
               

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input type="number" defaultValue={updateUser.phone}
                   placeholder="phone" {...register("number", { required: true })} name="number" className="input input-bordered border-teal-400" />
                  {/* {errors.number && <span className="text-red-600">Phone is required</span>} */}
                
                </div>
                <div className="form-control">
                    <span className="label-text">Gender</span>
                 <input type="text" 
                 defaultValue={updateUser.gender}
                 readOnly
                 placeholder="gender" {...register("gender", { required: true })} name="gender" className="input input-bordered border-teal-400" />
                  {/* {errors.gender && <span className="text-red-600">gender is required</span>} */}
                 
                </div>
               
                  
                <div className="">
                <div className="form-control">
                    <span className="label-text">Hear</span>
                 <input type="text" 
                 defaultValue={updateUser.hear}
                 readOnly
                 placeholder="hear" {...register("hear", { required: true })} name="hear" className="input input-bordered border-teal-400" />
                  {/* {errors.gender && <span className="text-red-600">gender is required</span>} */}
                 
                </div>
                </div>

                <div className="form-control">
    <label className="label">
        <span className="label-text">City</span>
    </label>
    <div className="flex gap-4">
        <div className="flex justify-center items-center">
           
        </div>
      
     
        {/* Dropdown for Cities */}
        <div className="flex items-center w-full border-teal-400">
            {/* <label className="mr-2">City:</label> */}
            <select defaultValue={updateUser.city || ""} {...register("city", { required: true })} className="dropdown w-full border-teal-400" >
                <option value="">{updateUser.city}</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
                <option value="Ahmedabad">Ahmedabad</option>
            </select>
        </div>
    </div>
</div>



<div className="form-control">
    <label className="label">
        <span className="label-text">State</span>
    </label>
    <div className="flex gap-4">
        <div className="flex justify-center items-center">
           
        </div>
      
       
        {/* Dropdown for Cities */}
        <div className="flex items-center w-full border-teal-400">
            {/* <label className="mr-2">City:</label> */}
            <select defaultValue={updateUser.state || ""} {...register("state", { required: true })} className="dropdown w-full border-teal-400" >
                <option value="">{updateUser.state}</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Karnataka">Karnataka</option>
            </select>
        </div>
    </div>
</div>


                
               

          <div className="mt-5">
            <button className="w-full bg-gradient-to-r from-teal-500 to-purple-300 py-3 text-center rounded text-white">Save</button>
           
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
