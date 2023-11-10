// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import ProfilePicUploadForm from "../components/meeting_app/src/components/ProfilePicUploadForm.JSX";
import DefaultPic from "../assets/images/logo.png";

const Profile = () => {
  const [profilePic, setProfilePic] = useState(null);
  const defaultProfilePicUrl = DefaultPic;

  const handleFileSelect = (file) => {
    setProfilePic(file);
  };

  return (
    <>
      <section className="h-screen flex flex-col justify-center items-center gap-5">
        <div className="flex items-center gap-5">
          {profilePic && (
            <>
              <img
                className="w-24 h-24 rounded-full object-cover"
                src={URL.createObjectURL(profilePic)}
                alt="Uploaded Profile Picture"
              />
              <div className="text-white">
                <p className="text-lg">Username</p>
                <p className="text-lg">Email</p>
              </div>
            </>
          )}
          {!profilePic && (
            <img
              className="w-32"
              src={defaultProfilePicUrl}
              alt="Default Profile Picture"
            />
          )}
        </div>
        {!profilePic && (
          <ProfilePicUploadForm onFileSelect={handleFileSelect} />
        )}
      </section>
    </>
  );
};

export default Profile;
