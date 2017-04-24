# Rock Paper Scissors (Stein, Papier, Schere)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

This project uses **Angular 4.0.0**

### See the game in action
Click the link to see it on Github-Pages: [**https://dthuesen.github.io/rock-paper-scissors/home**](https://dthuesen.github.io/rock-paper-scissors/home)


### Downloading and installing the app
Change into the main directory of the app folder and **run `npm i`** for installing the required node modules and dependencies.

For working on this app it is required to have the **current version of Angular-CLI (https://cli.angular.io/) installed globally!**


### Starting the server for running the app
Run **`ng serve`** in the main directory of the app folder. The Game then will be served on **`http://localhost:4200`** on an NG Live Development Server.

### Setting the base tag for a sub-folder on a webserver at build time:

For running a build version on a server Angular is prepared for the main directory on the server. Running it on a subdirectory requires to set the base tag to the desired sub-folder in the index file by running the build command with the according option like so:

Usage: **`ng build --base-href <base>`**
- or `ng build --base-href /myUrl/` 
- or `ng build --bh /myUrl/` 
- or `ng build --prod --bh /myUrl/`

Example: **`ng build --base-href home`**

Replaces `<base href="/">` with <`base href="/home">` in index.html
 
### Running the tests:

The specs and suits are written for use of Jasmine (used in this app: v~2.5.2) and Karma (used in this app: v~1.6.0). It is good to know,that there are some issues with interferences between test so that not all suits can be enabled during a test run. It is a good idea to have these specific test disabled.

To start the test run type: **`ng test`**

**Some test suites or specs are disabled because of interferences between some tests.**

## Styling

The game app has a mor or less individual styling on top of Angular Material 2. But if you want you can also download an un-styled version from branch "without_styling". But I think it is not the 'story' because routing was implemented with styling. So the entrance page (home) will maybe not be available. But on that page you miss only a headline and a button. ;)

Please keep in mind the app styling is only for showing how this game could look more like a game but is has no responsiveness.


## Routes

A router is implemented to navigate from the entrance page to the game. It is only a simple routerLink navigation.

## Updates:

- Switched tos SASS
- Cleaning-up styles and styling

## Deploy to Github-Pages

I installed a tool named **ng-deploy-gh-pages** since the Angular-CLI removed deploy to github-pages from the cli. 

How to run it:
  - (if not already installed: `npm install ng-deploy-gh-pages --save-dev`)
  - Add script in package.json `"deploy": "./node_modules/.bin/deploy"`
  - `npm run deploy`
  
Further information: [ng-deploy-gh-pages on Github](https://github.com/Smiranin/ng-deploy-gh-pages)



---

# Some insights about ideas for implementation

## Ideas for implementing the logic

**1. idea: game as array**

The idea is, that all game pieces are following in a line. the first will be beaten by the second, the second by the third, the third by the first. In other words like this:

    ROCK by PAPER by SCISSORS by ROCK
    
or
    
    0 by 1 by 2 by 3 by 0   =   [0, 1, 2, 3, 0]
    
With this the implementation of deciding the winner it might be do it with two if's:

    order = [0, 1, 2, 0]
    1. if (order[player] === order[computer])`        => TIE!
    2. if (order[player] === order[computer + 1])     => PLAYER WON!
    3. else                                           => COMPUTER WON!
    
If the list gets longer:  `MATCH by ROCK by PAPER by SCISSORS by FOUNTAIN by MATCH` is will work as well.
But then there is a second lane to be considered too: `MATCH by SCISSORS by FOUNTAIN` and in that case it would lead to a third if statement:

    0 = MATCH
    1 = ROCK
    2 = PAPER
    3 = SCISSORS
    4 = FOUNTAIN

    order = [0, 1, 2, 3, 4, 0]
    1. if (order[player] === order[computer])`        => TIE!
    2. if (order[player] === order[computer + 1])     => PLAYER WON!
    2. if (order[player] === order[computer + 2])     => PLAYER WON! 
          /**  because the player also wins with the difference of 2 (before addition of 1)  **/
    3. else                                           => COMPUTER WON!
    
But here is a little problem, if the computer choses MATCH and the player chooses PAPER, normally the computer would win. But not with this three if's. There's another if necessary and then the code will get messy and unclear. The solution could be to find a way calculate the worth of a game and put it in a switch statement - see second idea.

This is how the implementation of the logic to find the winner could look like:
```
order = [0, 1, 2, 3, 4, 0];

  constructor() {
    this.choose(0, 2);
  }

  choose(player: number, computer: number) {
    if (this.order[player] === this.order[computer]) {
      return 'The game is tied.';
    }
    if (this.order[player] === this.order[computer + 1]) {
      playerScore++;
      return 'Player won!';
    } 
    if (this.order[player] === this.order[computer + 2]) {
      playerScore++;
      return 'Player won!';
    } else {
      computerScore++;
      return 'Computer won!'
    }
  };

```
**2. idea: the value of a game**

Every piece has a number. Adding two number makes the value of the game. Every value stands as a code for a winner according to that pair. To implement it a switch statement will be the way:

Example 1: for three game pieces:
   
    Rock      = 1
    Paper     = 2
    Scissors  = 3

    Game pair A -> 1 (Rock) + 2 (Paper)     = 3 (winner Paper) 
    Game pair B -> 2 (Paper) + 3 (Scissors) = 5 (winner Scissors)
    Game pair C -> 3 (Scissors) + 1 (Rock)  = 4 (winner Rock)
    
    This makes 3 cases plus a tie game.

Example 2: would the list of pieces be added by two new pieces, it the pairing would be this:

    Rock     = 1
    Paper    = 2
    Scissors = 3
    Fountain = 5    // higher numbers taken for
    Match    = 9    // not having doubles in addition

    Game pair A -> 1 (Rock) + 2 (Paper)         = 3 (winner Paper) 
    Game pair B -> 2 (Paper) + 3 (Scissors)     = 5 (winner Scissors)
    Game pair C -> 3 (Scissors) + 1 (Rock)      = 4 (winner Rock)
    
    Game pair D -> 3 (Scissors) + 5 (Fountain)  = 8  (winner Fountain)
    Game pair E -> 3 (Scissors) + 9 (Match)     = 12 (winner Scissors)
    Game pair F -> 2 (Paper) + 5 (Fountain)     = 7  (winner Paper)
    Game pair G -> 2 (Paper) + 9 (Match)        = 11 (winner Match)
    Game pair H -> 1 (Rock) + 5 (Fountain)      = 6  (winner Rock)
    Game pair H -> 1 (Rock) + 9 (Match)         = 10 (winner Rock)
    
    This would make 9 cases plus one tie game. 
    
Example 3: making the list even longer by two additional pieces (it's getting complicated):

    (This is not a serious version, only for finding additional numbers)

    Rock     = 1    // beats Lizard, Scissors, Match
    Paper    = 2    // beats Rock, Spock, Fountain
    Scissors = 3    // beats Lizard, Paper, Match
              gap: 2
    Fountain = 5    // beats Rock, Scissors, Lizard
              gap: 4           
    Match    = 9    // beats Paper, Fountain, Spock
              gap: 6      
    Lizard   = 15   // beats Spock, Paper, Match
              gap: 8
    Spock    = 23   // beats Scissors, Rock, Fountain
    
The gaps where manually tried out but now there's a rule visible. The gap between each number after the first three increases by 2. 
    

    Game pair A -> 1 (Rock) + 2 (Paper)         = 3 (winner Paper) 
    Game pair B -> 2 (Paper) + 3 (Scissors)     = 5 (winner Scissors)
    Game pair C -> 3 (Scissors) + 1 (Rock)      = 4 (winner Rock)
    
    Game pair D -> 3 (Scissors) + 5 (Fountain)  = 8  (winner Fountain)
    Game pair E -> 3 (Scissors) + 9 (Match)     = 12 (winner Scissors)
    Game pair F -> 3 (Scissors) + 15 (Lizard)   = 18 (winner Scissors)
    Game pair G -> 3 (Scissors) + 23 (Spock)    = 26 (winner Spock)
    Game pair H -> 2 (Paper) + 5 (Fountain)     = 7  (winner Paper)
    Game pair I -> 2 (Paper) + 9 (Match)        = 11 (winner Match)
    Game pair J -> 2 (Paper) + 15 (Lizard)      = 17 (winner Lizard)
    Game pair K -> 2 (Paper) + 23 (Spock)       = 25 (winner Paper)
    Game pair L -> 1 (Rock) + 5 (Fountain)      = 6  (winner Rock)
    Game pair M -> 1 (Rock) + 9 (Match)         = 10 (winner Rock)
    Game pair N -> 1 (Rock) + 15 (Lizard)       = 16 (winner Rock)
    Game pair O -> 1 (Rock) + 23 (Spock)        = 24 (winner Spock)
    Game pair P -> 5 (Fountain) + 15 (Lizard)   = 20 (winner Fountain)
    Game pair Q -> 5 (Fountain) + 23 (Spock)    = 28 (winner Spock)
    
    This would make 17 cases plus one tie game. 
    
The advantage of idea 2 is this pairing is that the list can be endless (ok, the code for each pair would be endless too ;-) )
    
The implementation for example 1:

```
switch (valueOfPair) {
  case 3:
    win = "paper"
    if (player === win) { 
      playerScore++;
      return 'Player won!';
    }
    computerScore++;
    return 'Computer won';
  case 5:
    win = "scissors"
    if (player = win) {
      playerScore++;
      return 'Player won!';
    }
    computerScore++;
    return 'Computer won';
  case 4:
    win = "rock"
    if (player = win) {
      playerScore++;
      return 'Player won!';
    }
    computerScore++;
    return 'Computer won';
  default:
    return 'It's a tight game!';
}
```

 So, my favorite for implementation is idea 2. But with that there is also a drawback: I'm not sure if the rule of increasing the number for each piece by 2 really works with a longer list or even endless list. But that's not the purpose of this app.




---

## Text from original README file to Angular Cli

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
