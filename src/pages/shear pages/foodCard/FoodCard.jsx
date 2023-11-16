import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCards from "../../../Hooks/useCards";




const FoodCard = ({ item }) => {
    const { image, recipe, name, price } = item;
    const navigate = useNavigate()
    const { user } = useAuth()
    const location = useLocation()
    const SecureAxios = useAxiosSecure()
    const [ , refetch ] = useCards()


    const handelAddFood = (food) => {
        const { image, name, price, _id } = food;
        if (user && user.email) {
            const itemData = {
                mainId: _id,
                email: user.email,
                name,
                image,
                price
            }

            SecureAxios.post('/cards', itemData)
                .then(function (response) {
                    console.log(response.data);
                    if (response.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added by card`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch()
                    }
                })

        } else {
            Swal.fire({
                title: "Please login ",
                text: "have a account and login",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "login"
            }).then(() => {
                navigate("/login", { state: { from: location } })

            });
        }
    }
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <p className=" absolute top-10 right-10 bg-black text-white">${price}</p>
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handelAddFood(item)} className="btn btn-outline border-0 border-b-4">Buy now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;