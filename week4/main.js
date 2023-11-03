var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://f28wp-lab1/week4/cities1.json');
ourRequest.onload = function() {
console.log(ourRequest.responseText);
};
ourRequest.send();