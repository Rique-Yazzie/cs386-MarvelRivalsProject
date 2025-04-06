# Deliverable 5:

**Decription**

CounterPick.gg is a dedicated learning platform designed to simplify the complex mechanics of Marvel Rivals, providing new players with a streamlined and engaging introduction to the game. By featuring an intuitive Hero Index with detailed abilities, counters, and team synergies, a competitive Tier List that ranks heroes based on viability, and a dynamic Comp Meta tool for discovering optimal team compositions, the platform empowers players to quickly master essential strategies without frustration. Additional features such as an integrated account system, real-time patch notes, community insights, and a powerful search bar ensure that users have all the information they need at their fingertips. For more details and to explore our code, visit our GitHub repository at

https://github.com/Rique-Yazzie/cs386-MarvelRivalsProject

**Architecture**

Our architecture for CounterPick.gg includes our UI/Presentation, API, Features, and a database. The user interracts with our API to create an account and make comments, the user is also the primary target to interact with our UI. Our database powers our features by providing data such as images and text files. Within our data are we have shown in a layered format in this UML how each function operates or what each portion contains.

![CS386_deliverable5_UML](https://github.com/user-attachments/assets/bc5b8719-2e53-4520-ac13-c5414f70a3b1)

Rationale:

The system is designed using a layered architecture to separate concerns and improve maintainability. The UI handles user interaction and delegates prcoessing to the Features layer, which then accesses data through our database module. An API layer is used to handle interactions with the user seperate from the features layers. This structure makes the system easier to scale, test, and maintain.

**Class Diagrams**

![UML Class Diagram](https://github.com/user-attachments/assets/4211f478-c49d-4218-ae13-58d2bdabdc39)

**Sequence Diagram**

Title: Compose Team

Actor: Coach

Description: Allows a coach to create and save a team composition using available heroes

Pre-conditions: 

- Coach has verified email
- Coach is logged into the system

Main Flow:
1. Coach initiates team composition process
2. System verifies coach's email status
3. Coach accesses team composition interface
4. System displays available heroes with their attributes (name, title, description, rank)
5. Coach selects heroes to add to the team
6. System validates each hero addition
7. Coach saves the team composition
8. System confirms the save operation

Alternative Flows:
A1. Email not verified
    - System prompts coach to verify email
    - Returns to main flow step 1
A2. Invalid hero selection
    - System displays error message
    - Returns to main flow step 5

Post-conditions:
- New team composition is saved
- Coach can access the created team composition

Business Rules:
- Coach must have verified email to create teams
- Teams must follow valid composition rules

![Sequence Diagram](https://github.com/user-attachments/assets/9437f568-60ec-4d64-aede-d5d2b71824e9)

**Design Patterns**

- Hero Dictionary

![Screenshot 2025-04-04 154541](https://github.com/user-attachments/assets/9f631fad-c5cc-409c-9b28-7616726395c1)

- displayHeroes Function

![Screenshot 2025-04-04 154926](https://github.com/user-attachments/assets/050f9f0f-eeac-45c5-a1f5-d5ed11ff3a10)



**Design Principles**
- The Hero Dictionary UML Diagram follows the Open/Closed Principle, because we have a main hero class with subclasses Strategists, Duelists, and Vanguard. This design allows for extended functionality of adding new heroes to their respective subclasses without needing to modify any existing code.
- The Hero Dictionary UML Diagram also follows the Liskov Substitution Principle, because our subclasses are derived directly from the hero class, so replacing instances of hero with its subtypes will not alter the code. The difference the subclasses provides is the displaying of specific info for a specific subclass.
- The displayHeroes Funciton UML Diagram follows the Single Responsibility Principle, the class createImageCard is responsible for creating the image card for every hero and handling the popup functionality when you click it. The subclass of openImagePopup is responsible for displaying the heroes full details when the image is clicked. This separates the image creation and displaying hero info into two classes.


