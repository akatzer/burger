Eat Da' Burger Application

Overview: The Eat Da’ Burger application utilizes MySQL, Node, Express, Handlebars, and a homemade ORM. The user can order a burger by typing in the name of said burger and hitting the ”Order Da’ Burger” button. That burger is then inserted into our MySQL database and displayed in the Burgers Ordered section of the webpage. Each burger in the Burgers Ordered section will have a button next to it allowing the user to “Eat Da’ Burger.” This button then changes the “devoured” status of the burger to true and moves it from our Burgers Ordered section to the Burgers Devoured Section. 

Local Setup:
- Clone the GitHub repository (https://github.com/akatzer/burger).
- Once you have your code editor of choice opened up navigate to this new repo and open it in your terminal.
- Use the schema.sql and seeds.sql files in the db folder to setup your MySQL server.
- Be sure to navigate to the connection.js file in the config folder and update the connection information so that the application will connect to your MySQL server.
- Run a npm install to ensure you have all the necessary packages installed to run it locally.
- Type "node server.js" into the console to start up the server.
- Once the server is up and running navigate to http://localhost:8080/ to access the application.

Heroku Link: (If you would rather not have to set it up locally): https://damp-escarpment-81110.herokuapp.com/ 
