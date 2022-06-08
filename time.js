// month converter from index / 0-11 values
function covertMonth(num){
    let months = ['Jan','Feb','Mar','Apr','May','Jun',
                  'Jul','Aug','Sep','Oct','Nov','Dec'];
    // look into index with num 0-11
    let computedRes = months[num];
    return computedRes;
}

// time func
function Time(){
    // important to get new instant of the Date referrance
    let date = new Date();
    this.time = date.toLocaleTimeString();
    this.year = date.getUTCFullYear();
    this.day = date.getUTCDate();
    this.month = date.getUTCMonth();
    this.currentTime = date.toLocaleTimeString() + ' - ' + covertMonth(this.month) + ' ' + this.day + ' ' + this.year;
    return this.currentTime;
}


function timeOutPut(){
    let where = document.getElementById('time');
    where.textContent = Time(); // 1:21:39 AM Dec 17 2017
}

timeOutPut();
setInterval(timeOutPut, 1000);