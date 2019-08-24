class StringUtility {
  findVowels(text) {
    if(text && typeof text == 'string') {
      let vowels = 'aeiouAEIOU'.split('');
      let vowelString = '';
      for(let letter of text.split('')) {
        if(vowels.includes(letter)) {
          vowelString += letter;
        }
      }
      return vowelString;
    }
    return "";
  }

  toLeetSpeak(text) {
    return text;
  }
}

module.exports = StringUtility;