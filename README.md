weakmap
=======

Slim shim for WeakMap with non-leaky O(1) lookup time, based on polymer/WeakMap and [Benvie/WeakMap][weakmap]

Uses the same basic method as [Benvie/WeakMap][weakmap] but with less code.
# Why another shim?
Mainly because the most [feature complete one][weakmap] added random properties to any object you used with it per weakmap you used it with. This does bad things for optimization since after a certain number of added properties v8 gives up and puts your object into slow hash-table mode. `ilsken/weakmap` stores all it's data for under one property (each weakmap then gets a key on this property, since it won't effect the optimization of the parent object).

On top of that this one is only 40 lines and it's pretty easy to understand what's going on. I also kept any funny buisiness like monkey patching out of it

# Differences from [Benvie/WeakMap][weakmap]
- Faster, slimmer, easier to read code (just 40 lines!)
- All WeakMaps data store under one property on the key, easier to debug/delete 
- No monkey patching: This can be a good or a bad thing. Good news is it leaves native functions untouched and everything is less complicated and runs smoother. Bad news is you can get access to the weakmap data via `getOwnPropertyNames` but this is javascript so if you're trying really hard to break stuff who am I to stop you?
- Assumes ES5, if your enviorment doesn't support `Object.defineProperty` you are expected to provide the appropriate polyfills

# Differences from [raynos/weakmap-shim][raynos]
- No monkey matching ([weakmap-shim][raynos] patches `valueOf` and will break if you change it on an object that is used in a weakmap, though it does get rid of the ugly property name problem)
- Slightly smaller but really it's about 300 bytes difference, nothing to write home about
- Probably faster due to less closures being involved but I'm lazy to benchmark. In essence it does the same thing as [Benvie/WeakMap][weakmap] and raynos says in his readme that method is faster so let's go with that

# TODO:
- Tests 
- Better documentation
- More serious readme


[weakmap]: https://github.com/Benvie/WeakMap
[raynos]: https://github.com/raynos/weakmap-shim
