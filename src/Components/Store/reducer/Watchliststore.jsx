const initCard = []
 function Watchliststore(state = initCard, action) {
    if(action.type === "add_watch"){
        let current =[...state]
        if(current.length===0){
            current.push(action.payload)
            console.log(action.payload);
        }else{
            let sanoq = 0
            current.map((item, index)=>{
                if(item.title === action.payload.title){
                    sanoq = 1
                }
            })
            if(sanoq !== 1){
                current.push(action.payload)
            }
        }
        return state =current
    }
    return state


  
}
export {Watchliststore}
