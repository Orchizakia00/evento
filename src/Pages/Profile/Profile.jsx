/* eslint-disable react/no-unescaped-entities */

import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Profile = () => {

    const { user } = useContext(AuthContext);
    const { email, photoURL, displayName } = user;

    return (
        <div className="my-10 text-center">
            <h2 className="text-xl font-bold mb-4">User's Profile:</h2>
            <div className="flex justify-center items-center gap-10 my-6">
                <img src={photoURL} alt={displayName} className="w-[200px] h-[200px]" />
                <div className="text-center">
                    <p className="font-bold mb-4 text-3xl">  {displayName} </p>
                    <p>{email}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;