



const getRandomNumber = (min:number, max:number)=>{
    console.log(min,max);
    let res = Math.floor(Math.random() * (max - min + 1)) + min;
    return res;
    //Math.random() * (max - min) + min;
    //return Math.floor(Math.random() * max) + min;
}

export default getRandomNumber