import './App.css';
import {Route, Routes, useNavigate} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import PostPage from "./pages/PostPage.jsx";
import {useEffect, useState} from "react";
import NewPost from "./pages/NewPost.jsx";
import {format} from "date-fns";
import ErrorPage from "./pages/ErrorPage.jsx";

function App() {

    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [postTiltle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: "First title",
            datetime: "01 October 2024",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae eius eveniet ex, iusto maiores nostrum officia omnis sequi voluptatem? Inventore nisi quibusdam reiciendis vel velit veritatis voluptate. A consequatur esse eveniet nihil praesentium suscipit tenetur vel veniam voluptate voluptatem? Dolores fugit quos voluptate! A at autem consequatur dignissimos dolore eaque illo, itaque laudantium libero maiores, minima molestias numquam officia provident ratione temporibus, totam? Accusantium adipisci, amet aperiam architecto assumenda, deleniti distinctio dolor dolore dolorum, earum est eum expedita fugiat harum incidunt iste labore neque nesciunt nobis perferendis possimus quaerat quod repellat vel velit? Accusantium atque eius maxime natus reiciendis."
        },
        {
            id: 2,
            title: "Something",
            datetime: "10 October 2024",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae eius eveniet ex, iusto maiores nostrum officia omnis sequi voluptatem? Inventore nisi quibusdam reiciendis vel velit veritatis voluptate. A consequatur esse eveniet nihil praesentium suscipit tenetur vel veniam voluptate voluptatem? Dolores fugit quos voluptate! A at autem consequatur dignissimos dolore eaque illo, itaque laudantium libero maiores, minima molestias numquam officia provident ratione temporibus, totam? Accusantium adipisci, amet aperiam architecto assumenda, deleniti distinctio dolor dolore dolorum, earum est eum expedita fugiat harum incidunt iste labore neque nesciunt nobis perferendis possimus quaerat quod repellat vel velit? Accusantium atque eius maxime natus reiciendis."
        },
        {
            id: 3,
            title: "Incredible! You won't believe it!",
            datetime: "15 October 2024",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae eius eveniet ex, iusto maiores nostrum officia omnis sequi voluptatem? Inventore nisi quibusdam reiciendis vel velit veritatis voluptate. A consequatur esse eveniet nihil praesentium suscipit tenetur vel veniam voluptate voluptatem? Dolores fugit quos voluptate! A at autem consequatur dignissimos dolore eaque illo, itaque laudantium libero maiores, minima molestias numquam officia provident ratione temporibus, totam? Accusantium adipisci, amet aperiam architecto assumenda, deleniti distinctio dolor dolore dolorum, earum est eum expedita fugiat harum incidunt iste labore neque nesciunt nobis perferendis possimus quaerat quod repellat vel velit? Accusantium atque eius maxime natus reiciendis."
        }
    ]);

    useEffect(() => {
        const filteredResults = posts.filter((post) => ((post.body).toLowerCase()).includes(search.toLowerCase()) || ((post.title).toLowerCase()).includes(search.toLowerCase()));
        setSearchResults(filteredResults.reverse());
    }, [posts, search]);

    const handleDelete = (id) => {
        const postsList = posts.filter(post => post.id !== id);
        setPosts(postsList);
        navigate('/');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('----------------\n' + postTiltle + '\n' + postBody + '\n----------------');

        const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
        const datetime = format(new Date(), 'dd MMMM yyyy');
        const string = postTiltle.trim().toLowerCase();
        const newPost = {
            id,
            title: string.charAt(0).toUpperCase() + string.slice(1),
            datetime,
            body: postBody
        }
        const allPosts = [...posts, newPost];
        setPosts(allPosts);
        setPostTitle('');
        setPostBody('');
        navigate('/');
    }

    return (
        <Routes>
            <Route path="/" element={<Layout search={search} setSearch={setSearch} />}>
                <Route index element={<Home posts={searchResults} />} />
                <Route path="post">
                    <Route index element={<NewPost
                        handleSubmit={handleSubmit}
                        postTiltle={postTiltle}
                        setPostTitle={setPostTitle}
                        postBody={postBody}
                        setPostBody={setPostBody}
                    />} />
                    <Route path=":id" element={<PostPage posts={posts} handleDelete={handleDelete} />} />
                </Route>
                <Route path="about" element={<About />} />
                <Route path="*" element={<ErrorPage />} />
            </Route>
        </Routes>
    );
}

export default App;