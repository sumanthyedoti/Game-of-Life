var expect = require('chai').expect;
var gameOfLife = require('./gol.js');

describe("Next Sate - Game of Life", function(){
    it("live cell with fewer than 2 live neighbors dies, as if by underpopulation", function(){
        var neighbours = 0
        var currentState = true
        expect(gameOfLife.nextState(currentState, neighbours)).to.equal(false);

        neighbours = 1
        expect(gameOfLife.nextState(currentState, neighbours)).to.equal(false);
    })
    it("live cell with 2 or 3 live neighbors lives on to the next generation", function(){
        var neighbours = 2
        var currentState = true
        expect(gameOfLife.nextState(currentState, neighbours)).to.equal(true);

        neighbours = 3
        expect(gameOfLife.nextState(currentState, neighbours)).to.equal(true);
    })
    it("live cell with more than 3 live neighbors dies, as if by overpopulation", function(){
        var neighbours =4
        var currentState = true
        expect(gameOfLife.nextState(currentState, neighbours)).to.equal(false);

        neighbours = 5
        expect(gameOfLife.nextState(currentState, neighbours)).to.equal(false);
    })
    it("dead cell with exactly three live neighbors becomes a live cell, as if by reproduction", function(){
        var neighbours = 3
        var currentState = false
        expect(gameOfLife.nextState(currentState, neighbours)).to.equal(true);

        neighbours = 4
        expect(gameOfLife.nextState(currentState, neighbours)).to.equal(false);
    })
    
});


describe("Calculate Number of Neighbours - Game Of Life", function(){
    it("Calculate Number of Neighbours at inner elements", function(){
        var x = 1;
        var y = 1;
        var grid=[[false,true,false,true],
                 [true,false,false,true],
                 [false,false,true,false],
                 [true,true,true,false]];
        expect(gameOfLife.calcualteNumberOfNeighbours(x,y,grid)).to.equal(3);
        var x = 2;
        var y = 2;
        expect(gameOfLife.calcualteNumberOfNeighbours(x,y,grid)).to.equal(3);
    })
    it("Calculate Number of Neighbours at corner elements", function(){
        var x = 0;
        var y = 0;
        var grid=[[false,true,false,true],
                 [true,false,false,true],
                 [false,false,true,false]];
        expect(gameOfLife.calcualteNumberOfNeighbours(x,y,grid)).to.equal(2);
        var x = 2;
        var y = 3;
        expect(gameOfLife.calcualteNumberOfNeighbours(x,y,grid)).to.equal(2);
    });
    it("Calculate Number of Neighbours at edge elements", function(){
        var x = 0;
        var y = 2;
        var grid=[[false,true,false,true,false],
                [true,false,false,true,true],
                [false,false,true,false,true],
                [true,true,true,false,false],
                [true,false,true,false,false]];
        expect(gameOfLife.calcualteNumberOfNeighbours(x,y,grid)).to.equal(3);
        var x = 2;
        var y = 0;
        expect(gameOfLife.calcualteNumberOfNeighbours(x,y,grid)).to.equal(3);
        var x = 4;
        var y = 2;
        expect(gameOfLife.calcualteNumberOfNeighbours(x,y,grid)).to.equal(2);
    })
    it("Calculate Number of Neighbours at out of bound indices", function(){
        var x = -2;
        var y = 0;
        var grid=[[false,true,false,true],
                [true,false,false,true],
                [false,false,true,false],
                [true,true,true,false]];
        expect(gameOfLife.calcualteNumberOfNeighbours(x,y,grid)).to.equal(0);
        var x = -1;
        var y = -10;
        expect(gameOfLife.calcualteNumberOfNeighbours(x,y,grid)).to.equal(0);
        var x = 3;
        var y = -2;
        expect(gameOfLife.calcualteNumberOfNeighbours(x,y,grid)).to.equal(0);
    })
    
    
});