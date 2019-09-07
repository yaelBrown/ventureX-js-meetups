How to create a REST API with NodeJS and ExpressJS

Ensure you have node installed on your system.  At terminal type:

node -v

You should see your node version.  If not, install node first.  Then ...

Create a project folder
    my-simple-api
Open it in VS Code (or your favorite editor)
Open a terminal and navigate to your project folder (a VS Code terminal will already be in the correct folder)

To create an NPM project, enter the following in the terminal:

npm init
    accept all defaults: npm init -y

Follow the prompts to create your NPM project.  At the end, you should see a package.json file.  This contains your third-party dependency references.

To start a Git repository:

git init

nano .git/config

Enter user name and email:

[user]
name = Radu Istrate
email = radu@istrate.com

ctrl+O to save
ctrl+X to exit

In VS Code you should see your files light up as green (new tracked files).

Now, install Express:

npm install --save express

This installs Express and all downstream dependencies (subdependencies) into the node_modules folder.  This is where npm keeps third-party dependencies on your machine.  But, we don't want to commit this to source control (Git), since they are not part of your project source code.  They should be installed independently by each developer, or automated build process.

So, we add a .gitignore file:

nano .gitignore

node_modules

ctrl+O to save
ctrl+X to exit

node_modules should now appear gray (untracked by Git).

Let's do a commit to keep track of our progress.  Click the Git source control icon in VS Code (third down), enter a commit message (e.g. "Set up project with npm and Express"), and click the checkmark to commit.  This only does a local commit.  You may optionally push to a remote repo.










Let's create a basic REST API!

Create an index.js file to act as the entry point for our application.  It's the file that node (or npm via node) will execute to start our server.

Go to the ExpressJS website and copy their "Hello World" example into your index.js file.  Then, start the server:

node index.js

You should see a message that the server is listening.

To interact with your API, you can view your GET endpoints in any web browser.  But, you can't interact with POST, PUT, and DELETE endpoints.  You need an HTTP client like Insomnia or Postman.

Send a GET request to the / endpoint.  You should see "Hello World".

ctrl+C at the terminal to stop the server

Let's commit our code to save our progress.

Practice: Add a new GET endpoint that returns a different message.

Commit.

Let's add a variable in global scope and use it to build our response.

Let's read a route parameter and use it to build our response.

Let's read a query parameter and use it to build our response.

Commit.

Practice: Create an array of car objects in global scope.  Each object should have properties for brand, model, color, and condition.  Make a /car endpoint that lets a user search for cars.  Use route and/or query parameters to allow the user to see listing for a particular car.

For example, /car?brand=mazda would return a listing for the mazda.

Commit.
