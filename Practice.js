var maxProfit = function(prices) {
    let buy=0
    for(let i=1;i<prices.length;i++){
        if(prices[buy]>prices[i]){
            buy=i
        }
    }
    let sell=buy+1


    for(let i=buy+2;i<prices.length;i++){
        if(prices[sell]<prices[i]){
            sell=i
        }
    }

    return prices[sell]-prices[buy]

};
