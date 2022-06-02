import { Link, Outlet } from 'react-router-dom';
import { getUsers } from '../mock-users';

export default function UserProfiles() {
  let users = getUsers();
  return (
    <div style={{ display: 'flex' }}>
      {users.map(user => (
        <Link
          style={{ display: 'block', margin: '1rem 0' }}
          to={`/profile/${user.number}`}
          key={user.number}
        >
          {console.log(user.name)}
        </Link>
      ))}
      <Outlet />
    </div>
    // <main style={{ padding: '1rem 0' }}>
    //   <h2>User</h2>
    // </main>
  );
}
