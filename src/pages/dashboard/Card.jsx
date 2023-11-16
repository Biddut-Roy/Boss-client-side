import Swal from "sweetalert2";
import useCards from "../../Hooks/useCards";
import usePublicAxios from "../../Hooks/usePublicAxios";



const Card = () => {
    const [card , refetch ] = useCards();
    const total = card.reduce((acc, card) => acc + card.price, 0)
    const publicAxios = usePublicAxios()
    const handelDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Deleted item",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                publicAxios.delete(`/cards/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })

            }
        });
    }


    return (
        <div>
            <div className=" flex justify-around">
                <h1 className=" text-5xl">item: {card.length}</h1>
                <h1 className=" text-5xl">Prices: {total}</h1>
                <button className=" btn btn-sm bg-slate-500">pay</button>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                card.map((item, idx) => <tr key={idx}>
                                    <th>
                                        {idx + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <div className="font-bold">{item.name}</div>

                                        </div>
                                    </td>
                                    <td>
                                        <span className="badge badge-ghost badge-sm">${item.price}</span>
                                    </td>
                                    <th>
                                        <button onClick={() => handelDelete(item._id)} className="btn btn-ghost btn-xs">Delete</button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default Card;