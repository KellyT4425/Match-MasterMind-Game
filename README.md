![mastermind](image.md/mastermind-image.webp)

# Match Mastermind
| Technology Stack |                                                                                                                                          |                                                 |
|-------|---------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| 1     |  HTML 5                            |                    
| 2     | CSS 3                                              |
| 3     | JavaScript                                                 | 

## Description
Test your short term memory with this fun interative card game. The purpose of the game is to match two card pairs in order to score a point, if the two cards you pick do not match however! then they are hidden again. Relying on your memory to memorise where you **THINK** you may have seen the matching card.

The purpose of this project was to create a game where the user can interact, clear the game board of all matching pairs, beat the timer, play against your highscore, score points and have fun while doing so. Games such as this one offers many benefits, proving to boost skills like **reasoning**, **problem solving**, **memory**, and **concentration**.

**Target Audience**..........

As outlined above Technologies used where essential in the development of this game. **HTML 5** brought structure to the page dividing the main game board panel and all its individual cards. Attributes where then added like <em>#id</em> and <em>.classes</em>, which allowed **CSS 3** to target and style all assigned attributes as well as its elements in the structure making the game more visually appealing and fun. 

**JavaScript** then brought interativity to the game, making it the most vital technology for the overall functioning, with out it the game would not run. My **biggest** and only challenge when developing this game was JavaScript. I continune to find it difficult to grasp its concepts which involves a lot of logical thinking.

overall I enjoyed developing this game, once it was functional I felt an huge sense of achievement which has motivated me to continue to try and master JavaScript as I can not help but feel that I am preforming magic with this language. :D

## User Experience

### User Stories
* As a user I want to be able to test my short term memory.
* As a user I want to have a fun experience but also be challenged.
* As a user I want to see points scored, for my matches.
* As a user I want to be able to reset the game whenever I want so I can go again.
* As a site owner I want users to have a fun experience, that entices users to return. 
* As a site owner I want users to use the site to challenge there concentration and short term memory.


## Design


### Colour Contrast

![Contract Grid](image.md/contrast-grid.png)

[EightShapes](https://contrast-grid.eightshapes.com/)


### Typography

font-family: "Permanent Marker", cursive;

![Google Fonts](image.md/font-google.png)

[Google Fonts](https://fonts.google.com/specimen/Permanent+Marker)


### WireFrame

![Wireframe Desktop](image.md/wireframe-desktop.png)

![Wireframe Mobile-Tablet](image.md/mobile-tablet-wireframe.png)


### Features

#### Interactive Card Board:

![Game Board running](image.md/game-running.png)

#### Buttons:

![Reset Button](image.md/reset-button.png)


![Start Button](image.md/start-button.png)

#### Score Trackers/ Timer:

![Highscore](image.md/high-score.png)


![Point Score](image.md/point-score.png)


 There is many more features I would of liked to add to the game, but due to my struggle with the language ive had to put these features down for future addons. 

- Animation/sound effects on flip cards and where pairs are matched.
- Streak points, meaning that extra points are awarded to the player if they match pairs at a fast pace.
- 3D Card flip effect, where it rotates to display the back of the card.
- Game levels to provide further difficulty.
- Instead of alerts, add HTML, CSS display messages to the game.

These are a couple of features I would like to add as my skill set in JavaScript progresses and I build my confidence. However, 

## Testing

### Validation 

W3 HTML 5 [Validator](https://validator.w3.org/)

![HTML 5](image.md/html-validator.png)

Jigsaw W3 CSS 3  [Validator](https://jigsaw.w3.org/css-validator/)

![CSS 3](image.md/css3-validator.png)

JavaScript [JSHint](https://jshint.com/) was used to check code quality warnings did return however included ES6 JS Extension warnings which where ignored.

### Lighthouse Testing

Mobile

![Mobile](image.md/mobile-lighthouse.png)

Desktop

![Desktop](image.md/desktop-lighthouse.png)



### Accessibility Testing

[WAVE](https://wave.webaim.org/) full accessibility check complete, no warnings in relation to structure, contrast, headings or imagery. 

### Manual Testing

## Deployment

Deployment of the project took place early on, once the HTML and CSS for the home page had been set up. Deployment took place as follows:

1. The GitHub page for the website was loaded
2. The **Settings** tab was clicked, located in the top right corner.
3. From the **Settings** page, on the left-hand side the **Pages** tab was clicked from the menu.
4. Under the **Branch** section, the page was selected to be made from the **main** branch followed by the **root** folder.
5. These settings were saved and the website was deployed after a few minutes, with a link being provided at the top of the page.

To clone the repository, the following steps are as follows:

1. On the repository, click the **Code** tab in the upper navigation bar, and then click the green **Code** button to reveal a drop down menu.
2. Copy the URL for the repository
3. In the coding workspace, open the terminal and change the current working directory to the one where you want the clone to be located
4. In the terminal, write `git clone` and paste the copied URL after it
5. Press **Enter** to create the cloned repository

Cloning the repository allows all files to be accessible on the local computer.

[View my deployed site HERE!](https://kellyt4425.github.io/Match-MasterMind-Game/)

## Bugs Fixes

* Timer - issues where flagged early on in relation to the timer function. The timer was not clearing or displaying the alert message when the user ran out of time, looping from  0 - 60 over and over. The same happened when all the cards where cleared, the alert message did not display congratulating the user and the time continued to loop. If..else statements where added to check for either condition and to clearInterval once either was achieved. 
* Game reset on timeout - once the issue with the timer was resolved, another bug was noted where a user could run out of time, but the game did not reset. This meant that the user could click start again and continue with the game despite running out of time previously. location.reload(); was added after the alert message, so that the game would reset after the user ran out of time.
* Match Cards Function - bug found when a pair of cards where matched but would not disappear from the board. Rule added to JavaScript code to hide matched cards.


### Credits
