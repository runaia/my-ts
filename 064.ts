interface Point {
    x: number;
    y: number;
}

class Grid {
    static origin = {
        x: 0,
        y: 0
    };

    calculateDistanceFromOrigin(point: Point) { // 인터페이스
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale; // 산각형 빗변 길이
    }
    constructor(public scale: number) { } //public으로 설정해서 내부 메서드에서 접근할 수 있도록
}

let grid1 = new Grid(1.0);
let grid2 = new Grid(5.0);

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 40, y: 50}));
