//Question1. Write a loop that makes seven calls to console.log to output the following triangle

// Define the number of rows in the pattern
var rows = 5;

// Outer loop for rows
for (var i = 1; i <= rows; i++) {
  var pattern = "";

  // Inner loop for asterisks in each row
  for (var j = 1; j <= i; j++) {
    pattern += "# ";
  }

  // Print the pattern for the current row
  console.log(pattern);
}

