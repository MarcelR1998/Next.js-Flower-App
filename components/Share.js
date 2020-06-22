class Share extends React.Component {
    state = {
        show: false,
        link: ""
    }

    componentDidMount() {
        this.setState({
            link: window.location.href
        });
    }

    //Shows and hides content
    toggleShow = () => {
        if (this.state.show == false) {
            this.setState({
                show: true
            })
        } else {
            this.setState({
                show: false
            })
        }
    }

    copyLink = () => {
        var copyText = document.getElementById("flowerLink");
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/
        document.execCommand("copy");
    }

    render() {
        return (
            <div>
                <button id="showButton" onClick={this.toggleShow}>Share this page</button>
                {this.state.show ?
                    <div>
                        <div id="shareLinkDiv">
                            <input id="flowerLink" type="text" readOnly value={this.state.link} />
                            <button onClick={this.copyLink}>Copy to clipboard</button>
                        </div>
                        <a className="shareButton twitter" href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(this.state.link)}`}>
                            <i className="fa fa-twitter"></i> Twitter
                        </a>
                        <a className="shareButton facebook" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.state.link)}`}>
                            <i className="fa fa-facebook"></i> Facebook
                        </a>
                    </div>
                    : null}

                <style jsx>{`
                #showButton{
                    background-color: deepskyblue;
                    color: white;
                    border: 2px solid deepskyblue;
                    border-radius: 8px;
                    padding: 8px;
                    cursor: pointer;
                }
                #showButton:focus {
                    outline: none;
                    box-shadow: 0px 7px 10px -5px rgba(0,0,0,0.33);
                }
                #shareLinkDiv{
                    margin-top: 1em;
                }
                .shareButton {
                    display: block;
                    width: fit-content;
                    margin-top: 1em;
                    color: white;
                    text-decoration: none;
                    padding: 4px;
                    border-radius: 4px;
                }
                .twitter{
                    background-color: #1DA1F2;
                }
                .facebook{
                    background-color: #4267B2;
                }

                `}</style>
            </div>
        );
    }
}

export default Share;