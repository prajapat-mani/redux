
const initialdata=[]


const Todoreducers=(state=initialdata,action)=>{
    switch (action.type){
        case "ADDTODO":
        const{a,data}=action.payload;
// console.log(action.payload.data,"hhh")

        return[
       ...state,{data,a}
        ]


        case "REMOVETODO":
            console.log(action.payload,"www");

            const{change}=action.payload;
            const color=state.map((valu,inde)=>{
                if(change===inde){
                    console.log(valu?.a,"hjjii")
                    if(valu?.a===false){
                        return{...valu,a:true} 
                    }
                    else{
                        return{...valu,a:false} 
                    }
                    

                    
                }else{
                    return valu
                }

                
            })

            console.log(color,"ggy")
            return color
          


        case "DELETETODO":
            const {ind}=action.payload;
            
            const newlist= state.filter((value,index)=>{

                return ind!==index
            
                
            })
                
            
             console.log(newlist,"jjj");
            return newlist

        default :return state;
    }
   
    
    }











export default Todoreducers;