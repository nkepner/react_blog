import { useUserContext } from '../contexts/UserContext';
import { useTheme } from '../contexts/ThemeContext';

const Profile = () => {
    const { theme } = useTheme();
    const { user: { user: username }} = useUserContext();
    return (
        <div>
            <h2>Hi {username} !</h2>
            <p> Thank you so much for contributing to this Blog! </p>
            <p>The current theme is {theme}.</p>
        </div>
    )
}

export default Profile