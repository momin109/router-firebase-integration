import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app)

const Product = () => {
    const { user } = useAuthState(auth)
    return (
        <div>
            <h2>knock knock knock ! what is your name</h2>
            <h3>{user ? user.displayName : 'voot'}</h3>
        </div>
    );
};

export default Product;