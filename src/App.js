import Header from './components/Header'
import Layout from './components/Layout'
import Footer from './components/Footer'
import PokemonCard from './components/PokemonCard'

import style from './App.module.css'
import LayoutBg from './assets/bgSleepingPika.jpg'
import CardBg from './assets/card-back-side.jpg'

import PokemonsSourceFile from './assets/PokemonCards.json'

function App() {
    const POKEMONS = PokemonsSourceFile
    return (
        <>
            <Header title='Pokemon card game.' descr='Simple triple triad card game.' />
            <Layout id='rules' title='Game rules.' urlBg={LayoutBg}>
                <p>
                    In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
                    <br />
                    Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.
                </p>
                <p>
                    To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture
                    cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher
                    than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed
                    into the player's color instead.{' '}
                </p>
            </Layout>
            <Layout id='cards' title='Cards to choose.' colorBg='orange'>
                <div className={style.flex}>
                    {POKEMONS.map((item) => (
                        <PokemonCard key={`${item.id}`} {...item} bgImg={CardBg} />
                    ))}
                </div>
            </Layout>
            <Layout id='about' title='Credentials.' urlBg={LayoutBg}></Layout>
            <Footer />
        </>
    )
}

export default App
