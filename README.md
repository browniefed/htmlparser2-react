htmlparser2-react
================

Parses raw html use htmlparser2 to a React DOM structure.

Apparently React checks instance of ReactDescriptor thus requiring the same React lib to parse/render a component. Ohwell, so just pass in your React to the function.

So the process for now is
```
npm install htmlparser2-react
npm install react
```

Quick example
```javascript
var reactParser = require('htmlparser2-react'),
	React = require('react');


var html = '<div data-id="1" class="hey this is a class" style="width:100%;height: 100%;"><article id="this-article"><p>hey this is a paragraph</p><div><ul><li>1</li><li>2</li><li>3</li></ul></div></article></div>';

var parsedComponent = reactParser(html, React);


console.log(html == React.renderComponentToStaticMarkup(parsedComponent));
//logs true
```


This by no means takes into account everything, like CData, no special cases for script tags, other stuff that I have no idea about.

It can be browserified for ES5 compliant browsers.

There are likely more elegant solutions, like actually hooking into htmlparser2 DOMHandler thus not parsing to an object then converting to React but I can do that later.


Should you use this? No.

Why would you use this? Maybe you don't want dangerously set innerhtml?

Have fun

Log issues if you find any, I'm sure there are