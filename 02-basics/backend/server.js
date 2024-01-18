import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("hello there, server is ready");
});

// get a list of 5 jokes
app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
          "id": 1,
          "question": "What do you call a fish wearing a bowtie?",
          "answer": "Sofishticated."
        },
        {
          "id": 2,
          "question": "How do you make a tissue dance?",
          "answer": "You put a little boogie in it."
        },
        {
          "id": 3,
          "question": "Why did the math book look so sad?",
          "answer": "Because of all its problems."
        },
        {
          "id": 4,
          "question": "What do you get when you cross a snowman with a vampire?",
          "answer": "Frostbite."
        },
        {
          "id": 5,
          "question": "What do you call a bear with no teeth?",
          "answer": "A gummy bear."
        }
    ];
    res.send(jokes);    
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port} `);
});