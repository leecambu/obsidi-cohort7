const PI = 3.14159;
class Shape {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    move(x, y) {
        this.x += x;
        this.y += y;
    }
}

class Circle extends Shape {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }

    get area() {
        return PI * this.radius * this.radius;
    }

    set diameter(diameter) {
        this.radius = diameter / 2;
    }
}

const circle = new Circle(0, 0, 10);
circle.move(5, 5);
console.log(circle.area);

circle.diameter = 20;
console.log(circle.area);
