const product = require('../models/product');
const Product = require('../models/product');

exports.createProduct = (req, res) => {
    const prod = new Product(req.body);

    prod.save()
        .then((product) => {
            return res.status(201).json({ product })
        })
        .catch((error) => {
            return res.status(400).json({ error })
        });

}

exports.getOneProduct = (req, res) => {
    const id = req.params.id;
    Product.findOne({ _id: id }, (err, product) => {
        if (err) {
            return res.status(400).json({ err });
        } else {
            return res.status(200).json({ product });
        }
    })
};

exports.getAllProducts = (req, res) => {
    Product.find()
        .then((products) => { return res.status(200).json({ products }) })
        .catch((error) => { return res.status(200).json({ error }) });
};

exports.update = (req, res) => {
    const id = req.params.id;
    Product.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Product with id=${id}. Maybe Product was not found!`
                });
            } else res.send({ message: "Product was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Product with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Product.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Product with id=${id}. Maybe Producg was not found!`
                });
            } else {
                res.send({
                    message: "Product was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Product with id=" + id
            });
        });
};