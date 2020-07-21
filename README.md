# YounitedCreditTest
## Installation
Steps to run tests on this repo are :

```
$ clone the repository
$ npm install
$ npm run cy:open
```
## Générer un rapport HTML agrégé mochawesome

```
$ npm run cy:run:report
$ npx mochawesome-merge "cypress/results/*.json > mochawesome.json" 
$ npx marge mochawesome.json

```