# Comparison of rollup vs webpack bundle sizes

<p float="left">
    <img src="https://raw.githubusercontent.com/nialloc9/rollup-vs-webpack/master/screenshots/run.png" alt='Image showing application comparing differant speeds.' width="500">
</p>

### Prerequisites

- install node: <a href="https://nodejs.org/en/download">https://nodejs.org/en/download</a>

## Install

```sh
    npm i -g yarn

    git clone git@github.com:nialloc9/rollup-vs-webpack.git

    cd rollup-vs-webpack

    npm install
```

### Run

```sh
    npm run compile
```

```sh
    npm run compare
```



### Results

- Webpack(988) has a larger bundle size than rollup(84) by 904 bytes.

- Upon inspection of the bundle it is because webpack wraps each module in a function that is internally invoked. This is to scope our code from each file.

- The webpack wrapper function passes in arguements of module, exports, __webpack_require__ to define the imports and exports.

- This scoping of modules makes it safer than rollbar. Also with webpack it includes extra magic for CSS/HTML/image loading. However, this leads to increased bundle sizes.

### Recommendation
 - Use rollbar for simpler modules such as a library.

 - Use webpack for more complicated projects.