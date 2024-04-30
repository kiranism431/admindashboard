import React, { useState } from 'react';

const AdminPanel = ({ profiles, onAddProfile, onUpdateProfile, onDeleteProfile }) => {
  const [newProfile, setNewProfile] = useState({
    name: '',
    description: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleAddProfile = () => {
    onAddProfile(newProfile);
    setNewProfile({
      name: '',
      description: '',
      // Reset other fields as needed
    });
  };

  return (
    <div className="admin-panel">
      <nav className="navbar">
        <ul>
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#profiles">Profiles</a></li>
          <li><a href="#settings">Settings</a></li>
        </ul>
      </nav>

      <div className="admin-header">
        <h2>Add New Profile</h2>
      </div>
      <form>
        <input type="text" name="name" value={newProfile.name} onChange={handleChange} placeholder="Name" />
        <textarea name="description" value={newProfile.description} onChange={handleChange} placeholder="Description" />
        {/* Add more input fields for additional profile details */}
        <button type="button" onClick={handleAddProfile}>Add Profile</button>
      </form>
      {/* Additional functionality for updating and deleting profiles */}
    </div>
  );
};

export default AdminPanel;
