import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children}) => {
    const {user} = useAuth();
    if(!user.displayName){
        return <Navigate to="/login" replace />;
    }
    return children;
};

export default PrivateRoute;