import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Layout({ children }) {

    return (
        <> 
            <Header />

            <main className="font-text">
                { children }
            </main>

            <Footer />
        </>
    )
}
