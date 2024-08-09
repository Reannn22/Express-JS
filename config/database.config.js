const mysql =  require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',      // Ganti dengan host MySQL Anda
    user: 'root',           // Ganti dengan username MySQL Anda
    password: '',       // Ganti dengan password MySQL Anda
    database: 'sample_database', // Ganti dengan nama database Anda
});

// Menghubung ke MySQL
connection.connect((err) => {
    if (err) {
        console.error('Connection failed while connect to database.', err.stack);
        return;
    }
    console.log('Connected to database.')
});

module.exports = {
    connection
};