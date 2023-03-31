import 'url-polyfill'

/**
 * @important
 * Object.fromEntries will not work in IE
 *
 * @see
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 */
if (!Object.entries) {
  Object.entries = function (obj) {
    let ownProps = Object.keys(obj),
      ownValues = Object.values(obj),
      i = ownProps.length,
      resArray = new Array(i) // preallocate the Array
    while (i--) resArray[i] = [ownProps[i], ownValues[i]]

    return resArray
  }
} //Array(2)["ownProps[i]","ownValues[i]"]

/**
 * @important
 * Object.fromEntries will not work in IE
 * @see
 * https://gitlab.com/moongoal/js-polyfill-object.fromentries/blob/master/index.js
 *
 * @see
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
 */
if (!Object.fromEntries) {
  Object.defineProperty(Object, 'fromEntries', {
    value(entries) {
      return [...entries].reduce((obj, [key, val]) => {
        obj[key] = val
        return obj
      }, {})
    },
  })
}

/**
 * @important
 * Array.prototype.reduce will not work in IE
 *
 * @see
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 */
if (!Array.prototype.reduce) {
  Object.defineProperty(Array.prototype, 'reduce', {
    value: function (callback /*, initialValue*/) {
      if (this === null) {
        throw new TypeError(
          'Array.prototype.reduce ' + 'called on null or undefined'
        )
      }
      if (typeof callback !== 'function') {
        throw new TypeError(`${callback} is not a function`)
      }

      // 1. Let O be ? ToObject(this value).
      const o = Object(this)

      // 2. Let len be ? ToLength(? Get(O, "length")).
      const len = o.length >>> 0

      // Steps 3, 4, 5, 6, 7
      let k = 0
      let value

      if (arguments.length >= 2) {
        value = arguments[1]
      } else {
        while (k < len && !(k in o)) {
          k++
        }

        // 3. If len is 0 and initialValue is not present,
        //    throw a TypeError exception.
        if (k >= len) {
          throw new TypeError(
            'Reduce of empty array ' + 'with no initial value'
          )
        }
        value = o[k++]
      }

      // 8. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kPresent be ? HasProperty(O, Pk).
        // c. If kPresent is true, then
        //    i.  Let kValue be ? Get(O, Pk).
        //    ii. Let accumulator be ? Call(
        //          callbackfn, undefined,
        //          « accumulator, kValue, k, O »).
        if (k in o) {
          value = callback(value, o[k], k, o)
        }

        // d. Increase k by 1.
        k++
      }

      // 9. Return accumulator.
      return value
    },
  })
}

/**
 * @important
 * Array.prototype.find will not work in IE
 *
 * @see
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 */
if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    value(predicate) {
      if (this == null) {
        throw TypeError('"this" is null or not defined')
      }

      const o = Object(this)
      // tslint:disable-next-line: no-bitwise
      const len = o.length >>> 0
      if (typeof predicate !== 'function') {
        throw TypeError('predicate must be a function')
      }
      // tslint:disable-next-line: use-named-parameter
      const thisArg = arguments[1]

      let k = 0
      while (k < len) {
        const kValue = o[k]
        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue
        }
        k++
      }
      return undefined
    },
    configurable: true,
    writable: true,
  })
}
