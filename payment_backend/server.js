require('dotenv').config();

const express = require('express')
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.use(express.json());

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

const storeItems = new Map([
    [1, { priceInCents: 1000, name: 'Learn React' }],
    [2, { priceInCents: 59987643, name: "React for Beginners" }],
])

app.listen(5100)

