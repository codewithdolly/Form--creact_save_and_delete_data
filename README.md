# Deployment

1. git clone [https://github.com/hcmay2021-Dolly/Form--assignment-2--EyeROV]
2. node app.js
3. See the Input form at localhost:4000/
4. See the Data list at localhost:4000/data

# Technology Used: 
1. BootStrap 4.3
2. NodeJS
3. Packages (Express, body-parser, mongoose, ejs)


# Dev Steps
1. Express, body-parser, ejs, mongoose is installed
2. Fresh Mongo Altlas account created 
3. Firewall implemented for IP Address accesibility(Currently Public)

# Frontend:
1. Designed form with given fields
2. Designed table to present the dataset

# Backend:
1. Created simple express and simple routes to test express
2. Linked EJS with app.js
3. Connected MongoDB
4. Took input from FORM from POST request
5. Parsed the data using body parser and saved in mogo DM
6. Linked the Data page on /data and shown all the data stored
7. Everytime the page is loaded or refreshed, a query is made to Mongo DB and data is rendered in  EJS Data Form

# Improvement: 
Delete feature to be develop. It's non functional for now. 