const outfits=(shirts,pants,path=[])=>{
    if(path.length===2){
        console.log(path)
        return
    }

    let choices=path.length===0 ? shirts :pants

    for(let choice of choices){
        path.push(choice) // choose
        outfits(shirts,pants,path) // explore
        path.pop() //undo backtrack

    }
}

outfits(['red','white'],['blue','gray'])