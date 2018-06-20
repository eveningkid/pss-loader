/**
 * PSS lang adapter for Styled Components
 * www.styled-components.com
 */

function formatPropertyValue(propertyValue) {
  switch (propertyValue.type) {
    default:
    case 'raw':
      return propertyValue.value;

    case 'computed':
      return "${props => props." + propertyValue.value + "}";
  }
}

function formatStyle(style) {
  if (style.property) {
    // StyleProperty
    return `${style.property}: ${formatPropertyValue(style.value)};\n`;
  } else {
    // StyleElement
    if (style.selector.type === 'conditional') {
      return "${props => " + style.selector.name + " && css`\n" + formatStyles(style.styles) + "`}\n";
    } else {
      return `${style.selector.name} {\n${formatStyles(style.styles)}}\n`;
    }
  }
}

function formatStyles(styles) {
  let output = '';
  for (const style of styles) {
    output += formatStyle(style);
  }
  return output;
}

module.exports = function styledComponentsAdapter(stylesheet) {
  return [
    "const styledComponents = require('styled-components');",
    "const styled = styledComponents.default;",
    "const css = styledComponents.css;",
    `module.exports = styled.${stylesheet.selector.options.extendFrom}\``,
    `${formatStyles(stylesheet.styles)}\`;`,
  ].join('\n');
};
