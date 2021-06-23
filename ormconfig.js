module.exports = {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": process.env.DATABASE_USER,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,

    "migrations": ["./src/database/migrations/**.ts"],
    "entities": ["./src/models/**.ts"],
    "cli": {
        "migrationsDir": "./src/database/migrations",
        "entitiesDir": "./src/models",
    }
}