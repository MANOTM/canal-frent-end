import Footer from "../components/Footer/Footer";


export default function Layout({ children }) {
    return (
        <div>
            {children}
            <Footer />
        </div>
    );
}