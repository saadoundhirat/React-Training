//  use memo will return the cached function or value if only the dependency array has been changed.
//  so this hooks used to handel performance of the rendered  component 

//  the different between useCallback and useMemo hooks is:
// - the callback hook is used to cache the instant of the function and not caching the value of the return from the function itself

// - the useMemo hook is used to cache the instant of the  value of that has been return from the function itself and not caching the function.

//  => when you want to cache value use useMemo , cache function use sueCallback 
