function generateHashtag (str) {
    if(str == '' || str[0] == ' '){
      return false
    }
  
    //split the string on spaces
    let words = str.split(' ')
    //remove extra spaces
    words = words.filter(el => el !== '' && el !== ' ')
    //capitalize first word
    words = words.map(el => el = el[0].toUpperCase() + el.slice(1))
  
    //join back together with a '#'
    let hashtag = '#' + words.join('')
    
    //check if longer than 140 chars
    return hashtag.length > 140 ? false : hashtag
  }

  console.log(generateHashtag("code" + " ".repeat(140) + "wars"))