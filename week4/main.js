var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://fhp2000.github.io/fhp2000.github.io/cities1.json');
ourRequest.onload = function () {
    console.log(ourRequest.responseText);
};
ourRequest.send();