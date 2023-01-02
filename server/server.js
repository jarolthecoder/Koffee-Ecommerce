const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');

const app = express();
app.use(express.static('public'));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors({ origin: true, credentials: true }));

const stripe = require('stripe')('sk_test_51MLDvqD85DBZk3caDAEyWBkTi3Zmn5lk0ZiZPJ0bjvnZFSntR7tPg4NdNodpMY49RERGeUaRzhXqCJ9grgpQ5OWn00TJQpgoVY');

app.post('/checkout', async (req, res, next) => {
	try {
				const session = await stripe.checkout.sessions.create({
					mode: 'payment',
					line_items: req.body.items.map((item) => ({
						price_data: {
							currency: 'eur',
							product_data: {
								name: item.name,
								images: [item.image.regular]
							},
							unit_amount: item.price * 100,
						},
						quantity: 1,
					})),
						success_url: 'http://localhost:4242/success.html',
						cancel_url: 'http://localhost:4242/cancel.html',
			});
			res.status(200).json(session);
	} catch (error) {
			next(error);
	}
})

app.listen(4242, () => console.log('app is running on 4242'));