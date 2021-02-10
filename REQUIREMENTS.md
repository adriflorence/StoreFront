## Required Technologies
Your application must make use of the following libraries:
- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- db-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine from npm for testing

# API Requirements
The company users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## Steps to Completion

### 1. Plan to Meet Requirements
- Determine the RESTful route for each endpoint listed.
**Example**: A SHOW route: 'blogs/:id' [GET] 

- Design the Postgres database tables based off the data shape requirements. Add to the requirements document the database tables and columns being sure to mark foreign keys.   
**Example**: You can format this however you like but these types of information should be provided
Table: Books (id:varchar, title:varchar, author:varchar, published_year:varchar, publisher_id:string[foreign key to publishers table], pages:number)


## API Endpoints
#### Products
- Index `'products/' [GET]`
- Show (args: product id) `'products/:id' [GET]`
- Create (args: Product)[token required] `'products/' [POST] (token)`
- [OPTIONAL] Top 5 most popular products 
- [OPTIONAL] Products by category (args: product category)

#### Users
- Index [token required] `'users/' [GET]`
- Show (args: id)[token required] `'users/:id' [GET]`
- Create (args: User)[token required] `'users/' [POST]`

#### Orders
- Current Order by user (args: user id)[token required] `'orders/current/:user_id' [GET]`
- [OPTIONAL] Completed Orders by user (args: user id)[token required] `'orders/completed/:user_id' [GET] (token)`

## Data Shapes

***

| Product              |
| -------------------- |
| id : serial PK       |
| name : varchar(50)   |
| price : int          |
| category_id : int FK |

***

| Category                    |
| --------------------------- |
| id : serial PK              |
| description : varchar(1000) |
| name : varchar(50)          |

***

| User                     |
| ------------------------ |
| id : serial PK           |
| firstName : varchar(50)  |
| lastName : varchar(50)   |
| password : varchar (100) |

***

| Order                    |
| ------------------------ |
| id : serial PK           |
| user_id : bigint         |
| status : varchar (100)   |

***

| Product_Order            |
| ------------------------ |
| order_id : bigint PK     |
| product_id : bigint PK   |
| quantity : int           |


### 2.  DB Creation and Migrations

Now that you have the structure of the databse outlined, it is time to create the database and migrations. Add the npm packages dotenv and db-migrate that we used in the course and setup your Postgres database.

You must also ensure that any sensitive information is hashed with bcrypt. If any passwords are found in plain text in your application it will not pass.

### 3. Models

Create the models for each database table. The methods in each model should map to the endpoints. Remember that these models should all have test suites and mocks.

### 4. Express Handlers

Set up the Express handlers to route incoming requests to the correct model method. Make sure that the endpoints you create match up with the enpoints. Endpoints must have tests and be CORS enabled. 

### 5. JWTs

Add JWT functionality as shown in the course. Make sure that JWTs are required for the routes.

### 6. QA and `README.md`

Before submitting, make sure that your project is complete with a `README.md`. Your `README.md` must include instructions for setting up and running your project including how you setup, run, and connect to your database. 

Before submitting your project, spin it up and test each endpoint. If each one responds with data that matches the data shapes from the `REQUIREMENTS.md`, it is ready for submission!