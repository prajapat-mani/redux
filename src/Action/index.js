export const addtodo=(data,a)=>{
// console.log(data,"jjj");
    return{
        type:"ADDTODO",
        payload:{
           data,a
        }
    }
}


export const deletetodo=(ind)=>{
   
    return{
        type:"DELETETODO",
        payload:{
ind
        }
    }
}

export const removetodo=(change,a)=>{

    return{
        type:"REMOVETODO",
        payload:{
            change,a
        }
    }
}