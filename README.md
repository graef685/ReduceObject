# ReduceObject - jQuery Plugin

Plain JavaScript objects reduce as known from the Array.prototype

### Release with Dependencies !!!
If you include the ```jquery.reduce-object.min.js``` only, be sure jQuery is part of your Project.  
You will get it here:  
*  http://jquery.com/download/ 

### Install - Demo

* Download
* ``` npm install ``` 


### Run - Demo

* ``` node server.js ```
* Open your browser at ```localhost:1234 ```

### API
```js
var result = $.reduceObject(obj, callback, acc);
```
The ```reduceObject``` function takes following arguments:   
```c2hs 
obj:      {Object}   -> the object to reduce
callback: {function} -> the function to reduce with
acc:      {*}        -> the initial value given the first iteration as 'dest' argument
```
The ``` callback ``` function receives following arguments:  
```c2hs
dest   -> previous value
curr   -> actual value in iteration
```


### Usage

* Include ```jquery.reduce-object.min.js``` into your Project

```js
var obj = {
    keyA = { value: 2 },
    keyB = { value: 9 }
};

var result = $.reduceObject(obj, function(dest, curr) {
    dest += curr;
    return dest;
}, { value: 31 });

console.log(result);

// { value: 42 }
```

### Contributors

* Patrick Gräf - graef685@googlemail.com
