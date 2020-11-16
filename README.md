# challenge-solution

## Nodejs version ##

The project was developed and tested in node **v14.12.0**. You need
to have it installed if you want to run the app or tests.

## Rules ##

As suggested in the challenge, there are three rules set available: base, custom 1 and custom 2.
By default, if you use the app without specify anything, the base rules will be used. When you
call the REST API, you are able to say what rules set you want to use.

## Project structure ##

There is one source folder "src", and all sources files are inside it. All tests
are in the same folder of the file being tested.

Inside the "src" folder, there are three folders and the root:

**root**

Contains entrypoint and app files, that are the files responsible for start
the express server (There are two files to facilitate the creating of integration test). 

**validation**

Contains source code responsible for validate http input body. There is one
method ensure, and some validation rules.

**rules**

Contains the code responsible for implement core business rules 
from the challenge, mainly base rules, custom 1 rules and custom 2 rules.

**util**

Contains some code responsible for creating util methods for dealing with arrays.
These methods are used in different points of the source code.

#### How to run app

*npm start*

Run the application. (Alternative to *node src/entrypoint.mjs*)

*npm test* 

Run all tests

All tasks depend of run **npm install** before the execution. This task
is responsible to install locally the dependencies of the project. 

### Endpoints

#### Base rules
```
POST http://localhost:3000/calculate
{
	"a": true,
	"b": true,
	"c": true,
	"d": 3.33,
	"e": 4,
	"f": 9
}
```

#### Custom rules
```
POST http://localhost:3000/calculate?rule=custom1
{
	"a": true,
	"b": true,
	"c": true,
	"d": 3.33,
	"e": 4,
	"f": 9
}
```

#### Available custom rules

There are just two options to parameter rule: **custom1** and **custom2**. Any other value used will cause the use
of base rules.

## Architectural choices ##

#### Language and frameworks

I have chosen to use nodejs + express + es6 in my solution.  The main point about choosing express + nodejs is that
is they have been used for professional applications in a lot of use cases - for example paypal.  They
are real candidates to real applications. Beside that, I have familiarity with es6, because I have been using it in my last projects. 
Last but not least, nodejs + express are a very productive and tiny couple, even more to fast prototype. I haven't 
"formal" experience with nodejs + express, but I have already studied these frameworks, and I have already 
done some experiments with them. These are all my reasons.

### JS file extensions

I needed to use the extension ".mjs" for source and test files. This option is unnatural, but I have had some
problems to configure jasmine to use ".js" extension with es6 modules. As this is not the critical point 
of the challenge, I preferred avoid dealing with this problem. 

### Rest

I have chosen REST + HTTP as protocol to interact with my app. This choice is related to the recommendation
in the challenge. 

### Testing

I read a lot about tests from different sources and books. There isn't a convergence of opinions in this subject.
There are two big schools when we are talking about tests, mockist (or London) and classicist (or Detroit).
The first obviously argue that we need to use mocks to unit testing, and create unit tests for almost everything.
The second argue that you shouldn't mock anything and you just should create stubs for objects that is
outside the limits of your application. Inside your application you should, in most of the cases, use real
classes and objects. 

I see value in the arguments of the two sides, and I believe that we can mix at some degree the two schools.
In this challenge I prefered to use more from the mockist school, than the other. I believe that this approach
was the best for my scenario and I was able to exercise all rules in a very low grain. In real life I usually
prefer use more classical tests.

I didn't measure the coverage of tests, because to do this I would need to install another dependency in the 
project. However, I believe that the code is with a high coverage, because I tried to do tests to almost
everything. 

I also created an integration test that execute all layers of application, starting with the http protocol.
However, I didn't use this integration tests to validate the correctness of the output, because this
was validated in unit tests. My strategy was validate more general aspects like http output format, 
http status, basic validation of input and some edge cases.

I prefer to put tests **in the same directory** of source folder. This is a style of project organization much
seen on Internet. I have chosen because of simplicity.

To finish, I chose jasmine as a test framework, because it is very simple too. 
 
### External dependencies

I chose not to use external dependencies more than necessary. Although they are natural choices in cases
like that, I preferred not to use lodash and express-validator. I have made my own homemade request validator,
 as way of create more code and tests. I love lodash, but I chose to use pure es6 in this case.
 
The main dependencies that I use are express and jasmine (for tests).

 
 
