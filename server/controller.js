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
        console.log(req.body, req.params)
        const db = req.app.get('db')
        const {product_name, price, img} = req.body
        const {id} = req.params
        db.update_product([product_name, +price, img, +id])
        .then(result => {
            res.status(200).send(result)
        })
        
    },
    getProduct(req, res){
        const db = req.app.get('db')
        const {params, query} = req;
        db.get_product([params.id])
        .then(result => {
            res.status(200).send(result)
        })
        
    },
}