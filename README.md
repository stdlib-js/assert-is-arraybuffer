<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isArrayBuffer

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is an [ArrayBuffer][mdn-arraybuffer].



<section class="usage">

## Usage

```javascript
import isArrayBuffer from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-arraybuffer@deno/mod.js';
```

#### isArrayBuffer( value )

Tests if a value is an [`ArrayBuffer`][mdn-arraybuffer].

```javascript
import ArrayBuffer from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-buffer@deno/mod.js';

var bool = isArrayBuffer( new ArrayBuffer( 10 ) );
// returns true

bool = isArrayBuffer( [] );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';
import Int8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-int8@deno/mod.js';
import Int16Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-int16@deno/mod.js';
import Int32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-int32@deno/mod.js';
import Uint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@deno/mod.js';
import Uint8ClampedArray from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8c@deno/mod.js';
import Uint16Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint16@deno/mod.js';
import Uint32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@deno/mod.js';
import ArrayBuffer from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-buffer@deno/mod.js';
import isArrayBuffer from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-arraybuffer@deno/mod.js';

var bool = isArrayBuffer( new ArrayBuffer( 10 ) );
// returns true

bool = isArrayBuffer( new Float32Array( 10 ) );
// returns false

bool = isArrayBuffer( new Int8Array( 10 ) );
// returns false

bool = isArrayBuffer( new Uint8Array( 10 ) );
// returns false

bool = isArrayBuffer( new Uint8ClampedArray( 10 ) );
// returns false

bool = isArrayBuffer( new Int16Array( 10 ) );
// returns false

bool = isArrayBuffer( new Uint16Array( 10 ) );
// returns false

bool = isArrayBuffer( new Int32Array( 10 ) );
// returns false

bool = isArrayBuffer( new Uint32Array( 10 ) );
// returns false

bool = isArrayBuffer( new Float64Array( 10 ) );
// returns false

bool = isArrayBuffer( new Array( 10 ) );
// returns false

bool = isArrayBuffer( {} );
// returns false

bool = isArrayBuffer( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert-is-sharedarraybuffer`][@stdlib/assert/is-sharedarraybuffer]</span><span class="delimiter">: </span><span class="description">test if a value is a SharedArrayBuffer.</span>
-   <span class="package-name">[`@stdlib/assert-is-typed-array`][@stdlib/assert/is-typed-array]</span><span class="delimiter">: </span><span class="description">test if a value is a typed array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-arraybuffer.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-arraybuffer

[test-image]: https://github.com/stdlib-js/assert-is-arraybuffer/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-is-arraybuffer/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-arraybuffer/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-arraybuffer?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-arraybuffer.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-arraybuffer/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-arraybuffer/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-arraybuffer/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-arraybuffer/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-is-arraybuffer/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-arraybuffer/main/LICENSE

[mdn-arraybuffer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer

<!-- <related-links> -->

[@stdlib/assert/is-sharedarraybuffer]: https://github.com/stdlib-js/assert-is-sharedarraybuffer/tree/deno

[@stdlib/assert/is-typed-array]: https://github.com/stdlib-js/assert-is-typed-array/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
