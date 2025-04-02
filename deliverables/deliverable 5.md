# Deliverable 5:

**Decription**

**Architecture**

**Class Diagrams**

**Sequence Diagrams**

![Team Composition Sequence Diagram](https://github.com/user-attachments/assets/030caea0-fe30-4c9b-9833-21096cc74efc)

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


**Design Patterns**

**Design Principles**

