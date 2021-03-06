---
path: "/C4"
cover: "../C4/c4.png"
date: "2019-06-15"
title: "C4 Architecture"
tags: ['C4', 'Architecture']
published: true
---

> “Big design up front is dumb, but doing no design up front is even dumber.”
Dave Thomas

The [C4 Model](https://c4model.com/) is a lightweight software architecture description method. It consists of a set of 4 diagrams that describe the **static** structure of a software system. 

Overall, it strives for clarity and communication of the story, and follows [Shneiderman's mantra](http://www.ifp.illinois.edu/nabhcs/abstracts/shneiderman.html):
> *Overview first, zoom and filter, then details-on-demand*

It is not formal UML e.g. the UML actor stickman is deliberately not used as it causes confusion between a person or a system.

![C4](c4.png)



The **4C's** are:
1. **Context**: A high-level diagram that sets the scene; including key system dependencies
and people (actors/roles/personas/etc). [Context diagrams](https://en.wikipedia.org/wiki/System_context_diagram) are standard in software engineering (even if not used often).
2. **Container**: A container diagram shows the high-level technology choices, how responsibilities are distributed across them and how the containers communicate.
3. **Component**: For each container, a component diagram lets you see the key logical
components and their relationships.
4. **Classes (or Code)**: This is optional and is the lowest level of detail.


# CheatSheet
The [CheatSheet](http://www.codingthearchitecture.com/2017/04/27/visualising_and_documenting_software_architecture_cheat_sheets.html) gives a good summary of the C4 model and diagrams.


# Video Presentation
See [youtube video from NDC2017  conference](https://www.youtube.com/watch?v=Ym9nhVZs89o) by Simon Brown on C4 for visualisation.

# Related Methods
There are a number of related models and templates:

## 4+1 model

C4 is inpsired by [the 4+1 model for software architecture](https://en.wikipedia.org/wiki/4%2B1_architectural_view_model)


## ARC42
C4 can be combined with arc42 documentation template. The diagrams map as follows:

| Arc42         | C4        
|:------------- |:------------
| Context and Scope             | System Context diagram
| Building Block View (level 1) | Container diagram
| Building Block View (level 2) | Component diagram
| Building Block View (level 3) | Class diagram

## Data-flow diagrams
[Data-flow diagrams (DFD)](https://en.wikipedia.org/wiki/Data-flow_diagram) (to desribe data **activity**) use a similar hierachical approach starting with the contextual DFD0. They use a multi-level numbering scheme 
- DFD0: 1 
- DFD1: 1.1., 1.2, 
- DFD2: 1.1.1, 1.1.2,
 
# Books

These books, written by [@simonbrown](https://twitter.com/simonbrown), are available to buy from https://leanpub.com/visualising-software-architecture. 


| Cover         | Title        
|:------------- |:------------
| ![[Software Architecture for Developers: Volume 1 - Technical leadership and the balance with Agility](https://leanpub.com/b/software-architecture)](swarchv1.png)   |         Software Architecture for Developers: Volume 1 - Technical leadership and the balance with Agility
| ![[Software Architecture for Developers - Volume 2 - Visualise, document and explore your software architecture](https://leanpub.com/visualising-software-architecture)](swarchv2.png)    | Software Architecture for Developers - Volume 2 - Visualise, document and explore your software architecture. (As at 2019-6-15 this book is 80% complete LAST UPDATED ON 2019-03-05). C4 is covered in this book.







# C4 Plantuml VSCode 
[C4-PlantUML](https://github.com/RicardoNiepel/C4-PlantUML) combines the benefits of [PlantUML](http://plantuml.com/) (an open source project that allows you to create UML diagrams automatically from a text description), and the C4 model for providing a simple way of describing and communicate software architectures.
It also supports [C4 PlantUML Snippets for Visual Studio Code](https://github.com/RicardoNiepel/C4-PlantUML#snippets-for-visual-studio-code)



 