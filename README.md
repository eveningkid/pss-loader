# pss-loader
Webpack loader for [`pss-lang`](https://github.com/eveningkid/pss-lang).  

Compatible css-in-js librairies:
- [styled-components](https://www.styled-components.com)

## Install
```
npm install pss-loader
```
or
```
yarn add pss-loader
```

👨‍💻👩‍💻 [Read the tutorial on Medium (soon added)](https://medium.com/@eveningkid)

## Configure Webpack
```js
// Inside webpack.config.js
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.pss$/,
        use: {
          loader: 'pss-loader',
          options: {
            stylingLibrary: 'styled-components',
          },
        },
      },
      // ...
    ]
  }
};
```

## License
[eveningkid](https://twitter.com/eveningkid) @ MIT
