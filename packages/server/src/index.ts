import express from 'express';

const app = express();

app.get('/', (_, res) => {
    res.json({ message: 'Planning Pocker!!!' })
});

app.listen(3000);