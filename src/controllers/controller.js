const { Pool } = require('pg');
const { parse } = require('pg-connection-string');

const connectionString =  'postgres://hwohblrhffqffc:499d99fac14514e4e31355e40b5f209d6c8d58372d3cd816b44f4d6dfef80282@ec2-3-233-43-103.compute-1.amazonaws.com:5432/dcu5e78f3mavdk';

const config = parse(connectionString);

config.ssl = {
    rejectUnauthorized: false
}

const pool = new Pool(config);

const welcome = async (req, res) =>{
    res.status(200).json({
        message: 'Bienvenido'
    })
}

const getGames = async (req, res) => {
    const response = await pool.query('Select * from games;');
    res.status(200).json(response.rows);
};

const getPersonajes = async (req, res) => {
    const response = await pool.query('SELECT * FROM brawl_per;');
    res.status(200).json(response.rows);
}

module.exports = {
    welcome,
    getGames,
    getPersonajes
};