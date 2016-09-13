print_r-json
============

An approximate equivalent of PHP's print_r function, pretty-prints almost any type as JSON.
Parameters and returns are the same as for the PHP original.
Functions are ignored.

Reference: http://php.net/manual/en/function.print-r.php

### Example:
    const print_r = require('print_r-json');
    const test = { name: 'Dave', num: 12345, bool: true, func: something => console.log(something) };
    print_r(test);

    {
      "name": "Dave",
      "num": 12345,
      "bool": true
    }
