import UserContext from './UserContext.jsx';

function UserDetails() {
    const UserData = UserContext(UserContext);
    return (
      <div>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
      </div>
    );
  }
  
  export default UserDetails;