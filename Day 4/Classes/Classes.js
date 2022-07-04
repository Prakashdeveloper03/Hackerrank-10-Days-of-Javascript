/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon {
  constructor(heights) {
    let polygon_perimeter = 0;
    for (let index in heights) {
      polygon_perimeter += heights[index];
    }
    this.my_perimeter = polygon_perimeter;
  }

  perimeter() {
    return this.my_perimeter;
  }
}
