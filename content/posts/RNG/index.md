---
path: "/Rng"
cover: "../Jam/header.png"
date: "2018-01-01"
title: "Static Site Generation - again"
tags: ['JAM', 'SSG']

published: true
---


Hardware Random Number Generators (HRNG)
Raw HRNG should not be used directly to provide random numbers. They should only be used to provide a seed for a Pseudo RNG (i.e. a deterministic RNG).

Raw hardware signals may not be random or may change under environmental conditions. Some post-processing is required to ensure the data is deterministically random.

Some SOCs/Chips provide a H/W RNG block that includes the HRNG and the post-processing. These are usually referred to as True Random Number Generators (TRNG)


Seed
The RNG should use a seed with at least the minimum entropy required by the pseudo random number generator.

  

# RNG testing

# Quick Test


# Full Test
The random number generator should pass [FIPS SP800-22] which performs statistical tests on the RNG output.

See ExampleSTSrun.txt for test tool setup and running.

See Random Number Generator for example RNG test done on V/OS products.



Provide 140MB of random data in big endian format to be tested.

e.g. "NIST considers data to be random if all tests are passed yet even truly random data shows a high probability (80%) of failing at least one NIST STS test." https://www.researchgate.net/publication/287224641_On_the_interpretation_of_results_from_the_NIST_statistical_test_suite

NIST Random Bit Generation
https://csrc.nist.gov/projects/random-bit-generation

References
ANSI X9.82: Part 1–2006 Random Number Generation Part 1: Overview and Basic Principles
X9-82 Part 2 Random Number Generation Part 2: Entropy Sources

http://csrc.nist.gov/groups/ST/toolkit/random_number.html

http://vfilvatlas1:8090/download/attachments/3148001/X9.82-3-2007%20Random%20Number%20Generation%20Part%203%20Deterministic%20Random%20Bit%20Generator%20Mechanisms.pdf?api=v2


Interoperable Randomness Beacons
https://csrc.nist.gov/projects/interoperable-randomness-beacons
https://pypi.org/project/nistbeacon/


https://www.random.org/bytes/


https://boallen.com/random-numbers.html has php bitmap code


https://github.com/hmason/randomness_beacon python


This is from http://en.wikibooks.org/wiki/Python_Imaging_Library/Editing_Pixels:

from PIL import Image

img = Image.new( 'RGB', (255,255), "black") # Create a new black image
pixels = img.load() # Create the pixel map
for i in range(img.size[0]):    # For every pixel:
    for j in range(img.size[1]):
        pixels[i,j] = (i, j, 100) # Set the colour accordingly

img.show()