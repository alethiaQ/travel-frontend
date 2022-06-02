import { useParams } from 'react-router-dom';
import { findUserById } from '../mock-users';
export default function UserProfile() {
  let params = useParams();
  let user = findUserById(parseInt(params.profileId, 10));
  return (
    <div>
      <h2> User: {user.name}</h2>
      <p>{user.number}</p>
    </div>
  );
}
