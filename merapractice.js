function outerFunction() {
  var innerVariable = "I'm sort of a secret.";
 
  return function innerScope() {
    var inaccessible = "Nothing can touch me.";
 
    return innerVariable;
  }
}

var myScope = outerFunction();
 
// the stringified version of `innerScope()`
myScope;
Cool! What happens if we try to call innerScope() directly?

innerScope();
This will throw the error undefined is not a function (very helpful, JavaScript). But if we call myScope (the variable to which we assigned the output of outerFunction()):

myScope();