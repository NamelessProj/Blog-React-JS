import {Link, useParams} from "react-router-dom";

const PostPage = ({posts, handleDelete}) => {

    const {id} = useParams();
    const post = posts.find(post => (post.id).toString() === id);

    return (
        <main className="PostPage">
            <article className="post">
                {post &&
                    <>
                        <h2>{post.title}</h2>
                        <p className="postDate">{post.datetime}</p>
                        <p className="postBody">{post.body}</p>
                        <button
                            onClick={() => handleDelete(post.id)}
                            style={{marginTop: '1rem'}}
                        >
                            Delete
                        </button>
                    </>
                }
                {!post &&
                    <>
                        <h2>Article not found</h2>
                        <p>Sorry for your time loss...</p>
                        <p>
                            <Link to="/">Go back to the home page.</Link>
                        </p>
                    </>
                }
            </article>
        </main>
    );
};

export default PostPage;