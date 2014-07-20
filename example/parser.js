var React = require('react'),
	reactParser = require('./../lib/index');


var html = '<div data-id="1" class="hey this is a class" style="width:100%;height: 100%;"><article id="this-article"><p>hey this is a paragraph</p><div><ul><li>1</li><li>2</li><li>3</li></ul></div></article></div>';

var parsedComponent = reactParser(html, React);

console.log('Original : ' + html);
console.log('Converted: ' + React.renderComponentToStaticMarkup(parsedComponent));
console.log(html == React.renderComponentToStaticMarkup(parsedComponent));