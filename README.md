# pss-loader
Webpack loader for [`pss-lang`](https://github.com/eveningkid/pss-lang).  

Compatible css-in-js librairies:
- [styled-components](https://www.styled-components.com)

## Install
**Depending on the styling library you're using e.g. styled-components, we assume that it is already installed.**

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

## Use it
```sass
// Button.pss
button.Button {
  // `props.theme.white`
  color: $theme.white;

  &:hover {
    color: red;
  }

  &:isSelected {
    // `color` set to `props.isSelectedColor` when `props.isSelected` is true
    color: $isSelectedColor;
  }
}
```

```js
import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button.pss';

ReactDOM.render(
  <Button>Hello World</Button>,
  document.getElementById('root')
);
```

## License
[eveningkid](https://twitter.com/eveningkid) @ MIT
