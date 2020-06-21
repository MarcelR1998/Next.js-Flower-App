class Flowers extends React.Component {
    state = {
        search: "",
    }

    /*     componentDidMount() {
            const user = this.context;
        } */

    onchange = e => {
        this.setState({ search: e.target.value });
        console.log(this.user);
    }

    renderFlowerCard = flower => {
        const { search } = this.state;

        if (search !== "" && flower.common_name.toLowerCase().indexOf(search.toLowerCase()) === -1
            && flower.latin_name.toLowerCase().indexOf(search.toLowerCase()) === -1
            && flower.blooming_season.toLowerCase().indexOf(search.toLowerCase()) === -1
        ) {
            return null;
        }
        return <li key={flower.common_name}>
            {/* Dev URL: http://localhost:3000 */}
            <a className="cardLink" href={`https://next-js-flower-app.marcelr1998.vercel.app/flower?flower=${flower.common_name}`}>
                {flower.cover_image ? <img src={flower.cover_image} alt="" /> : null}
                <div className="cardContent">
                    <h3 className="cardTitle">{flower.common_name}</h3>
                    <p>{flower.latin_name}</p>
                    {flower.sun ? <span className="badge sun">☀️Sun | </span> : <span className="badge shade">🌙Shade | </span>}
                    <span className="badge season">{flower.blooming_season}</span>
                </div>
            </a>

            <style jsx>{`
                li {
                    list-style: none;
                }
                .cardContent{
                    display: inline;
                    height: 128px;
                    margin: 0;
                }
                img {
                    height: 128px;
                    padding-right: 1em;
                }
                .cardLink {
                    background-color: #fbfbfb;
                    /* box-shadow: 0px 7px 10px -5px rgba(0,0,0,0.33); */
                    display: flex;
                    padding: 1em;
                    margin-bottom: 1em;
                    transition: 0.2s;
                }
                .cardLink:hover{
                    transform: scale(1.04);
                }
                a {
                    color: black;
                    text-decoration: none;
                }
                .cardTitle {
                    margin: 0;
                }
                .badge {
                    font-size: 0.8em;
                }
                `}</style>
        </li>
    }

    render() {

        return (
            <div>
                {this.user ? <p>hejsan du är inloggad</p> : null}
                <input type="text" placeholder="Search flower..." id="search" value={this.search} onChange={this.onchange} autoComplete="off" />
                <ul className="list-group">
                    {this.props.data.map(flower => (
                        this.renderFlowerCard(flower)
                    ))}
                </ul>
                <br />

                <style jsx>{`
                ul {
                    padding-inline-start: 0;
                    padding-left: 0px;
                }

                #search {
                    padding: 8px;
                }
                `}</style>
            </div>
        );
    }
}

export default Flowers;