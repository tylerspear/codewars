function formatDuration (seconds) {
    // Complete this function 
    if(seconds == 0){
        return 'now'
    }

    let remaining = seconds
    let seconds = 0
    let minutes = 0
    let hours = 0
    let days = 0
    let years = 0

    while(remaining >=0){
      if(remaining >= 60){
        minutes += Math.floor(remaining/60)
        remaining = remaining % 60
      }
      if(remaining >= 60){
        hours += Math.floor(remaining/60)
        remaining = remaining % 60
      }
      if(remaining >= 1){
        seconds += Math.floor(remaining/1)
        remaining = remaining % 1
      }
    }
}