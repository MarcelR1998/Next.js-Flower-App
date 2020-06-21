import Layout from '../components/Layout';
import Comments from '../components/Comments'
import Share from '../components/Share'
import UserStatus from '../components/UserStatus';

class Flower extends React.Component {
    state = {
        searchTerm: "",
        data: [],
        loaded: false,
    }

    async componentDidMount() {
        const res = await fetch('https://flowers-mock-data.firebaseio.com/flowers.json');
        const data = await res.json();
        this.setState({
            searchTerm: decodeURIComponent(window.location.search.slice(8)),
            data: data,
            loaded: true,
        });
    }

    render() {

        let index = null;

        if (this.state.loaded) {
            index = this.state.data.map(flower => flower.common_name).indexOf(this.state.searchTerm);
        }

        return (
            <Layout>
                <div className="centerLayout">
                    <UserStatus />
                    {
                        this.state.data.filter(flower => flower.common_name == this.state.searchTerm).map(flower => (
                            <div key={flower.common_name}>
                                <img src={flower.cover_image} alt="" />
                                <h1>{flower.common_name}</h1>
                                <h4>Latin name: {flower.latin_name}</h4>
                                <p>{flower.notes}.</p>
                                {flower.sun ? <p>This plant thrives in the sun.</p> : <p>It should rather be planted in the shade.</p>}
                                <h4>Blooming season: {flower.blooming_season}</h4>
                                <h4>
                                    Height: {flower.height.length > 1 ? <span>Between {flower.height[0].numberInt}" and {flower.height[1].numberInt}"</span>
                                        : <span>{flower.height[0].numberInt}"</span>}
                                </h4>
                                <h4>Soil:</h4>
                                <ul>
                                    {flower.soil.map(item => (
                                        <li key={item}>
                                            <p>{item}</p>
                                        </li>
                                    ))}
                                </ul>
                                <h4>Planting depth: {flower.depth.numberInt}"</h4>
                                <h4>Spacing: {flower.spacing.numberInt}"</h4>
                                <Share flower={flower.common_name} />
                                <Comments index={index} />
                            </div>
                        ))
                    }
                    <style jsx>{`
                    img{
                        max-width: 100%;
                        max-height: 400px;
                        margin-top: 1em;
                    }
                    `}</style>
                </div>
            </Layout>
        );
    }
}

export default Flower;