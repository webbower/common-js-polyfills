/**
 * Based on 
 */

if (typeof Element.prototype.hasAttribute !== 'function') {
	Element.prototype.hasAttribute = function(attrName) {
		return this.getAttribute(attrName) != null;
	}
}