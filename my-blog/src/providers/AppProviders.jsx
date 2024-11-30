import { BlogProvider } from '../contexts/BlogContext';
import PropTypes from 'prop-types';

export function AppProviders({ children }) {
    return (
        <BlogProvider>
            {children}
        </BlogProvider>
    );
}

AppProviders.propTypes = {
    children: PropTypes.node.isRequired
};