let i = 0;
let theInterval = setInterval(function() {
  console.log("probando setInterval");
  if (i === 3) {
    clearInterval(theInterval)
  }
  i++;
}, 1000);
