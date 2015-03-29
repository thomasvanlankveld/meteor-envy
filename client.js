/** Add environment style to document if it is defined */
if (typeof process.env.STYLE !== "undefined") {
  addStyle(process.env.STYLE);
}

/**
 * Add a string of CSS to the document
 *
 * @param {String} style  A string of CSS
 */
function addStyle(cssString) {
  var head = document.head || document.getElementsByTagName('head')[0],
      style = document.createElement('style');

  style.type = 'text/css';
  if (style.styleSheet){
    style.styleSheet.cssText = cssString;
  } else {
    style.appendChild(document.createTextNode(cssString));
  }

  head.appendChild(style);
}
