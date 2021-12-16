---
title: Filter array with multiple conditions
description: Javascript array problem
date: '2021-12-12'
draft: false
slug: '/pensieve/filter-array-with-multiple-conditions'
tags:
  - Javascript
  - filter
  - array
---

## Problem

Javascript filter array with multiple conditions

## Solution

When you want to filter an array of objects with a single value or condition, you can directly use [.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method.

But when to filter an array of objects with multiple dynamic conditions things do get tricky. You can use the below solution to achieve the filtering of javascript array of objects with multiple values.

```javascript
const searchCriteria = {
  city: 'Rio',
  gender: 'Male',
};

const myArray = [
  {
    first_name: 'Rube',
    gender: 'Male',
    city: '',
  },
  {
    first_name: 'Nollie',
    gender: 'Male',
    city: 'Rio',
  },
  {
    first_name: 'Susana',
    gender: 'Female',
    city: 'Vetlanda',
  },
];

const results = myArray.filter(item => {
  for (var key in searchCriteria) {
    if (item[key] === undefined || item[key] != filter[key]) return false;
  }
  return true;
});

console.log(results);
// [
//  {
//    "first_name": "Nollie",
//    "gender": "Male",
//    "city": "Rio"
//  }
// ]
```
