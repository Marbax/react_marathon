class BackendApi {
    constructor() {
        this._oponentDeckUrl = 'https://reactmarathon-api.netlify.app/api/create-player'
        this._makeTurnUrl = 'https://reactmarathon-api.netlify.app/api/players-turn'
    }

    getOponentHandAsync = async () => {
        const resp = await fetch(this._oponentDeckUrl)
        const data = await resp.json()
        return data
    }

    // send  {position, card, board} in params and recieves new board
    postMakeTurn = async (params) => {
        const response = await fetch(this._makeTurnUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // {position, card, board} in params
            body: JSON.stringify(params),
        })

        // new board
        return (await response.json()).data
    }
}

const BackendApiClass = new BackendApi()

export default BackendApiClass
