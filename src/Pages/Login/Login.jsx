import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {

    const { signInUser } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log( email, password);

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200 my-12">
            <div className="">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-10 text-center">Login now!</h1>
                </div>
                <div className="card py-12 px-10 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-info text-white">Login</button>
                        </div>
                    </form>
                    <p className="mx-auto mb-4">Do not have an account? Please <Link to={'/register'}><span className="font-bold text-blue-500">Register</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;