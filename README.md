# Storefront Backend Project

A JavaScript RESTful API to serve data to an imaginary store's frontend.
Based a list of requirements the tasks were to:
- architect the database, its tables and columns to fulfill the data requirements
- have the application thoroughly tested
- keep user information secure
- provide user authentication tokens that are ready to integrate with the frontend

## Getting Started

#### Package installation instructions

To get started, clone this repo and run `yarn` in your terminal at the project root:

`$ yarn`

Yarn will install the following dependencies (these can be installed independently if needed): 
- express: 
`npm install --save express`
`npm install @types/express`
- typescript: 
`npm install typescript`
- cors: 
`npm install --save cors`
- db-migrate: 
`npm install -g db-migrate`
- bcrypt: 
`npm install bcrypt`
`npm install @types/bcrypt`
- request: 
`npm install --save request`
- jasmine: 
`npm install jasmine @types/jasmine --save-dev`


#### Database setup

1. Run the following command to connect to the default postgres database:  
`psql -U postgres`
2. From the psql console create a new user:   
`CREATE USER test_user WITH PASSWORD 'test_password';`
3. Then create the database:  
`CREATE DATABASE api;`
4. Grant all privileges to test_user:  
`\c api`
`GRANT ALL PRIVILEGES ON DATABASE api TO test_user;`


#### Migration

> Usage: db-migrate [up|down|reset|create|db]

Run the following command from the root directory:
`db-migrate up -m ./database/migrations --config ./database/config/dev.json `
