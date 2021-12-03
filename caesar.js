//Picking out getElementById
const btn = document.getElementById('Submit');
const btn2 = document.getElementById('Submit2');
const out = document.querySelector('.output');
const out2 = document.querySelector(".output2");


// Func for encryption
var caesarShift = function (str, amount) {
  // Wrap the amount
  if (amount < 0) {
    return caesarShift(str, amount + 26);
  }

  // Make an output variable
  var output = "";

  // Go through each character
  for (var i = 0; i < str.length; i++) {
    // Get the character we'll be appending
    var c = str[i];

    // If it's a letter...
    if (c.match(/[a-z]/i)) {
      // Get its code
      var code = str.charCodeAt(i);

      // Uppercase letters
      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      }

      // Lowercase letters
      else if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
      }
    }

    // Append
    output += c;
  }

  // All done!
  return output;
};




//Func for Decryption 
var caesarShift1 = function (str, amount) {
    if (amount < 0) {
      return caesarShift1(str, amount - 26);
    }

    // Make an output variable
    var output = "";

    // Go through each character
    for (var i = 0; i < str.length; i++) {
      // Get the character we'll be appending
      var c = str[i];

      // If it's a letter...
      if (c.match(/[a-z]/i)) {
        // Get its code
        var code = str.charCodeAt(i);

        // Uppercase letters
        if (code >= 65 && code <= 90) {
          c = String.fromCharCode(((code - 65 - amount) % 26) + 65);
        }

        // Lowercase letters
        else if (code >= 97 && code <= 122) {
          c = String.fromCharCode(((code - 97 - amount) % 26) + 97);
        }
      }

      // Append
      output += c;
    }

    // All done!
    return output;
  };


//EventListener for encrypt button
btn.addEventListener('click', (e) => {
  e.preventDefault(); // disable the refresh on the page when submit
  const value = document.querySelector(".inpu1").value;
  const key = document.querySelector(".inp2").value;
  out.innerHTML = caesarShift(value, parseInt(key));
});


//EventListener for Decrypt button
btn2.addEventListener('click', (e) => {
  e.preventDefault(); // disable the refresh on the page when submit
  const value2 = document.getElementById('inp3').value;
  const key2 = document.querySelector(".inp4").value;
  out2.innerHTML = caesarShift1(value2, parseInt(key2));
});



