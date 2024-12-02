import { useUserContext } from '../contexts/UserContext';

const Profile = () => {
    const { user: { user: username }} = useUserContext();
    return (
        <div>
            <h2>Hi {username} !</h2>
            <p> Thank you so much for contributing to this Blog! </p>
        </div>
    )
}

export default Profile