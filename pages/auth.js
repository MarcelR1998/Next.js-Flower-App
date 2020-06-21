import FirebaseAuth from '../components/FirebaseAuth'
import Layout from '../components/Layout';

const Auth = () => {
    return (
        <div>
            <Layout>
                <div className="centerLayout">
                    <h3>Sign in with an existing account, or sign up.</h3>
                    <p>Your information is handled by <a href="https://firebase.google.com/">Google Firebase</a>.</p>
                    <FirebaseAuth />
                </div>
            </Layout>
        </div>
    )
}

export default Auth