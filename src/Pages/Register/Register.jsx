import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import swal from "sweetalert";
import { updateProfile } from "firebase/auth";

const Register = () => {

    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        if (password.length < 6) {
            swal("Error!", "Password should be at least 6 characters or longer", "error");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            swal("Error!", "Your password should have at least one upper case characters.", "error");
            return;
        }

        createUser( email, password)
            .then(result => {
                console.log(result.user);
                navigate('/');
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200 my-12">
            <div className="">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-10 text-center">Register now!</h1>
                </div>
                <div className="card py-12 px-10 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                        </div>
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

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-info text-white">Register</button>
                        </div>
                    </form>
                    <p className="mx-auto mb-4">Already have an account? Please <Link to={'/login'}><span className="font-bold text-blue-500">Login</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;