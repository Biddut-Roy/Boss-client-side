import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const secureAxios = useAxiosSecure()
    const { user } = useAuth()

    const { data: isAdmin , isPending: isLoading } = useQuery({
        queryKey : [ user?.email , "isAdmin"],
        queryFn: async() =>{
            const res = await secureAxios.get(`/api/users/admin/${user.email}`)
            console.log(res.data);
            return res.data;
        }
    })
 return [isAdmin , isLoading]
};

export default useAdmin;