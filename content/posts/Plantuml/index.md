---
path: "/Plantuml"
cover: "../Plantuml/keystore.png"
date: "2019-06-21"
title: "PlantUML"
tags: ['PlantUML', 'Architecture']

published: true
---

PlantUML can be used to create several UML diagram types from a simple text file description. It can run from command line, editor (e.g. [VSCode plugin](https://marketplace.visualstudio.com/items?itemName=jebbs.plantuml)), browser (e.g. [Chrome browser](https://chrome.google.com/webstore/detail/plantuml-viewer/legbfeljfbjgfifnkmpoajgpgejojooj?hl=en-US)) or [online service via browser](https://www.websequencediagrams.com/).


- For standard UML diagrams (class diagrams, sequence diagrams) auto-generation is a good option. 
- For non-UML compliant diagrams, where the arrangement of parts is important to convey information, a simple Box-and-Line diagram that is manually drawn is a better option.
- For C4 architecture (Context, Container, Component, Class), it is ideal and [C4 templates exist](https://www.mytechiebits.com/C4).




# Goals
1. Bring architecture closer to the code so that it is in sync with the code:
   1. code is developed consistent with the architecture
   2. architecture diagrams and description is current and correct
2. Remove the initial friction to create diagrams - by auto-generating them
3. Diagram source text files are version-controlled in GIT in relevant source code repo
4. Consistent diagrams - that can be easily interlinked


# PlantUML Examples
https://real-world-plantuml.com/ gives many examples of PlantUML diagrams.

![](./keystore.png) 
*example of a sequence diagram I created*

# VSCode PlantUML Extension
[VSCode Plantuml Extension](https://marketplace.visualstudio.com/items?itemName=jebbs.plantuml) makes it easy to create and edit plantuml diagrams. It includes a real-time preview. 


# Plantuml for C4 Architecture
 [C4 templates exist](https://www.mytechiebits.com/C4) to create PlantUML diagrams according to the C4 template.


## Use Local Copy of C4 Templates

For each of the template files C4_Context.puml, C4_Context.puml, C4_Component.puml
comment out the includeurl, and uncomment the include, directive. 
```
' !includeurl https://raw.githubusercontent.com/RicardoNiepel/C4-PlantUML/master/C4_Container.puml
' uncomment the following line and comment the first to use locally
!include C4_Container.puml
```

![](./BigBank.png)


## Add C4 Snippets to VSCode Editor
VSCode supports snippets that predict words as you type. 
VSCcode Snippets for C4 can be installed per 
See https://github.com/RicardoNiepel/C4-PlantUML#snippets-for-visual-studio-code 

# PlantUML Sprites
PlantUML supports [sprites](http://plantuml.com/sprite) (small graphic elements).
Given we want to make diagrams communicate quickly and clearly, using sprites (rather than just boxes) is very effective.


## PlantUML Sprite Exmaples
Some good examples of where PlantUML Sprites are used:
* [Plantuml for AWS](https://github.com/milo-minderbinder/AWS-PlantUML)
* https://github.com/rabelenda/cicon-plantuml-sprites/tree/master/sprites that includes Devicons, Material, Weather icons.


# Plantuml for AWS

https://github.com/milo-minderbinder/AWS-PlantUML plantuml AWS

```
git clone git@github.com:milo-minderbinder/AWS-PlantUML.git

```

## Simple Example
![](./aws.png)


## More Complex Example
![](./aws-big.png)


https://github.com/tupadr3/plantuml-icon-font-sprites 


# References
1. http://plantuml.com/ homepage
2. https://real-world-plantuml.com/umls/4619683198140416 is a PlantUML showcase
3. https://www.planttext.com/ free online site where you can copyNpaste the text description to auto-generate a diagram
4. https://www.websequencediagrams.com/ free online site where you can copyNpaste the text description to auto-generate a diagram
5. https://www.npmjs.com/package/c4builder autodoc 
6. https://codurance.com/2019/03/17/just-enough-technical-documentation/ Good article that makes reference to a good book "Agile Modelling - Scott Ambler"



