import isAuthenticated from './Auth';
import React from 'react';

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route 
        {...rest}
        render={props => 
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to="/login" />
            )
        }
    />
);

export default PrivateRoute;