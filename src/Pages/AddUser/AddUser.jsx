import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";



const AddUser = () => {

 
  const { register, handleSubmit,reset,  formState: { errors } } = useForm();
  const { createUser,logOut, updateUserProfile } = useContext(AuthContext)
  const navigate = useNavigate();

  const onSubmit = data => {
      
      createUser(data.email, data.password)
          .then(result => {
              const loggedUser = result.user;
              console.log(loggedUser);
              updateUserProfile(data.name, data.photoURL)
                  .then(() => { 
                    //  create user entry in the database 
                    const userInfo = {
                      name: data.name,
                      email: data.email,
                      phone: data.number,
                      gender: data.gender,
                      hear: data.hear,
                      city: data.city,
                      state: data.state,
                      role: 'users',
                      // bestCreator: true,
                    photo: data.photoURL
                      
                    }
              axios.post('http://localhost:5000/users',userInfo)
              .then(res => {
                if(res.data.insertedId){
                    reset();
                      Swal.fire({
                          position: 'top-end',
                          icon: 'success',
                          title: 'User created successfully.',
                          showConfirmButton: false,
                          timer: 1500
                      });
                }
              })
                     

                      logOut()
                      .then(() => {
                          // Log out success
                      })
                      .catch(error => {
                          console.error(error);
                      });
                  navigate(location?.state ? location.state : '/login')
              })
                      // navigate('/login');

                  // })

                 
                  .catch(error => console.log(error))
          })
         
  };

    return (
        <div>
        {/* <Helmet><title>Bistro Boss | SignUp</title></Helmet> */}
        {/* <Helmet><title>Contest | Register</title></Helmet> */}
        <div className="lg:w-1/2 w-full  my-10  font-bold mx-auto  py-10 px-12 bg-white ">
        <h2 className="text-2xl text-center mb-4">Register</h2>
        <p className="mb-4 text-lg text-center">
                             Create your account.
                         </p>
            
            
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label ">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" placeholder="name" {...register("name", { required: true })} name="name" className="input input-bordered border-teal-400" />
  
                  {errors.name && <span className="text-red-600">Name is required</span>}
                </div>
              
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" placeholder="email" {...register("email", { required: true })} name="email" className="input input-bordered border-teal-400" />
                  {errors.email && <span className="text-red-600">email is required</span>}
                  {/* <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label> */}
                </div>

                {/* photo  */}

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input type="text" placeholder="Photo URL" {...register("photoURL", { required: true })} className="input input-bordered border-teal-400" />
  
                  {errors.photoURL && <span className="text-red-600">Photo url is required</span>}
                </div>
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" placeholder="password" name="password" {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                  })} className="input input-bordered border-teal-400" />
  
                  {errors.password?.type === 'required' && <span className="text-red-600">password is required</span>}
  
                  {errors.password?.type === 'maxLength' && <span className="text-red-600">password must be less 20 character</span>}
  
                  {errors.password?.type === 'minLength' && <span className="text-red-600">password must be 6 character</span>}
  
                  {errors.password?.type === 'pattern' && <span className="text-red-600">password must have one uppercase one lowercase and one special character</span>}
  
                  {/* <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label> */}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input type="number" placeholder="phone" {...register("number", { required: true })} name="number" className="input input-bordered border-teal-400" />
                  {errors.number && <span className="text-red-600">Phone is required</span>}
                
                </div>
                <div className="form-control">
        <label className="label">
          <span className="label-text">Gender</span>
        </label>

        <div>
          {/* Female Radio Button */}
          <label>
            <input
              type="radio"
              value="female"
              {...register('gender', { required: true })}
            />
            Female
          </label>

          {/* Male Radio Button */}
          <label>
            <input
              type="radio"
              value="male"
              {...register('gender', { required: true })}
            />
            Male
          </label>

          {/* Other Radio Button */}
          <label>
            <input
              type="radio"
              value="other"
              {...register('gender', { required: true })}
            />
            Other
          </label>
        </div>
      </div>
                  
                <div className="">
                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">How did you hear about this?</span>
                                </label>
                                <div className="flex gap-4">
                                  <div className="flex justify-center items-center">
                                  <label className="">
                                        <input type="checkbox" {...register("hear", { required: true })} value="LinkedIn" className="checkbox" />
                                        {/* <span >LinkedIn</span> */}
                                        LinkedIn</label>
                                  </div>
                                    <label className="flex  items-center">
                                        <input type="checkbox" {...register("hear", { required: true })} value="Friends" className="checkbox" />
                                        {/* <span className="ml-2">Friends</span> */}
                                        Friends </label>
                                    <label className="flex  items-center">
                                        <input type="checkbox" {...register("hear", { required: true })} value="Job Portal" className="checkbox" />
                                        {/* <span className="ml-2">Job Portal</span> */}
                                        Job Portal</label>
                                    <label className="flex  items-center">
                                        <input type="checkbox" {...register("hear", { required: true })} value="Others" className="checkbox" />
                                        {/* <span className="ml-2">Others</span> */}
                                        Others</label>
                                </div>
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
        <div className="flex items-center">
            {/* <label className="mr-2">City:</label> */}
            <select  {...register("city", { required: true })} className="dropdown w-full border-teal-400" >
                <option value="">Select City</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
                <option value="Ahmedabad">Ahmedabad</option>
            </select>
        </div>
    </div>
</div>

<div className="form-control">
    {/* <label className="label">
        <span className="label-text">City</span>
    </label> */}
    <div className="flex gap-4">
      
      
        
       

        {/* Auto-suggested search textbox for State */}
        <div className="flex items-center">
            <label className="mr-2">State:</label>
            <input
                list="stateOptions"
                {...register("state", { required: true })}
                className="border-teal-400 p-1"
            />
            <datalist id="stateOptions">
                <option value="Gujarat" />
                <option value="Maharashtra" />
                <option value="Karnataka" />
            </datalist>
        </div>
    </div>
</div>


                
               

                <div className="mt-5">
                                 <button className="w-full bg-gradient-to-r  from-teal-500 to-purple-300 py-3 text-center rounded text-white">Save</button>
                                 <p className="text-center mt-3">Already Have an Account? <Link to="/login">
                                     <span className="btn-link font-medium text-teal-500">Login</span>
                                 </Link>
                                 </p>
                             </div>
              </form>
              
              {/* <div className="space-y-3">
              <button onClick={handleGoogleLogin}
                 className=" btn-outline btn w-full bg-gradient-to-r  from-pink-500 to-purple-500  py-3 text-center rounded text-white" >
                    <FaGoogle></FaGoogle>
                  Login In With Googleee</button>
              </div> */}
            </div>
          
        </div>
    );
};

export default AddUser;