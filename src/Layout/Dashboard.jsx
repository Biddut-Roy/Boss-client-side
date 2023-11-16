import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";



const Dashboard = () => {
   // TODO: get admin roll and load all user
   const [isAdmin] = useAdmin();

    return (
        <div className=" flex">
            <div className=" w-64 min-h-screen bg-gray-300 ">
                {
                  isAdmin?<ul className=" menu text-black">
                  <li><NavLink to={'/'}>Admin home</NavLink></li>
                  <li><NavLink to={'/dashboard/reservation'}>Add item</NavLink></li>
                  <li><NavLink to={'/dashboard/history'}>Manage Item</NavLink></li>
                  <li><NavLink to={'/dashboard/Review'}>Manage Booking</NavLink></li>
                  <li><NavLink to={'/dashboard/Users'}>All user</NavLink></li>
               </ul>
               :
               <ul className=" menu text-black">
                   <li><NavLink to={'/'}>User home</NavLink></li>
                   <li><NavLink to={'/dashboard/card'}>My card</NavLink></li>
                   <li><NavLink to={'/dashboard/reservation'}>Reservation</NavLink></li>
                   <li><NavLink to={'/dashboard/history'}>payment History</NavLink></li>
                   <li><NavLink to={'/dashboard/Review'}>Add review</NavLink></li>
                   <li><NavLink to={'/dashboard/booking'}>Booking</NavLink></li>
                </ul>
                }
                
                {/* shear content */}
                <div className="divider bg-red-400"></div>
                <ul className=" menu text-black">
                   <li><NavLink to={'/'}>Home</NavLink></li>
                   <li><NavLink to={'/'}>Contact</NavLink></li>
                </ul>
                
            </div>

            <div  className=" flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;