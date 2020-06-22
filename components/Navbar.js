import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <div className="navbarCenterDiv centerLayout">
                <a className="logo" href="/">Chamomile &amp; Skill</a>
                <ul>
                    <li className="nav-item">
                        <Link href="/"><a className="nav-link">Home</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about"><a className="nav-link">About</a></Link>
                    </li>
                </ul>
            </div>

            <style jsx>{`
            .logo{
                font-weight: bold;
            }
            nav {
                background-color: #fbfbfb;
                /* background-color: darkseagreen; */
                padding:1em;
                
            }
            .navbarCenterDiv{
                display: flex;
                justify-content: space-between;
            }
            ul {
                display: flex;
                margin: 0;
                list-style: none;
                padding-inline-start: 0;
                padding-left: 0px;
            }
            .nav-item {
                margin-left: 1em;
            }
            a {
                color: black;
                /* color: white; */
                text-decoration: none;
            }
            a:hover {
               text-decoration: underline; 
            }

        `}</style>
        </nav>
    );
}

export default Navbar;