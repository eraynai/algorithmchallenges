export function addBorder(picture: string[]): any {
  const lengthOfWall = picture[0].length + 2;
  let wall = '';
  for (let i = 0; i < lengthOfWall; i++) {
    wall = wall.concat('*');
  }

  return wall;
}

console.log(addBorder(['abc', 'ded']));
