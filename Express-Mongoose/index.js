const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Product = require('./Models/Product');
const methodOverride = require('method-override')

mongoose.connect('mongodb://localhost:27017/farmStand')
    .then(() =>{
        console.log("MONGO CONNECTED");
    })
    .catch(err => {
        console.log(err);
    })

const categories = ['fruit', 'vegetable', 'dairy'];


// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/products',async (req,res) => {
    const {category} = req.query;
    if(category){
        const products = await Product.find({category: category})
        res.render('products/index', { products, category })
    }
    else{
    const products = await Product.find({})
    res.render('products/index', { products, category: 'All' })
    }
})

app.get('/products', async (req, res) => {
    const products = await Product.find({})
    // console.log(products)
    res.render('products/index', { products })
})

app.get('/products/new',(req,res) =>{
    res.render('products/new', {categories});
})

app.post('/products', async (req,res) =>{
    const newProduct = new Product(req.body);
    await newProduct.save();
    console.log(newProduct);
    res.redirect(`/products/${newProduct._id}`)
})

app.get('/products/:id', async (req,res) => {
    const {id} = req.params;
    const foundProduct = await Product.findById(id);
    res.render('products/product', { foundProduct });
})

app.get('/products/:id/edit', async (req,res) => {
    const {id} = req.params;
    const foundProduct = await Product.findById(id);
    res.render('products/edit', { foundProduct,categories });
})

app.put('/products/:id', async (req,res) =>{
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {runValidators: true , new: true} );
    res.redirect(`/products/${product._id}`);
}) 

app.delete('/products/:id',async (req,res)=>{
    const {id} = req.params;
    const deleted = await Product.findByIdAndDelete(id);
    res.redirect('/products');
})

app.listen(3000, () => {
    console.log("Listening on Port 3000");
}) 

