import {Link} from "react-router-dom";

const ErrorPage = () => {
    return (
        <main className="Missing">
            <h2>Page not found</h2>
            <p style={{marginTop: '1rem'}}>You should be ashamed of yourself for looking at something that does not exist &#128545;</p>
            <p>
                <Link to={'/'}>Go back to the home page.</Link>
            </p>
        </main>
    );
};

export default ErrorPage;