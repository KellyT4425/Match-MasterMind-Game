![mastermind](readme-images/mastermind-image.webp)

# Match Mastermind
| Technology Stack |                                                                                                                                          |                                                 |
|-------|---------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| 1     |  HTML 5                            |                    
| 2     | CSS 3                                              |
| 3     | JavaScript                                                 | 

[View my deployed site HERE!](https://kellyt4425.github.io/Match-MasterMind-Game/)

[View my Github Page](https://github.com/KellyT4425)

## Description
Test your short term memory with this fun interative card game. The purpose of the game is to match two card pairs in order to score a point, if the two cards you pick do not match however! then they are hidden again. Relying on your memory to memorise where you **THINK** you may have seen the matching card.

The purpose of this project was to create a game where the user can interact, clear the game board of all matching pairs, beat the timer, play against there highscore, score points and have fun while doing so. Games such as this one offers many benefits, proving to boost skills like **reasoning**, **problem solving**, **memory**, and **concentration**.

As outlined above Technologies used where essential in the development of this game. **HTML 5** brought structure to the page dividing the main game board panel and all its individual cards. Attributes where then added like <em>#id</em> and <em>.classes</em>, which allowed **CSS 3** to target and style all assigned attributes as well as its elements in the structure making the game more visually appealing and fun. 

**JavaScript** then brought interativity to the game, making it the most vital technology for the overall functioning, with out it the game would not run. My **biggest** and only challenge when developing this game was JavaScript. I continune to find it difficult to grasp its concepts which involves a lot of logical thinking.

overall I enjoyed developing this game, once it was functional I felt an huge sense of achievement which has motivated me to continue to try and build on my skills in JavaScript as I can not help but feel that I am preforming magic with this language. :D

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

![Contract Grid](readme-images/contrast-grid.png)

[EightShapes](https://contrast-grid.eightshapes.com/)


### Typography

font-family: "Permanent Marker", cursive;

![Google Fonts](readme-images/font-google.png)

[Google Fonts](https://fonts.google.com/specimen/Permanent+Marker)


### WireFrame

![Wireframe Desktop](readme-images/wireframe-desktop.png)

![Wireframe Mobile-Tablet](readme-images/mobile-tablet-wireframe.png)


### Features

#### Interactive Card Board:

> <em>Below is a screenshot of the game functioning, the timer displaying 26 seconds with one pair of cards matched where one point was awarded to point score. Previous highscore highlights 17 seconds and in this case the user did not beat their previous highscore.</em>

![Game Board running](readme-images/game-running.png)

#### Buttons:

![Reset Button](readme-images/reset-button.png)

`gameReset();` function along with a `click` Event Listener is added to this button element allowing the user to reset the game at any point, even during game play.

![Start Button](readme-images/start-button.png)

`runGame();` function and a `click` Event Listener is added to the above button, it is also linked to the `click` Event Listeners on all cards. This means that the user can not interact with the game board until the start button is clicked.

#### Score Trackers/ Timer:

![Highscore](readme-images/high-score.png)

`loadHighScore();` and `updateHighScore();`functions this makes use of the `local.Storage` which stores the users most up to date high score where the other function updates it for display. 

![Point Score](readme-images/point-score.png)

`matchScore();` this function gets the `.textContent` within the DOM and increments it by 1 every time a pair of cards are matched. 

#### Future Features

 There is many more features I would of liked to add to the game, but due to my struggle with the language ive had to put these features down for future addons. 

- Animation/sound effects on flip cards and where pairs are matched.
- Streak points, meaning that extra points are awarded to the player if they match pairs at a fast pace.
- 3D Card flip effect, where it rotates to display the back of the card.
- Game levels to provide further difficulty.
- Instead of alerts, add HTML, CSS display messages to the game.

These are a couple of features I would like to add as my skill set in JavaScript progresses and I build my confidence. 

## Testing

### Validation 

W3 HTML 5 [Validator](https://validator.w3.org/)

`index.html` file was run through the W3 HTML 5 Validator, no errors or wantings where highlighted.

![HTML 5](readme-images/html-validator.png)

`style.cc` file was run through the W3 Jigsaw CSS 3 Validator, no errors where found. 

Jigsaw W3 CSS 3  [Validator](https://jigsaw.w3.org/css-validator/)

![CSS 3](readme-images/css3-validator.png)

`script.js` file was run through [JSHint](https://jshint.com/) to check code quality, warnings did return however included ES6 JS Extension warnings which where ignored.

### Lighthouse Testing

#### Mobile

![Mobile](readme-images/mobile-lighthouse.png)

#### Desktop

![Desktop](readme-images/desktop-lighthouse.png)

Using Chrome Dev Tools, Lighthouse was used to audit the website on both mobile and desktop, above is the results.

#### Audits
It runs a series of audits against a webpage, evaluating aspects like:
* Performance: Page load time, speed, and responsiveness.
* Accessibility: Ensuring the website is usable by people with disabilities.
* Best Practices: Adhering to recommended coding practices.
* SEO: Optimizing the website for search engines.
* Progressive Web Apps (PWAs): Evaluating the website's PWA capabilities.

### Accessibility Testing

[WAVE](https://wave.webaim.org/) full accessibility check complete, no warnings in relation to structure, contrast, headings, content or imagery where found. Any suggestions made where implemented where applicable. 

![Wave](readme-images/wave-accessibility.png)

### Manual Testing

Numerious actions where taken to manually test my project. Since I deployed the site early on in Github, when my project was fully functional I shared my webpage link within the Slack Community `#peer-code-review`. I also sent the link to friends and family to test the game, outlining the different features and how the game should function and look. Feedback provided was positive, however two bugs did present:

1. On **Apple IOS**, the start button `font-color:` was displaying `blue`, which was not the case on any other device, including **Andriod**. Fix - when reviewing `style.css` there was no `color:` assigned to the start button so `color: #000000` was added which solved the bug where on Apple IOS the button font color displayed as blue.

![User Test - Apple IOS](readme-images/user-manual-test.jpg)

2. One user noted that when they ran out of time, they where able to click **START** again, and continue the game despite having ran out of time. `location.reload();` was added after the condition which solved this issue. 

<em>**Further bugs are outlined below.**</em>

## Bugs Fixes

* Timer - issues where flagged early on in relation to the timer function. The timer was not clearing or displaying the alert message when the user ran out of time, looping from  0 - 60 over and over. The same happened when all the cards where cleared, the alert message did not display congratulating the user and the time continued to loop. If..else statements where added to check for either condition and to clearInterval once either was achieved. 

* Match Cards Function - bug found when a pair of cards where matched but would not disappear from the board. Rule added to JavaScript code to hide matched cards.

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




### Credits

#### Code, Tutorials, Resources
[Web Dev Simplified](https://www.youtube.com/c/webdevsimplified) tutorials and walkthroughs where used to aid in the completion of this project. 

[Stack Overflow](https://stackoverflow.com/questions) FAQs in respect of JavaScript, CSS Flexbox

[Mozilla mdn web docs_](https://developer.mozilla.org/en-US/docs/Web/JavaScript) information on JavaScript concepts, particularly iteration/looping, functions, conditional statements, boolean expressions, template literals....

[Bro Code](https://www.youtube.com/@BroCodez) tutorials and walkthroughs on core aspects of JavaScript.

[Codecademy](https://www.codecademy.com/catalog/language/javascript?g_network=g&g_productchannel=&g_adid=624951457627&g_locinterest=&g_keyword=codecademy%20javascript&g_acctid=243-039-7011&g_adtype=&g_keywordid=aud-726551140688:kwd-320553373431&g_ifcreative=&g_campaign=account&g_locphysical=1007290&g_adgroupid=128133970508&g_productid=&g_source={sourceid}&g_merchantid=&g_placement=&g_partition=&g_campaignid=1726903838&g_ifproduct=&utm_id=t_aud-726551140688:kwd-320553373431:ag_128133970508:cp_1726903838:n_g:d_c&utm_source=google&utm_medium=paid-search&utm_term=codecademy%20javascript&utm_campaign=INTL_Brand_Exact&utm_content=624951457627&g_adtype=search&g_acctid=243-039-7011&gad_source=1&gclid=CjwKCAjw7pO_BhAlEiwA4pMQvHWlE8jIDmGoAlcjWXv0X4JLxH8fbWccs47l2qvXfAuXSWqWkhn_nBoCM5YQAvD_BwE) JavaScript material, challenges.

[Github](https://github.com/) for helpful extensions, source code and information.

[CS50 Duck Debugger](https://cs50.ai/chat)

[SheCodes](https://www.shecodes.io/cheatsheets/javascript) Javascript cheat sheet.

[My Mentor](https://www.linkedin.com/in/hamiltondl/) Daniel Hamilton provided support, tips and guidance at vital milestones of my project.

Slack Community, tutors and members.

#### Images

[Pexels](https://www.pexels.com/search/website%20background/) background image sourced from Pexels, edited in Mircosoft Designer

[Google Font - Icons](https://fonts.google.com/icons) all icons for gameboard cards front and back. 


