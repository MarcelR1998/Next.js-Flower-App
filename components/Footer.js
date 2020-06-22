import Link from 'next/link';

const Footer = () => {
    return (
        <footer>
            <div className="footerCenterDiv centerLayout">
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
            footer {
                background-color: black;
                padding:3em;
                
            }
            .footerCenterDiv{
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
                color: white;
                text-decoration: none;
            }
            a:hover {
               text-decoration: underline; 
            }
        `}</style>
        </footer>
    );
}

export default Footer;