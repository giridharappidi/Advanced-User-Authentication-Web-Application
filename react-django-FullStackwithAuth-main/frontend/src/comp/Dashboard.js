import React from "react";

function Dashboard() {
    return (
      <div>
        <h1>Dashboard</h1>
        <button
          onClick={() => {
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            window.location.href = '/login';
          }}
        >
          Logout
        </button>
      </div>
    );

}
  export default Dashboard;
  