import Header from "./Header.jsx";
import Nav from "./Nav.jsx";
import {Outlet} from "react-router-dom";
import Footer from "./Footer.jsx";

const Layout = ({search, setSearch}) => {
    return (
        <div className="App">
            <Header title={"My first React.js blog"} />
            <Nav search={search} setSearch={setSearch} />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;