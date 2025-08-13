# JavaScript Practice:

## Overview
This project is a **JavaScript practice file** containing small, self-contained exercises with built-in validation and simple unit tests.
It’s intended for learners who want to strengthen their JavaScript fundamentals while practicing Git workflows.

The file is located at:
```
add.me.js
```

## Exercises Included
1. **add(a, b)** — Returns the numeric sum of two values (handles numeric strings).
2. **addMeToArray(arr, name, position)** — Returns a new array with the given name inserted.
3. **addMeToObject(obj, key, value)** — Returns a new object with a new key/value pair.
4. **sumArray(numbers)** — Sums all numeric values in an array.
5. **makeAdder(x)** — Returns a function that adds `x` to its argument.

## How to Run
```bash
node add.me.js
```
This will execute the file and run the included **assert-based tests**.

## Requirements
- Node.js 16+
- Git for version control

## Git Workflow Example
```bash
# 1. Clone the repo
git clone <your-repo-url>
cd <repo-folder>

# 2. Create a new branch for practice
git checkout -b js-practice

# 3. Make your edits
nano add.me.js  # or use VS Code

# 4. Commit changes
git add add.me.js
git commit -m "Practice: Implement and test JS functions"

# 5. Push branch
git push origin js-practice

# 6. Create a pull request on GitHub/GitLab/Bitbucket
```

## Extending the Practice
- Add more functions (string manipulation, array methods, object destructuring)
- Replace `assert` tests with **Jest** or **Mocha** for richer test feedback
- Add **ESLint** for linting and code style

## License
This code is for **practice purposes** — free to use and modify.