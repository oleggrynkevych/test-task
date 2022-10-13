const express = require("express");
const mangoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const { default: mongoose } = require("mongoose");

const appPort = 4004;
const mongoUrl = "mongodb+srv://theoleg:Parasolia25@cluster0.yqrot75.mongodb.net/?retryWrites=true&w=majority";

const app = express();
app.use(bodyParser.json());
app.use(cors());

const corsOptions = {
	origin: "http://localhost:3001",
	optionsSuccessStatus: 200,
};

const ProductsSchema = new mongoose.Schema(
    {
        name: String,
        imgUrl: String,
        count: String,
        weight: String,
        comment: String
    }
)

mongoose.model("Products", ProductsSchema);
const Products = mongoose.model("Products");

const getAll = (req, res) => {
    Products.find()
        .exec()
        .then((products) => res.json(products))
		.catch((err) => res.status(500).json(err))
}

const create = (req, res) => {
    console.log('Create product', req.body)
    Products.create(req.body)
        .then(createProducts => res.json(createProducts))
        .catch((err) => res.status(500).json(err))
}

const update = (req, res) => {
    Products.updateOne({ _id: req.params.id }, { $set: req.body })
    .exec()
    .then((products) => res.json(products))
    .catch((err) => res.status(500).json(err))
}

const remove = (req, res) => {
    Products.deleteOne({ _id: req.params.id })
    .exec()
    .then((products) => res.json({success: true}))
    .catch((err) => res.status(500).json(err))
}

app.get('/products', cors(corsOptions), getAll);
app.post('/products', cors(corsOptions), create);
app.put('/products/:id', cors(corsOptions), update);
app.delete('/products/:id', cors(corsOptions), remove);

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(
        appPort,
        () => console.log(`Listening on port ${ appPort } ...`)
    ))
    .catch((err) => console.error(`Error connecting to mongo: ${mongoUrl}`, err));