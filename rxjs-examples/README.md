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
	npm run subjectTest
	npm run subjectTest2

or
	node emptyTest
	etc.
	
### RxJS Operators
	map: transforms each item, creates and returns a new Observable object
	switchMap: returns the Observable object that the function body returns.
		 only one inner subscription should be active at a time.
	mergeMap: more than one inner subscription to be maintained.
	flatMap: an alias for mergeMap

### Subject

Every Subject is an Observable.
Every Subject is an Observer. It is an object with the methods next(v), error(e), and complete(). 
To feed a new value to the Subject, just call next(theValue), and it will be multicasted to the 
Observers registered to listen to the Subject.
	