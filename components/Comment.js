class Comment extends React.Component {
    state = {
        /*   gitHubData: [], */
        loaded: false,
    }

    //Fetches Github information for profile pictures, would like to use but exceeded API rate limit.

    /*     async componentDidMount() {
            const res = await fetch(`https://api.github.com/users/${this.props.user}`);
            const data = await res.json();
            this.setState({
                gitHubData: data,
                loaded: true,
            });
        } */

    render() {
        return (
            <div className="comment">
                <div className="contents">
                    {/*   <img src={this.state.gitHubData.avatar_url} alt={this.props.user + " photo"} /> */}
                    <div>
                        <a href={`https://github.com/${this.props.user}`}>{this.props.user}</a>
                        <p>{this.props.comment}</p>
                    </div>
                </div>

                <style jsx>{`
                .comment {
                  background-color: #fbfbfb;
                  padding: 1em;
                  margin-bottom: 1em;
                }

                .contents {
                    display: flex;
                }

                img {
                    width: 64px;
                    height: 64px;
                    border-radius: 100%;
                    margin-right: 1em;
                }
                `}</style>
            </div>
        );
    }
}

export default Comment;