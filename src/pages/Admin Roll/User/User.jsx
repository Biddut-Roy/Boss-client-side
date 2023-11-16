import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { MdDeleteForever } from "react-icons/md";
import { VscGear } from "react-icons/vsc";
import Swal from "sweetalert2";

const User = () => {
    const secureAxios = useAxiosSecure()



    const { data, refetch } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const res = await secureAxios.get('/api/users')
            return res.data
        }
    })

    const handelDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Remove this user!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(id);
                secureAxios.delete(`/user/delete/${id}`)
                    .then(function (response) {
                        console.log(response);
                        if (response.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });
    }

    const handelUpdate = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "Update this user!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it!"
        }).then((result) => {
            if (result.isConfirmed) {
        secureAxios.patch(`/users/admin/${id}`)
            .then(function (response) {
                if (response.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Update!",
                        text: " there has been Admin.",
                        icon: "success"
                    });
               refetch()
                }
            })}
        });
           
    }

    return (
        <div>
            <div className=" flex justify-evenly">
                <h1 className=" text-2xl">All User</h1>
                <h1 className=" text-2xl">Total User:{data?.length}</h1>
            </div>
            <div className=" md:ml-28">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Roll</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            data?.map((user, idx) =>
                                <tbody key={idx}>
                                    <tr>
                                        <th>{idx + 1}</th>
                                        <td>{user?.name}</td>
                                        <td>{user?.email}</td>
                                        <td>
                                            {
                                                user.roll === 'admin' ? "Admin" :<button onClick={() => handelUpdate(user._id)} className=" btn btn-sm"><VscGear /></button>
                                            }
                                            </td>
                                        <td><button onClick={() => handelDelete(user._id)} className=" btn btn-sm"><MdDeleteForever /></button></td>
                                    </tr>
                                </tbody>
                            )
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default User;