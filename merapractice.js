function funkyFunction() {
  var innerVariable = "I'm sort of a secret.";
 
  return function() {
    var inaccessible = "Nothing can touch me.";
 
    return "Funky";
  }
}

var theFunk = funkyFunction();


console.log(theFunk())