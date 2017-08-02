# Spread'em

spread'em is a really small, relatively useless package that will simply take an object and return a new shallow copy using the spread operator.


### Usage

To run the example:

```
npm install --save spreadem
npm run example
```

The example will log out 2 objects - the original object and a new copy of the object that has been mutated. Note that the original object has not been altered.

Q: Why would you use this package?

> A: You probably shouldn't. It's dumb and you could easily whip up this functionality yourself.

Q: Then why did you make this package in the first place?
> A: The purpose of this package is simply to explore publishing a package to the mighty npm Registry. spreadem is not intended for production, use it entirely at your own risk. If you want to make a PR to this repo to make it better, go for it.

### Reason for creating this package

While using [React](https://facebook.github.io/react/), I have often seen people create what they believe to be a new 'copy' of state called `newState`, manipulate `newState`, then run `this.setstate(newState);`. In React, [this is a big no-no](https://facebook.github.io/react/docs/state-and-lifecycle.html#using-state-correctly), you are supposed to call `setState();`.

Little do they realise that they have now just mutated state directly, because by using `let newState = this.state;` we are actually creating a new reference to the original object, not creating a new object. This is a nuance of JavaScript, [more useful info can be found here](https://stackoverflow.com/questions/29050004/modifying-a-copy-of-a-javascript-object-is-causing-the-original-object-to-change).

Incorrect Example:

```
let newState = this.state; // newState is not brand new, it is just a reference to this.state.
newState.someProperty = "new value"; // Changing this.state changes newState and vice-versa. They are one and the same thing!
this.setState(newState); // pointless - you have already manipulated state.
// Do not pass Go, do not collect $200.
```

Naughty naughty! Doing the above is the same as the following:

```
this.state.someProperty = "new value"; // mutating state directly - oh the shame!
```

Remember, we are not supposed to mutate state directly ourselves. Instead we should pass an updated copy of state/key-value to `setState()`. From there, React queues up the state changes and asynchronously updates state in the most efficient way. Correct example:

```
let newState = {...this.state}; // make a new 'copy'
newState.someProperty = "new value"; // change the copy
this.setState(newState);
```

Using spread'em:

```
let newState = spreadem(this.state);
newState.someProperty = "new value";
this.setState(newState);
```

Under the hood, here's a simplified version of how spread'em works:

```
export const spreadem = (object) => {
    return {...object}; // yes it's really that simple
}
```

### Future functionality

I would like to increase the scope of spread'em to work with arrays as well:

```
export const spreadem = (array) => {
    return [...array];
}
```

### Todo list

- Upgrade to work with arrays.