class Cell {
    constructor(i, xSize) {
        {
            this.index = i;
            this.x = i % xSize;
            this.y = Math.floor(i/xSize);
            this.walls = [true, true,  true, true]
            this.visited = false;
        }
    }
    setVisited() {
        this.visited = true;
    }
}


export default class mazeGen {
    constructor(x = 10, y = 10) {
        this.xSize = x;
        this.ySize = y;
        this.maze = [];
        this.stack = [];
        
        for (let i=0; i < (this.xSize * this.ySize); i++) {
            this.maze.push(new Cell(i, this.xSize));
        }

        // initialX = this.getRndInteger(0, this.xSize);
        // initialy = this.getRndInteger(0, this.ySize);
        // this.current = {x: initialX, y:initialy};
        // this.maze[this.getIndex(this.current.x, this.current.y)].visited = true
        
        this.current = this.getRndListElement(this.maze);
        this.current.setVisited();

        this.stack.push(this.current); // Dont know if this is right. Maybe should copy or extract x,y
    }


    // // Structure for each cell
    // Cell(i) {
    //     //   walls = [up,   right, down, left]
    //     this.index = i;
    //     this.x = i % this.xSize;
    //     this.y = Math.floor(i,this.xSize);
    //     this.walls = [true, true,  true, true]
    //     this.visited = false;
    // }

    mazeGenerator() {
        console.log("running new")
        while (this.stack.length !== 0) {
            this.current = this.stack.pop();
            // if any unvisited neighbours
            let unvisitedNeighbours = this.neighbours();
            if (unvisitedNeighbours.length !== 0) {
                // Push the current cell to the stack
                this.stack.push(this.current);

                // Choose one of the unvisited neighbours
                let chosen = this.getRndListElement(unvisitedNeighbours);
                // Remove the wall between the current cell and the chosen cell
                let dir = this.getDirection(this.current, chosen);
                this.removeWalls(dir)

                // Mark the chosen cell as visited and push it to the stack
                //this.maze[chosen.index].setVisited();
                chosen.setVisited();
                this.stack.push(chosen);
            }
        }
        console.log("Finnished")
        return this.maze
    }

    // Assumes dir has not been visited
    // Missing handling edge coordinates
    removeWalls(dir){
        // currentIndex = this.getIndex(this.current.x, this.current.y) // Not needed if refrences work
        let neighbour;
        switch(dir){
            case "up":
                neighbour = this.getIndex(this.current.x, this.current.y-1); // Cant if y = 0
                this.current.walls[0] = false;
                this.maze[neighbour].walls[2] = false;
                break;
            case "right":
                neighbour = this.getIndex(this.current.x+1, this.current.y); // Cant if x = xSize
                this.current.walls[1] = false;
                this.maze[neighbour].walls[3] = false;
                break;
            case "down":
                neighbour = this.getIndex(this.current.x, this.current.y+1); // Cant if y = ySize-1
                this.current.walls[2] = false;
                this.maze[neighbour].walls[0] = false;
                break;
            case "left":
                neighbour = this.getIndex(this.current.x-1, this.current.y); // Cant if x = 0
                this.current.walls[3] = false;
                this.maze[neighbour].walls[1] = false;
                break;
            default:
                return;
        }
        return;
    }

    // Returns the direction between the current cell and the neighbouring cell
    // Dosent handle any error case if cell isnt directly neighbouring. 
    getDirection(c_cell, n_cell) {
        let y = n_cell.y - c_cell.y; // -1=up - 1=down
        let x = n_cell.x - c_cell.x; // -1=left - 1=right

        if (y === 1) {
            return "down";
        } if (y===-1) {
            return "up";
        } if (x === 1) {
            return "right";
        } if (x === -1) {
            return "left";
        }
    }


    // Translates 2d coordinates into list index
    getIndex(x,y) {
        const index = this.xSize * y + x;
        return index;
    }

    // Gets random integer in range min-max (excluding max)
    getRndInteger(min, max) {
        return Math.floor( Math.random() * (max-min)) + min;
    }

    getRndListElement(array) {
        const size = array.length;
        const rnd = this.getRndInteger(0, size);
        return array[rnd];
    }

    // Checks if neighbours are visited
    // returns list of unvisited indexes
    neighbours() { 
        let unvisitedNeighbours = [];
        let index;
        // // up
        if (this.current.y !== 0) {
            index = this.current.index-this.xSize;
            if (!this.maze[index].visited) {unvisitedNeighbours.push(this.maze[index])}
        }
        // // right
        if (this.current.x !== this.xSize-1) {
            index = this.current.index+1;
            if (!this.maze[index].visited) {unvisitedNeighbours.push(this.maze[index])}
        }
        // // down
        if (this.current.y !== this.ySize-1) {
            index = this.current.index+this.ySize;
            if (!this.maze[index].visited) {unvisitedNeighbours.push(this.maze[index])}
        }
        // // left
        if (this.current.x !== 0) {
            index = this.current.index-1;
            if (!this.maze[index].visited) {unvisitedNeighbours.push(this.maze[index])}
        }

        return unvisitedNeighbours
    }

}
