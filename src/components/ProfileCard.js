import React from 'react';

const ProfileCard = ({ profile, onSummaryClick }) => {
  const handleSummaryClick = () => {
    onSummaryClick(profile);
  };

  return (
    <div className="profile-card">
      <img src={profile.photo} alt={profile.name} className="profile-photo" />
      <div className="profile-info">
        <h2>{profile.name}</h2>
        <p>{profile.description}</p>
        <button onClick={handleSummaryClick} className="summary-button">Summary</button>
      </div>
    </div>
  );
};

export default ProfileCard;
