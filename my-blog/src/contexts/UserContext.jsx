import { createContext, useContext, useState} from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext();

const defaultUser = {user: null}

export function UserProvider({ children }) {
  const [user, setUser] = useState(defaultUser);

  const updateUser = (value) => {
    setUser(prev => ({
        ...prev,
        user: value
      }));
  };

  const resetUser = () => {
    setUser(defaultUser);
  };

  return (
    <UserContext.Provider 
      value={{ 
        user, 
        updateUser, 
        resetUser, 
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};