import { ThemeProvider } from '../contexts/ThemeContext';
import { PreferencesProvider } from '../contexts/PreferencesContext';
import { BlogProvider } from '../contexts/BlogContext';
import { UserProvider } from '../contexts/UserContext';
import PropTypes from 'prop-types';

export function AppProviders({ children }) {
  return (
    <ThemeProvider>
      <PreferencesProvider>
        <BlogProvider>
          <UserProvider>
          {children}
          </UserProvider>
        </BlogProvider>
      </PreferencesProvider>
    </ThemeProvider>
  );
}

AppProviders.propTypes = {
  children: PropTypes.node.isRequired
};