import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Authprovider/Authprovider";


const PrivateRoute = ({children}) => {
    const location = useLocation()
    const { user , loading} = useContext(AuthContext)
    if (loading) {
        
        return <span className="loading loading-bars loading-lg"></span>
    }

    if (user) {
        return children
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;