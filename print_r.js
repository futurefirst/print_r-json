/**
 * An approximate equivalent of PHP's print_r function, pretty-prints almost any type as JSON.
 *
 * @flow
 * @param                   obj Just about anything
 * @param  {Boolean}        rtn Whether to return the output, rather than printing to console
 * @return {Boolean|String}     True if printing, a string if returning
 */
function print_r(obj /*:any*/, rtn /*:?boolean*/) {
  var result = JSON.stringify(obj, null, 2);
  if (rtn) {
    return result;
  } else {
    console.log(result);
    return true;
  }
}

exports = print_r;
