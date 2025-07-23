import { useState } from 'react';

const Profile = () => {
  const [person, setPerson] = useState({
    name: 'Darrshan',
    age: 22,
  });

  return <div>Profile</div>;
};

export default Profile;
