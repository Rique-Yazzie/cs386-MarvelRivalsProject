# Deliverable 4:

**Introduction**

CounterPick.gg is a dedicated learning platform designed to simplify the complex mechanics of Marvel Rivals, providing new players with a streamlined and engaging introduction to the game. By featuring an intuitive Hero Index with detailed abilities, counters, and team synergies, a competitive Tier List that ranks heroes based on viability, and a dynamic Comp Meta tool for discovering optimal team compositions, the platform empowers players to quickly master essential strategies without frustration. Additional features such as an integrated account system, real-time patch notes, community insights, and a powerful search bar ensure that users have all the information they need at their fingertips. For more details and to explore our code, visit our GitHub repository at

https://github.com/Rique-Yazzie/cs386-MarvelRivalsProject

Melvin Agram did this section 

**Requirements**

Requirement:

- As a new player, I want to view current patch notes for my favorite character.

  * Issue: [#51](https://github.com/Rique-Yazzie/cs386-MarvelRivalsProject/issues/51)
  * Pull Request: [#36](https://github.com/Rique-Yazzie/cs386-MarvelRivalsProject/pull/36)
    * Implemented by: Melvin Agram
    * Approved by: Rique Yazzie

 - As a veteran player, I want to be able to see what team "comps" are "meta" or currently viable in competitive e-sports.

   * Issue: [#57](https://github.com/Rique-Yazzie/cs386-MarvelRivalsProject/issues/57)
   * Pull Request: [#55](https://github.com/Rique-Yazzie/cs386-MarvelRivalsProject/pull/55)
       * Implemented by: Mark Johnson
       * Approved by: Melvin Agram

 - As a player, I want to be able to make an account and customize my profile and team comps.

   * Issue: [#58](https://github.com/Rique-Yazzie/cs386-MarvelRivalsProject/issues/58)
   * Pull Request: [#56](https://github.com/Rique-Yazzie/cs386-MarvelRivalsProject/pull/56)
       * Implemented by: Chris Son
       * Approved by: Melvin Agram

- As a player, I want to be able view each Hero's abilities and what they do.

   * Issue: [#26](https://github.com/Rique-Yazzie/cs386-MarvelRivalsProject/issues/26)
   * Pull Request: [#37](https://github.com/Rique-Yazzie/cs386-MarvelRivalsProject/pull/37)
       * Implemented by: Rique Yazzie
       * Approved by: Melvin Agram
    
 Every Member worked this section 

**Tests**


Test Framework: jest

Example Test Case: This test case specifically checks that the searchFunction is called when the user presses the Enter key inside the search input
Github automated test file: [CS386_Project/tests](https://github.com/Rique-Yazzie/cs386-MarvelRivalsProject/tree/Riques-Branch/CS386_Project/tests)
Class file link: [CS386_Project/app.js](https://github.com/Rique-Yazzie/cs386-MarvelRivalsProject/blob/Riques-Branch/CS386_Project/app.js)

Test Execution flow
1. Calls the setup function
2. Calls the First test function
3. calls the cleanup function
4. reset process
- Mark Johnson and Rique Yazzie did this section


**Technology**

Django

Django is our high-level Python web framework that serves as the backbone of CounterPick.gg. We leverage Django for robust backend development, managing dynamic content, data integrity, and security across the platform. A key feature is its built-in user authentication system, which simplifies the implementation of secure account creation, login, and profile management. This makes Django an ideal choice for both handling our core logic and ensuring that user data is safeguarded.

HTML

HTML (HyperText Markup Language) structures the content on CounterPick.gg. It ensures that all critical game information—such as hero details, patch notes, and team compositions—is clearly presented and easily navigable. HTML’s universal compatibility and simplicity are essential for building a responsive, accessible layout that meets our user interface goals.

JavaScript

JavaScript enhances interactivity on the platform, enabling dynamic updates and real-time user feedback. It powers features like the Comp Meta tool and interactive search functionalities, ensuring that players experience a seamless, engaging interface as they explore hero statistics, update team compositions, or access community insights.

Melvin Agram did this section 

**Deployment**

- We are using a local server provided by Mark as a backend for our project. This local server is going to be an ubuntu server, managed remotely. This server will be configured to use python3, Django, PostgreSQL, Gunicorn, and NGINX. As a backup solution the team is looking at AWS and Digital Ocean to provide a quick and easy solution to provide a backend that will be a quick backup just in case the local server fails.

- IP address: 104.168.169.139

Chris Son did this section
  
**Licensing**

Our project is released under the MIT License. We chose it because it is highly permissive, allowing anyone to use, modify, and distribute the code with minimal restrictions. Its simple, clear terms promote community contributions and innovation while ensuring proper attribution through the retention of the original copyright notice.

- Melvin Agram did this section

**Readme File**

[Code of Conduct](https://github.com/Rique-Yazzie/cs386-MarvelRivalsProject/blob/main/CONTRIBUTING.md)

[Contributing](https://github.com/Rique-Yazzie/cs386-MarvelRivalsProject/blob/main/CONTRIBUTING.md)

[LICENSE](https://github.com/Rique-Yazzie/cs386-MarvelRivalsProject/blob/main/LICENSE)

[README](https://github.com/Rique-Yazzie/cs386-MarvelRivalsProject/blob/main/README.md)

Melvin Agram did this section

**UX Design**


![Screenshot 2025-03-23 194249](https://github.com/user-attachments/assets/16a435b1-1bad-4d85-8746-6a2776faed39)

Our homepage, consists of pictures displaying every hero in marvel rivals. You can use the links at the top to navigate throughout the entire website.


![Screenshot 2025-03-23 195127](https://github.com/user-attachments/assets/54c3230c-37a8-4fdd-9bcd-43440c8b788e)

Clicking on a hero brings up a popup window which displays a brief description of the hero selected, if you want to see more about the hero you can select the "More
about this hero" link which takes you to the Character Index tab for that specific hero.


![Screenshot 2025-03-23 202434](https://github.com/user-attachments/assets/3e289d2f-f1fb-449a-a9da-b2e603bc7a18)

This is our Team Comps page, where users will be able to click on a hero and inside the bottom box youll be able to view different team compositions for that certain hero
displaying which heroes work best together.


![image](https://github.com/user-attachments/assets/7aa3c83e-7734-4e63-9601-6d702062d2db)

The Patch Notes page will display all current and previous patch notes for all heroes, as well as display thier images that are still clickable and can take you to the
Character Index.


- Rique Yazzie did this section


**Lessons Learned**

In retrospective, our team learned about using langauges like Javascript, HTML, and Django. A problem we encountered was our skills using Github.
we had to refresh our core memories and skills on how to use tools like the Git bash, additonally we are still understanding how to get our backend development to work using Jango. 
We improved our skills with merging, cloning, approving pull requests, and posting issues. Our first release is
a simple skeleton of the system and we are happy with the progress we have made, we are far from finished- but we do think we have a correct schedule
and we all are looking forward to the next release which will add further implementation and expanded UX Design.  

Mark Johnson did this section

**Demo**


[![Watch the video](https://img.youtube.com/vi/rOnErix08-c/0.jpg)](https://www.youtube.com/watch?v=rOnErix08-c)

Rique Yazzie did this section

