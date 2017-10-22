function reformatDate(dates) {
    var month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var result = [];
    var regex = /\d+/g;
    for(let i = 0, len = dates.length; i < len; i++) {
        var newArr = dates[i].split(" ")
        var mm = Number(month.indexOf(newArr[1])) + 1
        mm = mm < 10 ? '0' + mm : mm
        var yy = newArr[0].match(regex) < 10  ? '0' + newArr[0].match(regex) : newArr[0].match(regex)
        result.push(newArr[2] + '-' + mm + '-' + yy)
    }
    console.log(result)
}

var dates = ['20th Oct 2000', '6th Jun 1900']
reformatDate(dates)
