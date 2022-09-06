



const getRandomNumber = (min:number, max:number)=>{
    console.log(min,max);
    console.log(Math.floor(Math.random() * (max - min + 1)) + min);
    
    let res = Math.floor(Math.random() * (max - min + 1)) + min;
    return res;
    //Math.random() * (max - min) + min;
    //return Math.floor(Math.random() * max) + min;
}

export default getRandomNumber