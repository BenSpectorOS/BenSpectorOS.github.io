# greenlight-code-quiz
Test specs for Greenlight code quizzes

## CodeQuiz Structure
```
├── checkpoints/
│   └── javascript/
│     └── checkpoint1/
│       ├── index.html
│       ├── index.js
│       ├── index.spec.js
│       └── README.md
│
├── shuffle/
│ 
├── variable/
│
└── exit/
```
**Note: mulit-word directory names should be snake-cased.**

There is a CodeQuiz repo for each Operation Spark Program. In this repo there are
directories for each of the codeQuizzes associated with the respective program. Each codeQuiz needs
to have 4 files:
-	index.js
-	index.html
-	index.spec.js
-	README.md

You can copy these files from the **template-quiz** directory in the root to create a new codeQuiz.
```
  $ cp -r ./template-quiz/ [name_of_new_codeQuiz]
```

###	index.js
_Boilerplate code:_
Any initial code you want the student to use. It could be as simple as:
```javascript
// Your code here

```
or you may give them a little more help:

```javascript
const doSomething = () => {
  // Your Code Here

};
```

###	index.spec.js
_Mocha test spec_:
These are the specs the student's code will be tested against. Make sure the solutions
in `index.solution.js` (in the **code-quiz-[program]-solutions** repo) pass all these tests.

###	README.md
_Instructions_:
Here are the instructions to pass the codeQuiz. Instructions should be written in [Github-flavored Markdown](https://guides.github.com/features/mastering-markdown/).


## Testing in [Greenlight](https://greenlight.operationspark.org/)
You'll need to run this repo through a static server with CORS support. I recommend [http-server](https://www.npmjs.com/package/http-server).

```
  $ npm install http-server -g
  $ cd [path/to/local/repo]
  $ http-server --cors

  Starting up http-server, serving ./
  Available on:
    http://127.0.0.1:8080
```
Once you have the server running, you'll need to tunnel it to the internet. 
[ngrok](https://ngrok.com/download) is the easiest way to go. In another terminal
window: 
```
$ ngrok http 8080


ngrok by @inconshreveable                                                                                              (Ctrl+C to quit)

Session Status                online
Version                       2.1.18
Region                        United States (us)
Web Interface                 http://127.0.0.1:4041
Forwarding                    http://3d37cf3c.ngrok.io -> 127.0.0.1:8080
Forwarding                    https://3d37cf3c.ngrok.io -> 127.0.0.1:8080

Connections                   ttl     opn     rt1     rt5     p50     p90
                              46      0       0.00    0.00    0.10    36.81
```
You should be able to navigate your repo via the forwarding URL ngrok provides. Make sure you use the `https` version,
i.e. https://3d37cf3c.ngrok.io

Once that is all working, head over to Greenlight and sign in as an Admin. Nagivate to the Requirements tool panel
and click any **Code**. If a Code does not exists, add one with the **New** button.
In the Code popup, click **Run**. When the CodeQuiz starts, switch **Dev Mode** to On and insert your URL.
For example, if you're working on **Variables** for Bootcamp, your URL would look like:
```
https://2b9c01d2.ngrok.io/bootcamp/variables/
``` 
Click **Preview** and you CodeQuiz should load right up. Make any changes in your editor, save and hit **Preview** again
to reload your CodeQuiz.

## Edit Mode
#### Coming Soon  
