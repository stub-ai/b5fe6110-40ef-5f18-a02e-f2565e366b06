import React, { useEffect, useState } from 'react';

interface JudicialRecord {
  title: string;
  description: string;
}

interface UserData {
  judicialRecords: JudicialRecord[];
}

const Portal = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    // Fetch user data here
    const fetchData = async () => {
      const response = await fetch('/api/userdata');
      const data: UserData = await response.json();
      setUserData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Welcome to your portal</h1>
      {/* Display user data here */}
      {userData && (
        <div>
          <h2>Judicial Records</h2>
          {/* Map through judicial records */}
          {userData.judicialRecords.map((record, index) => (
            <div key={index}>
              <h3>{record.title}</h3>
              <p>{record.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Portal;