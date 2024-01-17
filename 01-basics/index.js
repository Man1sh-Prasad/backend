require('dotenv').config()
const express = require('express')

const app = express()

const port = 4000

const githubData = {
    "name": "manishprasad",
    "id": "Man1sh-Prasad",
    "avatarURL": "https://avatars.github.com/u/9845qskd"
}

app.get('/', (req, res)   => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('manish.twt')
})

app.get('/login', (req, res) => {
    res.send('<h1> please login </h1>')
})

app.get('/github', (req, res) =>{
    res.json(githubData);
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})