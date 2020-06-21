import Comment from './Comment';
import { useEffect, useState } from 'react';
import { useUser } from '../utils/auth/useUser'

const Comments = (props) => {
    const [comments, setComments] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [index, setIndex] = useState(null);
    const [userComment, setUserComment] = useState("");
    const { user, logout } = useUser()

    useEffect(() => {
        fetchComments();
        setIndex(props.index)
    }, []);

    //Fetches comments, both on page load and when a comment is posted from client
    const fetchComments = async () => {
        const res = await fetch('https://flowers-mock-data.firebaseio.com/comments.json');
        const data = await res.json();
        setComments(Object.entries(data));
        setLoaded(true);
    }

    const handleChange = (e) => {
        setUserComment(e.target.value);
    }

    const post = async (message) => {
        if (message !== "") {
            await fetch(`https://flowers-mock-data.firebaseio.com/comments/MarcelR1998/${index}.json`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ comment: message })
            })
                .then(res => {
                    console.log(res)
                    fetchComments();
                    setUserComment("");
                })
                .catch(err => console.error(err))
        }
    }


    return (
        <div>
            <h2>Comments</h2>
            {user ? <div id="commentForm">
                <textarea id="" cols="30" rows="2" value={userComment} placeholder={`Comment publicly as MarcelR1998`} onChange={handleChange} />
                <button className="commentButton" disabled={!userComment} onClick={() => post(userComment)}>Comment</button>
            </div> : <div id="commentForm">
                    <textarea id="" cols="30" rows="2" placeholder="Sign in in order to comment." readOnly />
                    <button className="commentButton" disabled>Comment</button>
                </div>
            }

            {loaded ? comments.map(user => (
                user[1][index] ? (
                    Object.entries(user[1][index]).map((myComment, index) => (
                        myComment[1].comment ?
                            <div key={user[0] + index}>
                                <Comment user={user[0]} comment={myComment[1].comment} />
                            </div>
                            : null
                    ))
                ) : null
            )) : null}
            <style jsx>{`
                #commentForm{
                    display: flex;
                    width: 100%;
                    margin-bottom: 1em;
                }
                textarea {
                    resize: none;
                    width: 100%;
                }
                .commentButton{
                    background-color: deepskyblue;
                    color: white;
                    border: 2px solid deepskyblue;
                    border-radius: 8px;
                    margin-left: 4px;
                    padding: 8px;
                    cursor: pointer;
                }
                .commentButton:disabled{
                    filter: opacity(0.4);
                    cursor: auto;
                }
                `}</style>
        </div>
    );

}

export default Comments;