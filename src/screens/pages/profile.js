import { useHistory } from 'react-router';
import '../pages/profile.css';

function Profile(props) {
  const history = useHistory();
  const logOutHandler = async () => {
    await logOutHandler();
    history.replace('/');
  };

  return (
    <div>
      <button className="btn-change" onClick={logOutHandler}>
        Log Out
      </button>
      <h2>{props.title}</h2>
    </div>
  );
}
export default Profile;
