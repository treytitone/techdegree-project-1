// creating an array of objects to store the quotes
var quotes = [
  {
    quote: "The only thing we have to fear is fear itself.",
    source: "Franklin D. Roosevelt",
    citation: "Inaugural Address",
    year: "1933",
    tags: ["politics","presidents"]
  },
  {
    quote: "It's OK to have your eggs in one basket as long as you control what happens to that basket.",
    source: "Elon Musk",
    tags: ["technology","business"]
  },
  {
    quote: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
    source: "Robert Frost",
    citation: "The Road Not Taken",
    year: "1916",
    tags: ["literature","authors"]
  },
  {
    quote: "You miss 100% of the shots you don’t take.",
    source: "Wayne Gretzky",
    year: "1991",
    tags: ["sports","hockey"]
  },
  {
    quote: "Life is what happens to you while you’re busy making other plans.",
    source: "John Lennon",
    citation: "Beautiful Boy (Darling Boy)",
    tags: ["music"]
  }
];

/*
Below is a function to randomly select a quote from the quotes array.
The function selects a random number between 0 and the length of the array and
uses this number as a way of ranomdly selecting an object within the array and
returning that object.
*/
function getRandomQuote(){
  var quoteObject = Math.floor(Math.random() * quotes.length);
  console.log(quotes[quoteObject]);
  return (quotes[quoteObject]);
}

/*
printQuote calls the getRandomQuote function and stores the returned quote object in a variable
printQuote constructs a string containing the different properties of the quote in HTML
*/

function printQuote() {
  var quote = getRandomQuote();
  // The series of if statements below check different object properties to determine which HTML to construct.
  // The first checks if both the citation and year exist.
  if (typeof quote.citation !== "undefined" && typeof quote.year !== "undefined"){
  document.getElementById('quote-box').innerHTML = '<p class="quote">' + quote.quote + '</p><p class="source">' + quote.source + '<span class="citation">' + quote.citation + '</span><span class="year">' + quote.year + '</span></p>';
} //This checks if citation exists but year does not.
  else if (typeof quote.citation !== "undefined" && typeof quote.year === "undefined") {
  document.getElementById('quote-box').innerHTML = '<p class="quote">' + quote.quote + '</p><p class="source">' + quote.source + '<span class="citation">' + quote.citation + '</span>';
} //This checks if year exists but citation does not.
  else if (typeof quote.citation === "undefined" && typeof quote.year !== "undefined"){
  document.getElementById('quote-box').innerHTML = '<p class="quote">' + quote.quote + '</p><p class="source">' + quote.source + '<span class="year">' + quote.year + '</span></p>';
} //If it made it to this point then we can assume that citation and year both do not exist
  else {
  document.getElementById('quote-box').innerHTML = '<p class="quote">' + quote.quote + '</p><p class="source">' + quote.source + '</p>';
}
var red = Math.floor(Math.random() * 256 );
var green = Math.floor(Math.random() * 256 );
var blue = Math.floor(Math.random() * 256 );
var rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
document.body.style.backgroundColor = rgbColor;
}

//call printQuote function to load initial quote
printQuote();

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// refresh the quote every 30 seconds automatically even if button is not clicked
var intervalID = window.setInterval(printQuote, 30000);
