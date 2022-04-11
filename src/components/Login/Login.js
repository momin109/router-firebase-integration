import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import app from '../../firebase.init';

const auth = getAuth(app)

const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth)
    return (
        <div>
            <h2>Please login now</h2>
            <div style={{ margin: '20px' }}>
                <button onClick={() => signInWithGoogle()}>Google Sign In</button>
            </div>
            <form>

                <input type="email" placeholder='enter your email' id="" />
                <br />
                <input type="password" placeholder='enter your password' id="" />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;