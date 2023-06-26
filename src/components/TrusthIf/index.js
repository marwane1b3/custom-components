const TrusthIf = ({children , condition=true , onNull = null})=>{
        return condition ? children : onNull ;
}

export {TrusthIf} 