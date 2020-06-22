import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = (props) => (
    <div>
        <Head>
            <title>Chamomile &amp; Skill</title>
            {/*    <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/minty/bootstrap.min.css" rel="stylesheet" integrity="sha384-HqaYdAE26lgFCJsUF9TBdbZf7ygr9yPHtxtg37JshqVQi6CCAo6Qvwmgc5xclIiV" crossorigin="anonymous" /> */}
            <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />
        </Head>
        <Navbar />
        <div className="container">
            {props.children}
        </div>
        <Footer />

        <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
        
        body {
            margin: 0;
        }

        * {
            font-family: 'Roboto', sans-serif;
        }

        .centerLayout {
            width: 95%;
            max-width: 600px;
            margin: auto;
        }
        .container{
            min-height: 100vh;
        }

        `}</style>

    </div>
);

export default Layout;