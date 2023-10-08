/* eslint-disable react/no-unescaped-entities */

import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Profile = () => {

    const { user } = useContext(AuthContext);
    const { email, photo, displayName } = user;

    return (
        <div className="my-10 text-center">
            <h2 className="text-xl font-bold mb-4">User's Profile:</h2>
            <div className="flex justify-center items-center gap-10 my-6">
                <img src={photo} alt={displayName} />
                <p> {displayName} </p>
            </div>
            <p><span className="font-bold">Email: </span>{email}</p>
        </div>
    );
};

export default Profile;