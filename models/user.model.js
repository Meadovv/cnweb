const { query } = require('../database/database.js');

class User {
    static createAccount = async ({ account_name, password, role, cccd, email }) => {
        const sql = `INSERT INTO Account (account_name, password, role, cccd, email, created_at) VALUES (?, ?, ?, ?, ?, ?)`;
        const params = [account_name, password, role, cccd, email, Date.now()];
        const result = await query(sql, params);
        return result;
    }

    static createProfile = async ({ name, account_id, phone_number, dob }) => {
        const sql = `INSERT INTO Profile (name, account_id, phone_number, date_of_birth) VALUES (?, ?, ?, ?)`;
        const params = [name, account_id, phone_number, dob];
        const result = await query(sql, params);
        return result;
    }

    static createSellerProfile = async ({ shop_name, description, account_id }) => {
        const sql = `INSERT INTO Seller (shop_name, description, account_id) VALUES (?, ?, ?)`;
        const params = [shop_name, description, account_id];
        const result = await query(sql, params);
        return result;
    }

    static async findByUsername(username) {
        const sql = `SELECT * FROM Account WHERE account_name = ?`;
        const params = [username];
        const result = await query(sql, params);
        return result;
    }

    static findById = async () => {

    }

}

module.exports = User;