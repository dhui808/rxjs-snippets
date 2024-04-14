### Create 	
	npm init
	(package.json is created)

### Modify package.json
	"type": "module",
	
### Install RxJS
	npm i rxjs

### Run
	npm run emptyTest
	npm run mapTest
	npm run switchMapTest
	npm run switchMapTest2
	npm run mergeMapTest

### RxJS Operators
	map: transforms each item, creates and returns a new Observable object
	switchMap: returns the Observable object that the function body returns.
		 only one inner subscription should be active at a time.
	mergeMap: more than one inner subscription to be maintained.
	flatMap: an alias for mergeMap
	