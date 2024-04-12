function checkURL() {
  var urlInput = document.getElementById("url-input").value;
  var result = document.getElementById("result");

  // Regular expressions for matching harmful URL patterns
  var harmfulPatterns = [
    /porn/,
    /adult/,
    /violence/,
    /hate-speech/,
    /gambling/,
    /malware/,
  ];

  // Check if the URL matches any harmful pattern
  var isSafe = true;
  for (var i = 0; i < harmfulPatterns.length; i++) {
    if (harmfulPatterns[i].test(urlInput)) {
      isSafe = false;
      break;
    }
  }

  // Display result based on filtering outcome
  if (urlInput === "") {
    result.textContent = "Please enter a URL";
  } else if (isSafe) {
    result.textContent = "This website is safe for children";
  } else {
    result.textContent = "This website is not safe for children";
  }
}
