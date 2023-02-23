function domainName(url){
    //www catch
    if(url.indexOf('www.') > -1){
        let start = url.indexOf('www.')
        let end = url.indexOf('.', start + 4)
        let domain = url.substring(start + 4, end)
        return domain
        // catch if no www but having //
    } else if(url.indexOf('//') > -1){
        let start = url.indexOf('//')
        let end = url.indexOf('.', start + 2)
        let domain = url.substring(start + 2, end)
        return domain
        //catch for domain.com
    } else {
        let start = 0
        let end = url.indexOf('.')
        let domain = url.substring(start, end)
        return domain
    }
}

console.log(domainName("http://google.com"))
console.log(domainName("www.xakep.ru"))
console.log(domainName('wbgbmx-gdzewu-fjh5jtvykcorikt.io/warez/'))
