# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @berk-ozer/lotide`

**Require it:**

`const _ = require('@berk-ozer/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: assertion function for arrays
* `assertEqual`: assertion function for primitive values
* `assertObjectsEqual`: assertion function for objects
* `countLetters`: counts how many of each letter there is in a string
* `countOnly`: counts only specific values in an array
* `eqArrays`: comparison function for arrays
* `eqObjects`: comparison function for objects
* `findKey`: finds the key in an object whose value matches a certain criteria
* `findKeyByValue`: finds the key in an object by its value
* `flatten`: flattens a nested array (only for 2-level arrays)
* `head`: returns the first value in an array
* `letterPositions`: returns the positions of letters in a string
* `map`: a clone of the Array.prototype.map method
* `middle`: returns the middle element(s) of an array
* `tail`: returns all the values except the first one of an array
* `takeUntil`: takes elements of an array until a condition becomes true
* `without`: returns a copy of an array without certain elements