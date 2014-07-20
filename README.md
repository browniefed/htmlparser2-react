htmlparser2-react
================

Parses raw html use htmlparser2 to a React DOM structure.

Quick example
```javascript
var reactParser = require('./../lib/index'),
	React = require('react');


var html = '<div data-id="1" class="hey this is a class" style="width:100%;height: 100%;"><article id="this-article"><p>hey this is a paragraph</p><div><ul><li>1</li><li>2</li><li>3</li></ul></div></article></div>';

var parsedComponent = reactParser(html);


console.log(html == React.renderComponentToStaticMarkup(parsedComponent));
//logs true
```


This by no means takes into account everything, like CData, no special cases for script tags.

It can be browserified for ES5 compliant browsers.


Should you use this? No.
Why would you use this? Maybe you don't want dangerously set innerhtml?

Have fun
Log issues if you find any, I'm sure there are