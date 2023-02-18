module.exports = reverseString;

function reverseString(string) {
    const splitstring = string.split(''); // convertit la chaîne en un tableau de caractères
    const reversedSplitstring = splitstring.reverse(); // inverse le tableau
    const reversedstring = reversedSplitstring.join(''); // convertit le tableau en une chaîne de caractères
    return reversedstring;
  }
  const string = 'cool';
  console.log(reverseString(string));
  
 