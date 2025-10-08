var evalRPN = function(tokens) {
    let stack=[]
    for(let token of tokens){
        
        if(token==="+" || token==="-" || token==="/" || token==="*"){
            

            let b=stack.pop() // b would be poped first and gets operate second
            let a=stack.pop()

            let result
            if(token==="+") result=a+b
            else if(token==="-") result=a-b
            else if(token==="*") result=a*b
            else if(token==="/") result=parseInt(a/b) // we don't need any float number in the answer

            stack.push(result)
        }else{
            stack.push(Number(token))
        }
    }
    return stack[0]
};