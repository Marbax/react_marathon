import './App.css'
import Header from './components/Header'
import Layout from './components/Layout'
import Footer from './components/Footer'
import LayoutBg from './assets/bgSleepingPika.jpg'

function App() {
    return (
        <>
            <Header />
            <Layout urlBg={LayoutBg} />
            <Layout colorBg='purple' />
            <Layout urlBg={LayoutBg} />
            <Footer />
        </>
    )
}

export default App
