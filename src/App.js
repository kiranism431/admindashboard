import React, { useState, useEffect } from 'react';
import ProfileList from './components/ProfileList';
import Map from './components/Map';
import ProfileDetails from './components/ProfileDetails';
import AdminPanel from './components/AdminPanel';
import LoadingIndicator from './components/LoadingIndicator';
import { getProfiles } from './services/ProfileService';

const App = () => {
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const data = await getProfiles();
        setProfiles(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching profiles:', error);
        setIsLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  const handleSummaryClick = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div className="app">
      <h1>Profiles</h1>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <>
          <ProfileList profiles={profiles} onSummaryClick={handleSummaryClick} />
          <div className="profile-details-container">
            {selectedProfile ? (
              <>
                <ProfileDetails profile={selectedProfile} />
                <Map address={selectedProfile.address} />
              </>
            ) : (
              <div className="no-profile-selected">No profile selected</div>
            )}
          </div>
          <AdminPanel />
        </>
      )}
    </div>
  );
};

export default App;
