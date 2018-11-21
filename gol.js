var nextState = function(currentState,neighbours){
    return  ( (currentState==true && neighbours==2) || neighbours==3 )?true:false;
}



var grid1=[[true,true,false,true,false,true],
           [true,false,false,true,true,false],
           [false,false,true,false,true,false],
           [true,true,true,false,false,true],
           [true,false,true,false,true,true],
           [false,false,true,false,false,true]];

var calcualteNumberOfNeighbours =function(x,y,grid){
    let count=0;
            for(k=x-1;k<=x+1;k++){
                for(l=y-1;l<=y+1;l++){
                    if(k<0 || l<0 || k>grid.length-1 || l>grid[0].length-1 || (k==x && l==y)) continue;
                    //console.log(k+" "+l);
                    if(grid[k][l]===true) count++;
                }
            }
   return count;
}

    
module.exports = {
    nextState : nextState,
    calcualteNumberOfNeighbours: calcualteNumberOfNeighbours
}