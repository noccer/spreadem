# Spread'em

## **WORK YET TO BE COMPLETED/PUBLISHED.**
## **THERE IS NO POINT INSTALLING THIS PACKAGE, IT DOES NOTHING YET**

spread'em is a really small, relatively useless package that will simply take an object and return a new shallow copy using the spread operator.


### Usage

Q: Why would you use this package?

> A: You probably shouldn't. It's dumb and you could easily whip up this functionality yourself.

Q: Then why did you make this package in the first place?
> A: The purpose of this package is simply to explore publishing a package to the mighty npm. It is not intended for production, use it entirely at your own risk. If you want to make a PR to this repo, go for it.

Legit instructions coming soon once I actually code this thing up...

### Reason for creating this package

While using React, I have often seen people create what they believe to be a new 'copy' of state called `newState`, manipulate `newState`, then run `this.setstate(newState);`.

Little do they realise that they have already mutated state directly.

Bad example:

```
let newState = this.state; // newState is not brand new, it is just a reference to this.state.
newState.someProperty = "new value"; // Changing this.state changes newState and vice-versa. They are one and the same thing!
this.setState(newState); // pointless - you have already manipulated state. Do not pass Go, do not collect $200.
```

Naughty naughty! This is the exact same as above:

```
this.state.someProperty = "new value"; // mutating state directly, the shame!
```

Good example:

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

Under the hood, how spread'em works:

```
export const spreadem = (object) => {
    return {...object}; // yes it's really that simple
}
```

### Future functionality

I would hope to increase the scope of spread'em to work with arrays as well:

```
export const spreadem = (array) => {
    return [...array];
}
```

### Todo list

- Actually make the function and publish
- Put into a git repo
- Typescript definition file