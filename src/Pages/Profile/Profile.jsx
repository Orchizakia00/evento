/* eslint-disable react/no-unescaped-entities */

import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Profile = () => {

    const {user} = useContext(AuthContext);
    const {email} =  user;

    return (
        <div className="my-10">
            <h2 className="text-xl font-bold">User's Profile:</h2>
            <p> Email: {email} </p>
        </div>
    );
};

export default Profile;