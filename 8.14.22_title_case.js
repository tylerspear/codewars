function titleCase(title, minorWords) {
    let excluded = !minorWords ? '' : minorWords

    if(!title){
      return ''
    }



    excluded = excluded.split(' ').map(el => el.toLowerCase())
    let titleArr = title.split(' ')

    titleArr.forEach((el, ind) => {
      if(ind === 0 || excluded.indexOf(el.toLowerCase()) < 0){
        titleArr[ind] = el[0].toUpperCase() + el.slice(1).toLowerCase()
      } else {
        titleArr[ind] = el.toLowerCase()
      }
    })
    return titleArr.join(' ')
  }

  console.log(titleCase('a clash of KINGS', 'a an the of'))
  console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'))
  console.log(titleCase('the quick brown fox'))