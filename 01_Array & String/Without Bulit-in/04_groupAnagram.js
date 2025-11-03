var groupAnagrams = function(strs) {
    const groups={}
    for(let i=0;i<strs.length;i++){
        let word=strs[i]
        const sorted=word.split('').sort().join('')

        if(!groups[sorted])groups[sorted]=[]
        groups[sorted].push(word)
    }

    return Object.values(groups)
};