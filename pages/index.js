import Layout from '../components/Layout';

import Flowers from '../components/Flowers';

import UserStatus from "../components/UserStatus";

const Index = (props) => {
    return (
        <Layout>
            <div className="centerLayout">
                <UserStatus />
                <h1>Flowers A-Z</h1>
                <Flowers data={props.data} />
            </div>
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
        </Layout>
    )
}

Index.getInitialProps = async function () {
    const res = await fetch('https://flowers-mock-data.firebaseio.com/flowers.json');
    const data = await res.json();

    return {
        data
    };
}

export default Index;