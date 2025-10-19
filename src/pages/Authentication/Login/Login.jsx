import { useForm } from "react-hook-form";
import {  useLocation, useNavigate } from "react-router-dom";
// import SocialLogin from "../SocialLogin/SocialLogin";
import useAuth from "../../../hooks/useAuth";
import AdminNavbar from "../../AdminNavbar/AdminNavbar";


const Login = () => {
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm()

    const { signIn } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from || '/';

    const onSubmit = (data) => {
        signIn(data.email, data.password)
            .then(result => {
                console.log(result.user);
                navigate(from);
            })
            .catch(error => console.log(error))
    }



    return (
        <div  >
            <AdminNavbar></AdminNavbar>
            <div className="py-20 mt-20 lg:mx-auto lg:w-1/3  px-14 ">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Login</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email"  {...register("email", { required: true })} className="input" placeholder="Email" />

                                {errors.email?.type === 'required' && <p role="alert">Email is required</p>}

                                <label className="label">Password</label>
                                <input type="password"  {...register("password", { required: true, minLength: 6 })} className="input" placeholder="Password" />

                                {errors.password?.type === 'required' && <p role="alert">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p role="alert">Password must be 6 character or more</p>}

                                <div><a className="link link-hover">Forgot password?</a></div>

                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                            {/* <p><small>Donot have an Account? <Link className='btn btn-link' to="/register">Register</Link></small></p> */}
                        </form>
                        {/* <SocialLogin></SocialLogin> */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;