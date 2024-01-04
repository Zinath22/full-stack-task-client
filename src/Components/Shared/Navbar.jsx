import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Navbar = () => {
   const {user,  logOut} = useContext(AuthContext);

   const handleLogOut = () => {
    logOut()
    .then(() => {})
     .catch(error => console.log(error));
   }

    const navLinks = <>
      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/allUsers'}>All Users</Link></li>
      <li><Link to={'/signUp'}>Registration</Link></li>
       
{/*        
        {
          user ? <>
           <button onClick={handleLogOut} className="btn">Logout</button>
          </> : <>
               <li><Link to={'/login'}>Login</Link></li>
          </> 
        } */}
          {user ? '' : <li><Link to="/login">Login</Link></li>}
    </>

    return (
        <div>
            <div className="navbar bg-purple-400">
                 <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
           
          {navLinks}

      </ul>
    </div>
    <h3 className=" text-xl">Mindful Gurukul Task</h3>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

     {navLinks}

    </ul>
  </div>
  {
            user ? <div> <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL ? user.photoURL : ''} />
                </div>
              </label>
              <ul tabIndex={0} className="space-y-4 text-blue-400 p-4 menu menu-sm dropdown-content mt-3 z-[1]  shadow bg-base-100 rounded-box w-52">
                <li>{user?.email}</li>
                
                

                <li onClick={handleLogOut}><a>Logout</a></li>
              </ul>
            </div>

            </div> 
            :
              ''
          }
</div>
        </div>
    );
};

export default Navbar;