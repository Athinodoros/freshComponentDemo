



const getRandomNumber = (min:number, max:number)=>{
    return Math.random() * (max - min) + min;
    //return Math.floor(Math.random() * max) + min;
}

export default getRandomNumber