---
path: "/RoseChecker"
cover: "../RoseChecker/CertSei.png"
date: "2019-08-30"
title: "RoseCheckers for CERT Secure Coding Standards for C and C++ checks"
tags: ['Static Analysis', 'Sofware Assurance', 'C']

published: true
---

Rosecheckers is a static analysis tool for C/C++ source code. Specifically, it applies the [CERT Secure Coding Standards for C and C++ checks](https://www.securecoding.cert.org).
 
In general, relative to cppcheck or "gcc -wall" it reports more issues - not all of which are cause for concern. See [previous article where Static Analysis Signal-to-Noise](https://www.mytechiebits.com/SoftwareAssurance) was discussed.


# Setup Rosecheckers
Rosecheckers depends on Rose compiler which in turn depdens on Boost.

A pre-built VM is available at https://sourceforge.net/projects/rosecheckers/. However, this is ~3.7GB. 

Having played with this via VirtualBox, it is not as convenient to use as via a Docker container.

For convenience, a pre-built Docker container will be used.



Build the container
```
sudo docker pull kontotto/rosecheckers # grab an existing rosechecker docker container
```

Run the container
 ```
cd ./Hello # change current/present working dir to Hello where hello.c/h lives

sudo docker run -i  -v $(pwd):/home/ -t kontotto/rosecheckers rosecheckers /home/hello.c > Rosecheckers.txt  # from host machine, run rosechecker in docker container mapping dir containing hello.c into container, and store results in Rosecheckers.txt

```


# Example Output
This is a short extract of the output
```
hello.c:10: error: STR37-C: Arguments to character-handling functions must be representable as an unsigned char
hello.c:15: warning: INT07-C: Use only explicitly signed or unsigned char type for numeric values
hello.c:24: warning: EXP09-C: malloc called using something other than sizeof()

```

We can then look at a detailed explanation of each issue 
* [STR37-C: Arguments to character-handling functions must be representable as an unsigned char](https://wiki.sei.cmu.edu/confluence/display/c/STR37-C.+Arguments+to+character-handling+functions+must+be+representable+as+an+unsigned+char)
* [INT07-C: Use only explicitly signed or unsigned char type for numeric values](https://wiki.sei.cmu.edu/confluence/display/c/INT07-C.+Use+only+explicitly+signed+or+unsigned+char+type+for+numeric+values).


