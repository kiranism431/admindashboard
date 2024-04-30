import React from 'react';

const ProfileDetails = ({ profile }) => {
  return (
    <div className="profile-details">
      <h2>{profile.name}</h2>
      <p>{profile.description}</p>
      {/* Additional profile details */}
      <div className="additional-details">
        <p>Contact Information: {profile.contactInfo}</p>
        <p>Interests: {profile.interests.join(', ')}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default ProfileDetails;
