import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../Authprovider/Authprovider";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import usePublicAxios from "../../Hooks/usePublicAxios";
import GoogleLogin from "./Social Login/GoogleLogin";


const Register = () => {
    const publicAxios = usePublicAxios()
    const navigate = useNavigate()
    const { createUser, userUpdateProfile } = useContext(AuthContext)
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data?.email, data?.password, data?.firstName, data?.photo);
        createUser(data?.email, data?.password)
            .then(() => {
                userUpdateProfile(data?.firstName, data?.photo)
                    .then(() => {
                        const userData = {
                            email: data?.email,
                            name: data?.firstName,
                        }
                        publicAxios.post('/api/users' , userData)
                            .then(res => {
                                if (res.data.insertedId) {
                                    reset()
                                    navigate("/")
                                    Swal.fire({
                                        title: "registered successfully ",
                                        showClass: {
                                            popup: `
                            animate__animated
                            animate__fadeInUp
                            animate__faster
                          `
                                        },
                                        hideClass: {
                                            popup: `
                            animate__animated
                            animate__fadeOutDown
                            animate__faster
                          `
                                        }
                                    });

                                }
                            })

                    })
                    .catch(() => { })
            })
            .catch((error) => {
                console.log(error.message);
            });
    }


    return (
        <>
            <Helmet>
                <title>BISTRO || REGISTER</title>
                <link rel="canonical" />
            </Helmet>
            <div className="hero min-h-screen w-11/12 mx-auto bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Register!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card md:w-1/2   max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("firstName", { required: true })} placeholder="name" className="input input-bordered" />
                                {errors.firstName?.type === "required" && (
                                    <p className=" text-red-400">First name is required</p>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Profile Photo Url</span>
                                </label>
                                <input type="text" {...register("photo", { required: true })} placeholder="Url" className="input input-bordered" />
                                {errors.firstName?.type === "photo" && (
                                    <p className=" text-red-400">photo is required</p>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" {...register("email")} placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" {...register("password", {
                                    required: true, minLength: 6, maxLength: 20,
                                    pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6}$/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === "minLength" && (
                                    <p className=" text-red-400">password must be 6 character</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className=" text-red-400">password must 1 uppercase 1 lowercase or special character and number </p>
                                )}

                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-success" value="Register" />
                            </div>
                            <p>Already have a account. Please <Link to={"/login"}><span className=" text-blue-500">Login</span></Link></p>
                            <GoogleLogin></GoogleLogin>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;