const assign = require('object-assign');
// stripped from object-loop reduce
const reduce = function reduce (obj, callback, initialValue) {
    if (Array.isArray(obj)) {
      return (arguments.length > 2)
        ? obj.reduce(callback, initialValue)
        : obj.reduce(callback)
    }
    if (typeof obj !== 'object' && typeof obj !== 'function') {
      throw new TypeError(obj + ' must be an object')
    }
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' must be a function')
    }
    var keys = Object.keys(obj)
    var noInitialValue = arguments.length < 3 // initial value can be null or undefined
    if (keys.length === 0 && noInitialValue) {
      throw new Error('Reduce of empty object with no initial value')
    }
    if (keys.length === 1 && noInitialValue) {
      return obj[keys[0]] // return first value
    }
    var finalValue = noInitialValue
      ? keys.reduce(reduction)
      : keys.reduce(reduction, initialValue)
    function reduction (prevVal, key, i) {
      if (noInitialValue && i === 1) {
        // if no initial value, prevVal is first KEY
        prevVal = obj[prevVal]
      }
      var val = obj[key]
  
      return callback(prevVal, val, key, obj)
    }
  
    return finalValue
  }
const DEFAULT_STYLES = require('./defaults/styles');

/**
 * Returns attributes for a given class
 *
 *     data = { styles: { ':root': { color: 'gold', dir: 'none' } } }
 *     applyStyle(data, [':root'])
 *     => ['color="gold"', 'dir="none"']
 */

function applyStyle (data, classes, options) {
    if (!options) options = {};

    const styles = data.styles || {};

    function applyStyles (acc, stylesheet) {
        return reduce(stylesheet, (styles, val, key) => {
            if (classes.indexOf(key) === -1) return styles;
            return assign({}, styles, val);
        }, acc);
    }

    let result = {};
    result = assign({}, result, options.before || {});
    result = applyStyles(result, DEFAULT_STYLES);
    result = applyStyles(result, data.styles || {});
    result = assign({}, result, options.after || {});
    return renderStyle(result, options);
}

/**
 * Renders key/value into an attribute string
 *
 *     renderStyle({ color: 'gold', dir: 'none' ])
 *     => ['color="gold"', 'dir="none"']
 */

function renderStyle (properties, options) {
    const resStyles = []
    Object.keys(properties).forEach((key, _)=>{
        let val = properties[key];
        if (val == null) return;
        resStyles.push(`${key}=${stringify(val)}`);
    });
    return resStyles.filter(s => s != null);
}

function stringify (val) {
    if (typeof val === 'string' && /^<.*>$/.test(val)) {
        return val;
    } else {
        return JSON.stringify(val);
    }
}

/*
 * Export
 */

module.exports = applyStyle;
