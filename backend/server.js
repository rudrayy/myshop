import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import User from './models/userModels.js'
import Product from './models/productModel.js'

const app = express()
dotenv.config()
connectDB()

app.get('/', (req, res) => {
    res.send ( 'API is running...')
})

app.get('/api/products',(req,res) => {
    res.json(products)
})

app.get('/api/products/:id', (req,res) => {
 const product = products.find((p) => p._id === req.params.id)

 res.json(product)
})
const port = process.env.PORT || 5000
app.listen(port, console.log('server is running on port ${process.env.NODE_ENV} mode on port ${port}'))