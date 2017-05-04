Node Quiz                                                                                                                Name:_____________

1)	What is node.js and why should we use it?

      -node.js is an asynchronous and non-blocking i/o, we use it in applications with alot
      of curcerency.


2)	Does NPM come bundled with node.js when you install it?

      -no.


3)	What is the function used to send a file to a browser from an express app?

      -app.use(express.static(''));


4)	What does the following code do?  app.use(bodyParser.json());

    -parses the code into a json formate then putting the results into the body.
    (I used www.quora.com as a refference)


5)	What does the following code do? app.use(express.static('public'));

    -enables the user to access static files form the server.


6)	Please create a basic outline for a CRUD application for the following:

I am your client, and I need an API for a stock market app I am building. Happily, you got the job!!

I need the following data:

-	stock name
-	stock symbol
-	stock price
-	time.date of price
-	market instrument is traded on

I will need the the full complement of CRUD for my API. Read should include the ability to retrieve all the stocks, or one stock.

Create an outline or plan for the data, and the end points. No need to write the code, but I do want to see the plan that you would implement the API from. Use the following as a model:

{
 "stock name": "",
 "stock id": //,
 "stock symbol": //random symbol,
 "stock price": //number,
 "time.date of price": "",
 "market instrument is traded on": ""
}

{
 " GET /stock": {
 "desc": "return all stock in inventory",
 "response": "200 application/json",
 "data": [{}, {}, {}]
 },

 " GET /stock/:id": {
 "desc": "returns one item in inventory by its :id",
 "response": "200 appliation/json",
 "data": {}
 },

 " POST /stock": {
 "desc": "will create a new stock item and post it in the inventory list",
 "response": "201 application/json",
 "data": {}
 },

 " PUT /stock/:id": {
 "desc": "updates a current stock item by its :id and returns that stock item by its :id",
 "response": "200 application/json",
 "data": {}
 },

 " DELETE /lions/:id": {
 "desc": "delets and returns the new stock item according to its :id",
 "response": "200 appli cati on/j son",
 "data": {}
 }
}



7)	What is the “event Loop”?

    -it allows the javascript to preform other tasks while it waits for elements to load.


8)	What is a callback?

    -a callback is a function that allows you to call another function within that function.


9)	Please explain synchronous vs asynchronous behavior.

  - synchronous behavior is when only one task can be preformed from start to finish before anything else can be done.
  - asynchronous behavior is when tasks can keep preforming while other tasks are waiting to be loaded or still trying to
    finish.


10)	What is package.json?

    - it holds the metadata for a project and containes the dependencies.

11)	Which module is used for file based operations?

    - fs (file system)

12)	How will you open a file using node?

    >node filename.

13)	What is the purpose of __dirname variable?

    -it holds the script being executed.

14)	Can you access the DOM in node?

    -yes.

15)	Explain briefly how node.js solves the problem of blocking i/o.

    -node.js allows you to preform actions before other actions are finished.


16)	What is the most common used framework used in node.js? Hint:  It’s used to write web servers.

    -node.js


17)	Please write a basic route using the get verb that returns all the items from an array in JSON format. Hint: We did this in class…

    var blah = [];

    app.get('/', function(req, res) {
    res.json(blah);
    });

18)	What does CRUD stand for?

    -Create, Read, Update, Delete


19)	Who developed node.js?

    -a really smart guy who is not me... or Ryan Dahl


20)	How do we make code in a file (module) in our project accessible to other modules in our project?
    Please describe what you need to do in the module with the code, and in the module that wishes to use that code.

      -you have to export the code useing module.export to the file you want to use it. then you have to import that code
       using the require method var whatever = require(the file you want to use).
