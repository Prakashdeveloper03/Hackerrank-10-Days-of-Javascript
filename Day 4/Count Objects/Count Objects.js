/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 *
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
  let count = 0;
  for (let index in objects) {
    if (objects[index].x == objects[index].y) {
      count++;
    }
  }
  return count;
}
