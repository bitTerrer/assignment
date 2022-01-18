const concat = (str1,str2) => {   
    if(str2 !== undefined){
        return str1 + str2;
    }else{
        return (strx) => console.log(str1 +" "+strx); 
    }
}