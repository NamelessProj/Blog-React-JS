import {Link} from "react-router-dom";

const Nav = ({search, setSearch}) => {
    return (
        <nav className="Nav">
            <form
                className="searchForm"
                onSubmit={(e) => e.preventDefault()}
            >
                <label htmlFor="search">Search an article</label>
                <input
                    type="text"
                    id="search"
                    placeholder="Search an article"
                    value={search}
                    onChange={(e) => {setSearch(e.target.value)}}
                />
            </form>
            <ul>
                <li>
                    <Link to={'/'}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to={'post'}>
                        New article
                    </Link>
                </li>
                <li>
                    <Link to={'about'}>
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;