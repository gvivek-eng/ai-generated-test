const quotes = [
  { quote: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { quote: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
  { quote: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
  { quote: "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.", author: "Steve Jobs" },
  { quote: "People who are crazy enough to think they can change the world, are the ones who do.", author: "Rob Siltanen" }
];

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const btn = document.getElementById("new-quote-btn");

function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteText.textContent = `"${randomQuote.quote}"`;
  authorText.textContent = `- ${randomQuote.author}`;
}

btn.addEventListener("click", displayRandomQuote);