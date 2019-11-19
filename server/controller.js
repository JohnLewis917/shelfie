module.exports = {
    getInventory(req, res) {
        const db = req.app.get('db')
        db.get_inventory()
        .then(result => {
            res.status(200).send(result)
        })
        .catch(err => {
            console.log(err)
        })
    },
    addInventory(req, res) {
        const db = req.app.get('db')
        const {product_name, price, img} = req.body
        console.log(req.body)
        db.add_inventory({
            product_name: product_name,
            price: price,
            img: img,
        })
        .then(result => {
            res.status(200).send(result)
        })
        .catch(err => {
            console.log(err)
        }) 
    },
    deleteProduct(req, res){
        const db = req.app.get('db')
        db.delete_product(req.params.id)
        .then(result => {
            res.status(200).send(result)
        })
    },
    updateProduct(req, res){
        const db = req.app.get('db')
        const {params, query} = req;
        db.update_product([params.id, query.desc])
        .then(result => {
            res.status(200).send(result)
        })
        
    },
}