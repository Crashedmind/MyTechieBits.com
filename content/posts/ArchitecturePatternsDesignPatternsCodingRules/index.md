---
path: "/ArchitecturePatternsDesignPatternsCodingRules"
cover: "../ArchitecturePatternsDesignPatternsCodingRules/Security.jpg"
date: "2019-07-19"
title: "Principles and Patterns For Secure Software"
tags: ['Architecture Pattern', 'Architecture', 'Design', 'Design Pattern', 'Coding Rules']
published: true
---

Principles provide the high level guidelines for a system. Patterns can be applied to implement these principles and allow us to use known good solutions for known problems.



# Principles
Some of the earliest secure software design principles were proposed by [Saltzer in the 1970's](https://en.wikipedia.org/wiki/Saltzer_and_Schroeder%27s_design_principles): 

## Saltzer Secure Software Design Principles


1 Economy of mechanism: Keep the design as simple and small as possible.

2 Fail-safe defaults: Base access decisions on permission rather than exclusion.

3 Complete mediation: Every access to every object must be checked for authority.

4 Open design: The design should not be secret.

5 Separation of privilege: Where feasible, a protection mechanism that requires two keys to unlock it is more robust and flexible than one that allows access to the presenter of only a single key.

6 Least privilege: Every program and every user of the system should operate using the least set of privileges necessary to complete the job.

7 Least common mechanism: Minimize the amount of mechanism common to more than one user and depended on by all users.

8 Psychological acceptability: It is essential that the human interface be designed for ease of use, so that users routinely and automatically apply the protection mechanisms correctly.

9 Work factor: Compare the cost of circumventing the mechanism with the resources of a potential attacker.

10 Compromise recording: It is sometimes suggested that mechanisms that reliably record that a compromise of information has occurred can be used in place of more elaborate mechanisms that completely prevent loss.

### Other Useful Secure Software Development Principles
1. Minimize the footprint of sensitive data - in time and space
   
   1.1 How long or how often the Sensitive data exists

   1.2 Where the sensitive data exists or flows -  the code or interfaces that touch the sensitive data.

## SOLID Principles
SOLID is an acronym for the first 5 principles of object-oriented design:

1. SRP The Single Responsibility Principle: -- a class should have one, and only one, reason to change.
2. OCP The Open Closed Principle: -- you should be able to extend a class's behavior, without modifying it.
3. LSP The Liskov Substitution Principle: -- derived classes must be substitutable for their base classes.
4. ISP The Interface Segregation Principle: -- make fine grained interfaces that are client specific.
5. DIP The Dependency Inversion Principle -- depend on abstractions not on concrete implementations.





# Patterns

> "Each pattern describes a problem which occurs over and over again in our
environment, and then describes the core of the solution to that problem, in such a way that you can use this solution a million times over, without ever doing it the same way twice.” Christopher Alexander

The term "design pattern" is often used to refer to any pattern which addresses issues of **software architecture, design, or programming implementation**. 


[Secure Design Patterns](https://resources.sei.cmu.edu/library/asset-view.cfm?assetid=9115) gives the following defincitions.


| Pattern                 |                                                        Definition       | Example |
|----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| Architecture Pattern | Expresses a fundamental structural organization or schema for software systems. It provides a set of predefined subsystems, specifies their responsibilities, and includes rules and guidelines for organizing the relationships between them.                 |  PrivSep (Privilege Separation)       |
| Design Patterns      | Provides a scheme for refining the subsystems or components of a software system, or the relationships between them. It describes a commonly recurring structure of communicating components that solves a general design problem within a particular context. |  Secure Factory         |
| Implementation Pattern          |   Implementation-level patterns address low-level security issues. Patterns in this class are usually applicable to the implementation of specific functions or methods in the system. Implementation-level patterns address the same problem set addressed by the CERT Secure Coding Standards [CERT 2009a] and are often linked to a corresponding secure coding guideline                                                                                                                                |  Clear Sensitive Information       |





## Architecture Patterns
Architectural-level patterns focus on the high-level allocation of responsibilities between different components of the system and define the interaction between
those high-level components. 
 


### SEI Secure Architecture Patterns 
[SEI Secure Architecture Patterns](https://resources.sei.cmu.edu/library/asset-view.cfm?assetid=9115) are as follows:



| Architecture Pattern Name                                               | Details                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|-----------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Distrustful Decomposition (aka Privilege reduction) | Move separate functions into mutually untrusting programs, thereby reducing the • attack surface of the individual programs that make up the system • functionality and data exposed to an attacker if one of the mutually untrusting programs is compromised                                                                                                                                                                                       |
| PrivSep (Privilege Separation)                      | Reduce the amount of code that runs with special privilege without affecting or limiting the functionality of the program. The PrivSep pattern is a more specific instance of the Distrustful Decomposition pattern.                                                                                                                                                                                                                                |
| Defer to Kernel                                     | Clearly separate functionality that requires elevated privileges from functionality that does not require elevated privileges and to take advantage of existing user verification functionality available at the kernel level. Using existing user verification kernel functionality leverages the kernel’s established role in arbitrating security decisions rather than reinventing the means to arbitrate security decisions at the user level  |




## Design Patterns

One of the better known set of Design Patterns for Security is [SEI Secure Design Patterns](https://resources.sei.cmu.edu/library/asset-view.cfm?assetid=9115):

### SEI Secure Design Patterns
[SEI Secure Design Patterns](https://resources.sei.cmu.edu/library/asset-view.cfm?assetid=9115) defines the following Secure Design Patterns:
1. Secure Factory
2. Secure Strategy Factory
3. Secure Builder Factory
4. Secure Chain of Responsibility
5. Secure State Machine
6. Secure Visitor                                                                                                                                                                              


# References

1. M. Schumacher. Security patterns: integrating security and systems engineering. Wiley
series in software design patterns. John Wiley & Sons, 2006. URL: http://books.
google.com/books?id=gtpQAAAAMAAJ
2. Chad Dougherty, Kirk Sayre, Robert C. Seacord, David Svoboda, and Kazuya Togashi.
Secure design patterns. Technical report, Software Engineering Institute, Carnegie Mellon,October 2009. URL: http://www.sei.cmu.edu/reports/09tr010.pdf.
3. 3/E. Gamma, R. Johnson, J. Vlissides, and R. Helm. Design Patterns: Elements of
Reusable Object-Oriented Software. Addison-Wesley, 1995. URL: http://books.
google.com/books?id=iyIvGGp2550C.
4. John Viega and Gary McGraw. Building Secure Software - How to Avoid Security
Problems the Right Way. Addison-Wesley, September 2002
5. Joseph Yoder and Jeffrey Barcalow. Architectural patterns for enabling application
security. In Fourth Conference on Pattern Languages of Programs, 1998.
6. ISO/IEC TS 17961 C Secure Coding Rules. All rules meant to be enforceable by static analysis



<a href="https://www.freepik.com/free-photos-vectors/background"> Image by freepik - www.freepik.com</a>