function removeUrlAnchor(url){
    // TODO: complete
    let end = url.indexOf('#')
    if(end > -1){
      let domain = url.slice(0, end)
      return domain
    }
    
    return url
  }