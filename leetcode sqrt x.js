var mySqrt = function(x) {
    
    let i=0 // it is a binary search question.  i middle j
    let j=x
    while(i<j){
        let middle = Math.ceil((i+j)/2);
        let square = middle*middle;
        if(square == x) return middle;
        if(square < x){
            i=middle;
        }else{
            j=middle-1; 
        }
    }
    return i
    
};

// alternative answer is 

var mySqrt = function(x) {
    if (x<=1) return x;
    let i=0 // it is a binary search question.  i middle j
    let j=x
    while(i<j){
        let middle = Math.floor((i+j)/2);
        let square = middle*middle;
        if(square == x) return middle;
        if(square < x){
            i=middle+1;
        }else{
            j=middle; 
        }
    }
    return j-1
    
};