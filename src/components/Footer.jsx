const Footer = () => {

    const today = new Date();

    return (
        <footer className="Footer">
            <p>By <a href="https://portfolio-psi-azure-25.vercel.app" target="_blank">Da Silva Pinto Kevin</a>. The source code is licensed &copy; {today.getFullYear()}.</p>
        </footer>
    );
};

export default Footer;