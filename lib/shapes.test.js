const {Square, Circle, Triangle} = require("./shapes.js");

//Test Square
describe("Square test", () => {
  it("Square test with turquoise (hexadecimal number)", () => {
  const shape = new Square();
  shape.setColor("#40e0d0");
  expect(shape.render()).toEqual(
    '<rect x="73" y="40" width="160" height="160" fill="#40e0d0" />'
  );
});
});

//Test Circle
describe("Circle test", () => {
  it("Circle test with red shape color", () => {
  const shape = new Circle();
  shape.setColor("red");
  expect(shape.render()).toEqual(
    '<circle cx="150" cy="115" r="80" fill="red" />'
  );
});
});

//Test Triangle
describe("Triangle test", () => {
    it("Triangle test with pink shape color", () => {
    const shape = new Triangle();
    shape.setColor("pink");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="pink" />'
    );
  });
});





