//Shape is the parent class and it's possible to reuse the code in the child classes.
class Shape {
  constructor() {
    this.shape = "";
  }
  setColor(colorString) {
  this.color =colorString;
  }
}
//Square,Circle and Triangle classes use Shape as a parent class 
class Square extends Shape {
  render() {
    return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
  }
}
class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
  }
} 
class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

// Exports Triangle, Square and Circle from the file.
module.exports = {Square, Circle, Triangle};
  