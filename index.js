import express from 'express';
const app = express();
import cron from 'node-cron'
import fetch from 'node-fetch'

app.get('/', (req, res) => {
    console.log("hi knk");
})

cron.schedule('0 */6 * * *', async () => {
    await fetch('http://localhost:3000/api/updateKur');
    console.log("ok")
});

app.listen(5000, () => {
    console.log('listening on port 5000');
})