const lockdownLift = (n, t, r) => {

    const d = new Date(2021, 2, 1);
   
        
    if(n > t) {
    let count = 0;
    let newDate = d;
    let c = 0;
    while (n >= t) {
        count++;
        c = r * n;
        n = c;
        // var newnewDate = new Date(d.setDate( (count * 7) + 1))
        var newnewDate = new Date(d.getFullYear(),d.getMonth(), (d.getDate() + (count * 7)))
    
    }
        return newnewDate
    } 
    return -1
    
    
};
    lockdownLift(5000,500,0.75)