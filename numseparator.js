const separate_number = (str) => {
    let outputStr = ""
    let count = 0;
    let strCount = 0;

    const splits = str.split(/\d+/g);
    const nums = str.match(/\d+/g);
    
    for(let i=0;i<str.length;i++){
        if(str[i].match(/\d+/g) !== null){
            outputStr = outputStr + " " + nums[count];
            i = i + nums[count].length - 1;
            count++;
        }else{
            outputStr = outputStr + " " + splits[strCount].trim();
            i = i + splits[strCount].length - 1;
            strCount++;        
        }
    }
    return outputStr;
}

let x = separate_number("hello dsa55 g56");
console.log(x);