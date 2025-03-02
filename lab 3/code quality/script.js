function hello(name) {
    let phrase = `Hello, ${name}!`;
    debugger;  // <-- the debugger stops here
    say(phrase);
}

function say(phrase) {
    phrase = "Hello, John!"
    alert(`**${phrase} **`);
}

for (let i = 0; i < 5; i++) {
    console.log("value,", i);
}

function showPrimes(n) {
    for (let i = 2; i < n; i++) {
      if (!isPrime(i)) continue;
      alert(i);
    }
}  
function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if (n % i == 0) return false;
    }  
    return true;
}


//
describe("pow", function() {
    it("raises to n-th power", function() {
      assert.equal(pow(2, 3), 8);
    });

});

