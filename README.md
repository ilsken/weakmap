weakmap
=======

Slim shim for WeakMap with non-leaky O(1) lookup time, based on polymer/WeakMap and Benvie/WeakMap

Uses the same basic method as Benvie/WeakMap but with less code.

# Differences from Benvie/WeakMap
- Faster, slimmer, easier to read code (just 40 lines!)
- All WeakMaps data store under one property on the key, easier to debug/delete 
- No monkey patching: This can be a good or a bad thing. Good news is it leaves native functions untouched and everything is less complicated and runs smoother. Bad news is you can get access to the weakmap data via `getOwnPropertyNames` but if this is javascript so if you're trying really hard to break stuff who am I to stop you?
- Assumes ES5, if your enviorment doesn't support `Object.defineProperty` you are expected to provide the appropriate polyfills

# Differences from raynous/weakmap-shim
- No monkey matching (`weakmap-shim` patches `valueOf` and will break if you change it on an object that is used in a weakmap, though it does get rid of the ugly property name problem)
- Slightly smaller but really it's about 300 bytes difference, nothing to write home about
- Probably faster due to less closures being involved but I'm lazy to benchmark. In essence it does the same thing as Benvie/WeakMap and raynos says in his readme that method is faster so let's go with that

# TODO:
- Tests 
- Better documentation
- More serious readme



