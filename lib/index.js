var htmlparser = require('htmlparser2');
var React;

function parse(html, R) {
	React = R;
	return traverseToReact(parseHtmlToObj(html)[0]);
}

function traverseToReact(obj) {
	if (Array.isArray(obj)) {
		obj = obj[0];
	}

	var type = obj.type,
		tagName = obj.name,
		children = obj.children,
		comp;

	if (type == 'tag') {
		comp = React.DOM[tagName].apply(null, [buildArgs(obj.attribs)].concat(children.map(traverseToReact)));
	} else if (type == 'text' ) {
		comp = obj.data;
	}
	return comp;
}

function buildArgs(obj) {
	if (isEmptyObject(obj)) {
		return null;
	}
	var key,
		attribObj = {},
		regularKeys = /(data-||aria-)?/;

	for (key in obj) {
		if (key == 'class') {
			attribObj.className = obj[key];
		} else if (key == 'style') {
			attribObj.style = parseStyle(obj[key].split(';'));
		} else if (key.match(regularKeys)[1]) {
			attribObj[key] = obj[key];
		} else if (key == 'for') {
			attribObj.htmlFor = obj[key];
		} else {
			attribObj[camelCase(key)] = obj[key];
		}
	}
	return attribObj;
}
function isEmptyObject(obj) {
	return Object.getOwnPropertyNames(obj).length === 0;
}
function parseStyle(styles) {
	var styleObj = {},
		styleSplit;
	if (!styles.length || !Array.isArray(styles)) {
		return {};
	}

	styles.forEach(function(style) {
		if (!style) {
			return;
		}
		styleSplit = style.split(':');
		styleObj[camelCase(styleSplit[0])] = styleSplit[1];
	});
	return styleObj;
}
function camelCase(input) { 
    return input.toLowerCase().replace(/-(.)/g, function(match, group1) {
        return group1.toUpperCase();
    });
}

function parseHtmlToObj(html) {
  var handler = new htmlparser.DomHandler();
  var parser = new htmlparser.Parser(handler);
  parser.parseComplete(html);
  return handler.dom;
}

module.exports = parse;