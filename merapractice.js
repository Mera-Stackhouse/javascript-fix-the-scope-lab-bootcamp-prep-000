function funkyFunction() {
  var innerVariable = "I'm sort of a secret.";
 
  return function innerScope() {
    var inaccessible = "Nothing can touch me.";
 
    return innerVariable;
  }
}

var myScope = outerFunction();
 

//console.log(myScope)

//console.log(innerScope())

console.log(myScope())