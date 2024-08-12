import ProfilePage from './ProfilePage.jsx';
import UserContext from './UserContext.jsx';


function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (

    <UserContext.Provider value={[userData]}>
 <ProfilePage userData={userData} />
 </UserContext.Provider>
);

}

export default App;