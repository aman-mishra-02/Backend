const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Product = require('./Models/Product');

mongoose.connect('mongodb://localhost:27017/farmStand')
    .then(() =>{
        console.log("MONGO CONNECTED");
    })
    .catch(err => {
        console.log(err);
    })


app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/products', async (req, res) => {
    const products = await Product.find({})
    // console.log(products)
    res.render('products/index', { products })
})

app.get('/products/:id', async (req,res) => {
    const {id} = req.params;
    const foundProduct = await Product.findById(id);
    res.render('products/product', { foundProduct });
})

app.listen(3000, () => {
    console.log("Listening on Port 3000");
}) 

