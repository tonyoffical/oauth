import { useLocation, Navigate } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  const userData = location.state?.userData;


  if (!userData) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Welcome, {userData.name}!</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-6">
          {userData.picture && (
            <img
              src={userData.picture}
              alt="Profile"
              className="w-20 h-20 rounded-full mr-4"
            />
          )}
          <div>
            <h2 className="text-xl font-semibold">{userData.name}</h2>
            <p className="text-gray-600">{userData.email}</p>
          </div>
        </div>
        <div className="border-t pt-4">
          <h3 className="text-lg font-semibold mb-2">Account Information</h3>
          <p><strong>Email Verified:</strong> {userData.email_verified ? 'Yes' : 'No'}</p>
     
        </div>
      </div>
    </div>
  );
};

export default Dashboard;