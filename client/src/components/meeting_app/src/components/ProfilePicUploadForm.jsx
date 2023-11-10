// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const ProfilePicUploadForm = ({ onFileSelect }) => {

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onFileSelect(file);
  };

  return (
    <div>
      {/* <label htmlFor="profilePic">Choose a profile picture:</label> */}
      <input
        type="file"
        id="profilePic"
        name="profilePic"
        accept="image/*"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default ProfilePicUploadForm;
