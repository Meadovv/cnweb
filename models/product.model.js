const { query } = require('../database/database.js');
const User = require('./user.model')
class Product {
    static findById = async (productId) => {
        const sql = 'SELECT * FROM Product WHERE id = ?';
        const params = [productId];
        const [product] = await query(sql, params);
        return product;
    }

    static update = async ({ name, category, unit, price, description, number }, productId) => {
        
    }

    static create = async ({ userId, name, category, unit, price, description, number }) => {

        const user = await User.findById(userId);
        console.log(userId);
        if(user.role !== 'seller') {
            throw new Error('You can not add product!');
        } 

        const sql = 'INSERT INTO Product (name, category, unit, price, description, number) VALUES (?, ?, ?, ?, ?, ?)';
        const params = [name, category, unit, price, description, number];

        const newProduct = await query(sql, params);
        return newProduct;
    }
}

module.exports = Product;