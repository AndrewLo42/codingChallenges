// While working on your latest app, you encounter a bug: your code lets users type in ANYTHING when they should be inputting a valid URL.As a software engineer, you should always be writing code assuming that your users may not input the value that you are expecting.In this case, why don't you write a function that checks if a string is a valid URL or not?

function validURL(link) {
  var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
  return pattern.test(link);
}

console.log(validURL("https://andrewclo.com"));
