import Footer from "../components/Footer/Footer";


export default function Layout({ children }) {
    return (
        <>
            <div className="hero-container">
                {children}
            </div>
            <Footer />
        </>
    );
}