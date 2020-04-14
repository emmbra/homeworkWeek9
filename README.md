# Good README Generator

## Description
Created a command-line application that dynamically generates a README.md based on user input. In your terminal, navigate to the folder containing the index.js and the application can be invoked using the following commands:

npm i (to install all dependencies)

node .\index.js (to launch the application)

The application will prompt the user for input about the following README fields:

* GitHub Username
* GitHub email
* Project Title
* Description
* Installation
* Usage
* License
* Tests
* Contributors
* Questions
    * GitHub User profile picture
    * GitHub Email


## Technologies

* node.js
* axios NPM
* inquirer NPM

## Challenges

In total this project took about 12 hours to build including all the time put into research and trial & error.

Difficulties included:

* Working with async & await for the first time. Until now, I've had to nest functions so they would fire off in the correct order, but using async & await I can now determine the order.
* Working with inquirer for the first time. I got stuck on input validation, but luckily there's plenty of documentation that helped me get past that roadblock.
* Modularization and setting requirements. This took a fair bit of trial and error to get right, but I see how modularizing everything can make error checking easier and so that modules can be used again in the future.
* Switch statements. A license badge is dynamically generated based on user choice so I used a switch statement to determine which badge will appear. Since this was the first time I've used a switch statement in production, it took some experimenting to get right.


## Screenshots

![GIF of Good README Generator](https://github.com/emmbra/homeworkWeek9/blob/master/assets/img/Homework%20Week%209%20-%20App%20Demo.gif)

## Credits

Thank you to Berkeley Coding Bootcamp, my instructor Emmanual Jucaban, and my TAs Musa Akbari and Sergio Di Martino for answering all my questions and helping me along the way.

I also leaned heavily on this [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) by [Adam Pritchard](https://github.com/adam-p).

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit).