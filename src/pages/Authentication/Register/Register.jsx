import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm()

    const { createUser } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from || '/';

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                navigate(from);
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className='mt-10 py-20 lg:mx-auto lg:w-1/3  px-14'>

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-5xl font-bold">Create an Account</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" {...register("email", { required: true })} className="input" placeholder="Email" />

                            {errors.email?.type === 'required' && <p role="alert">Email is required</p>}

                            <label className="label">Password</label>
                            <input type="password" {...register("password", { required: true })} className="input" placeholder="Password" />

                            {errors.password?.type === 'required' && <p role="alert">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p role="alert">Password must be 6 character or more</p>}

                            <button className="btn btn-primary mt-4">Create An Accout</button>
                        </fieldset>
                        <p><small>Already have an Account? <Link className='btn btn-link' to="/login">Login</Link></small></p>
                    </form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>

    );
};

export default Register;