const express = require('express')
const cors = require('cors')
const stripe = require('stripe')(
  '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'
)
const { v4: uuidv4 } = require('uuid')

const app = express()
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
  res.send('welcome')
})
app.get('/checkout', async (req, res) => {
  let error
  let status
  try {
    const { product, token } = req.body
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    })
    const key = uuidv4()
    const charge = await stripe.charge.create(
      {
        amount: product.price * 100,
        currency: 'usd',
        customer: customer.id,
        receipt_email: token.email,
        description: 'All Product Description',
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line1: token.card.address_line1,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip,
          },
        },
      },
      { idempotencyKey: key }
    )
    status = 'success'
  } catch (error) {
    console.log(error)
    status = 'error'
  }
  res.json({ status })
})
app.listen(8080, () => console.log('your app is running on port number 8080'))
