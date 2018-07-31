const app = require('express').Router()
const stripe = require("stripe")("sk_test_TwTTlid3GeOG6YPydOjARw4I");
app.use(require('body-parser').text())

    app.post("/", async (req, res) => {
        console.log('price: ', req.body);
        try {
        let {status} = await stripe.charges.create({
            amount: 2000,
            currency: "usd",
            description: "An example charge",
            source: req.body
        });
        res.json({status});
        } catch (err) {
        res.status(500).end();
        }
    });

    module.exports = app;

