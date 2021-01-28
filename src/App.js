import './App.css'
import Header from './components/Header/header'
import Layout from './components/Layout/layout'
import Footer from './components/Footer/footer'
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
