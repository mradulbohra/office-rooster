import {morning, afternoon, evening} from "./data.js"


function getRandom(arr, absentPersonId)
{
    //console.log(arr.shiftWorkers.length);
    var randomNum = Math.floor(Math.random()*(arr.shiftWorkers.length))
    //console.log(randomNum);
    if(arr.lastSubstitute===null)
    {
        if(randomNum!==absentPersonId)
        return randomNum;
        else return getRandom(arr, absentPersonId)
    }
    else{
        if(randomNum!==absentPersonId && randomNum!==arr.lastSubstitute)
        return randomNum;
        else return getRandom(arr, absentPersonId);
    }
}


function assignFunction(shiftType, absentPersonId)
{
    let arr;
    if(shiftType==="morning")
    arr = morning;
    else if(shiftType==="afternoon")
    arr = afternoon;
    else arr = evening;

    let randomValue = getRandom(arr, absentPersonId);
    
    let randomPerson = arr.shiftWorkers[randomValue];
    console.log(randomPerson);

    arr.lastSubstitute=randomValue
    
    return randomPerson
    
}

export {assignFunction};
