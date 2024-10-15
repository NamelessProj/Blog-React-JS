import Feed from "../components/Feed.jsx";

const Home = ({posts}) => {
    return (
        <main className="Home">
            {posts.length ? (
                <Feed posts={posts} />
            ) : (
                <p style={{marginTop: '2rem'}}>There's no articles to show :(</p>
            )}
        </main>
    );
};

export default Home;