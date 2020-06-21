import Link from 'next/link'
import { useUser } from '../utils/auth/useUser'

const UserStatus = () => {
    const { user, logout } = useUser()

    if (!user) {
        return (
            <div>
                <p>
                    You are not signed in. <Link href={'/auth'}><a>Sign in or register</a></Link>.
                </p>
            </div>
        )
    }
    return (
        <div>
            <p>Signed in as {user.email}. <span className="signOut" onClick={() => logout()}>Log out</span></p>
            <style jsx>{`
                .signOut{
                    color: blue;
                    text-decoration: underline;
                    cursor: pointer;
                }
                .signOut:hover{
                    text-decoration: underline;
                }
            `}</style>
        </div>
    )
}

export default UserStatus;