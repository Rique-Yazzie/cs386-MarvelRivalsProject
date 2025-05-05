# Deliverable 7:

**Introduction**

CounterPick.gg is a dedicated learning platform designed to simplify the complex mechanics of Marvel Rivals, providing new players with a streamlined and engaging introduction to the game. By featuring an intuitive Hero Index with detailed abilities, counters, and team synergies, a competitive Tier List that ranks heroes based on viability, and a dynamic Comp Meta tool for discovering optimal team compositions, the platform empowers players to quickly master essential strategies without frustration. Additional features such as an integrated account system, real-time patch notes, community insights, and a powerful search bar ensure that users have all the information they need at their fingertips. For more details and to explore our code, visit our GitHub repository at

https://github.com/Rique-Yazzie/cs386-MarvelRivalsProject

**Verfication**

For changeImage.test.js:

- Test Framework: Jest 

- Example Test Case: This test case specifically checks that the changeImage function is called when the user clicks on one of the icons.
- Github automated test file: https://github.com/Rique-Yazzie/cs386-MarvelRivalsProject/blob/main/tests/changeImage.test.js
- Class file link: https://github.com/Rique-Yazzie/cs386-MarvelRivalsProject/blob/main/CS386_Project/app.js

Image for all tests is in one picture on the bottom of this section

For search.test.js

- Test Framework: jest

- Example Test Case: This test case specifically checks that the searchFunction is called when the user presses the Enter key inside the search input.
- Github automated test file: https://github.com/Rique-Yazzie/cs386-MarvelRivalsProject/blob/main/tests/search.test.js
- Class file link: https://github.com/Rique-Yazzie/cs386-MarvelRivalsProject/blob/main/CS386_Project/app.js

Image for all tests is in one picture on the bottom of this section

For openCharacterDetails.test.js:

- Test Framework: Jest

- Example Test Case: This test case checks that the openCharacterDetails function successfully navigates the user to the hero details page.
- Github Automated test file: https://github.com/Rique-Yazzie/cs386-MarvelRivalsProject/blob/main/tests/openCharacterDetails.test.js
- Class file link: https://github.com/Rique-Yazzie/cs386-MarvelRivalsProject/blob/main/CS386_Project/heroes.js

Image for all tests is in one picture on the bottom of this section

For updatePopupContent.test.js:

- Example Test Case: This test case checks that the updatePopupContent.test.js function populates the popup content with needed data like image, name, role description, teamups, abilites, and health.
- Github Automated test file: https://github.com/Rique-Yazzie/cs386-MarvelRivalsProject/blob/main/tests/updatePopupContent.test.js
- Class file link: https://github.com/Rique-Yazzie/cs386-MarvelRivalsProject/blob/main/CS386_Project/heroes.js

![image](https://github.com/user-attachments/assets/eb2e995d-f002-4152-8065-dd79c008ddf9)


**Acceptance Test**

Test Framework: Selenium WebDriver with Python, pytest, and pytest-html

Test Coverage:
- Verifies hero card interaction
- Checks popup content accuracy
- Tests navigation to details page

- Github automated test file: https://github.com/Rique-Yazzie/cs386-MarvelRivalsProject/blob/Melvin's-Branch/tests/test_hero_details.py
- Class file link: https://github.com/Rique-Yazzie/cs386-MarvelRivalsProject/blob/Melvin's-Branch/CS386_Project/characterIndex.html

- ![Screenshot 2025-04-26 153639](https://github.com/user-attachments/assets/f4e03f3a-c4ea-4e3f-98b1-89df5cfd487c)
- ![Screenshot 2025-04-26 154131](https://github.com/user-attachments/assets/e20df5fa-3c8a-47f4-acc3-049e5e93d210)

Additional testing

Test Framework: Playwright using node.js

Test Coverage:
- Identifying selection of a hero
- Confirming output

- ![image](https://github.com/user-attachments/assets/e2ace52f-fa12-418e-a144-315191db14a8)
- ![image](https://github.com/user-attachments/assets/62ee5c10-a6e0-48d4-afcd-3fbf6da20391)

-Testing located here: (https://github.com/Rique-Yazzie/cs386-MarvelRivalsProject/tree/main/tests)

**Validation**

***Script:***

Q1:  Can You navigate to a hero you like from the landing page?

Q2:  On a scale of 1-5 (1- Easiest, 5-Most Difficult), how difficult was it to get from the main page to the resource page?

Q3:  On a scale of 1-5, how is the aesteitcs of the website?

Q4:  How informative is the website?

Q5:  Are the resources usable (Patch notes, news, Character information)?

Q6:  What do you think is missing from the website?

Q7:  What else would you like to see in the website?

***Results:***

Respondant: John Doe, Interviewer: Christopher Son  
  A1:  Participant was able to navigate to the specific resource page in one click.  
  
  A2:  1  
  
  A3:  4 - Some icons dont appear.  
  
  A4:  As a competitive gamer, I like the information that this website [counterpick.gg] can give to average players,   but I would like it to be more useful for competitive players like me. Right now however I can see it being a      competitor to liquipedia for Marvel Rivals.  
  
  A5:  The only issue I have is the team comp tab. You have to scroll down to see recommendations.  
  
  A6:  I would like a section for user created guides.  
  
  A7:  The Team comp page being more useful than just looking at recommended heroes that synergize with the selected         hero.  

Respondent: Joy Lee, Interviewer: Christopher Son  

A1:  Participant clicked on the various tabs before clicking on the resource page, when asked why the participant indicated he just wanted to look around.  

A2:  1  

A3:  4 - the sign up button doesn't look good.  

A4:  I like it, it has just enough information to be useful and not too awkward to use.  

A5:  The news section is very informative and easy to get to.  

A6:  I think the tier list being missing is a missed opportunity  

A7:  I would like to see videos to learn each hero instead of just reading.  

Respondent: Huy Ngyuen, Interviewer: Christopher Son  

A1:  Participant was able to navigate to the specific resource page in one click.  

A2:  1  

A3:  4 - didn't specify  

A4:  Compared to the marvelrivals.gg, its easier to use. I prefer this site more.  

A5:  Its all very usable.  

A6:  There are missing icons for buttons.  

A7:  I think adding guides would help me learn.  

*Reflection:*
It seems like the project in the stage that it is in meets most expectations. Firstly, when designing the website, we wanted to create something that is intuitive and useful for a general audience and new players. With the exception of the team comp and tier list pages, we are making something that is useful for all players. 

Participants also really liked how simple the website is to use. On average, users were able to navigate from the landing page to a hero resource in one click. Also, each participant indicated the ease of use was as easy as possible.

The main issues that the participants have with our website mainly pertain to missing features. One participant had issues with the team comp tab being not too useful for competitive players. Another would like to see videos explaining and showcasing heros. And the last one had issues with the minor things being missing such as icons and pages (tier list). 

All in all, we believe we are meeting our value proposition and on track to meeting the entire proposition. The main component being ease of use to learn the new video game, Marvel Rivals. While not all features that we planned on, such as guides and videos, are not implemented which would help in learning the game, we still do have those features in to pipeline to help aid players. 
