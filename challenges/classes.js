// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(props) {
//     this.length = props.length,
//     this.width = props.width,
//     this.height = props.height;
//   }
//   CuboidMaker.prototype.vol = function() {
//     return this.length * this.width * this.height;
//   }

  class Cuboid extends CubeMaker {
      constructor(props) {
          super(props)
          this.length = props.length,
          this.width =  props.width, 
          this.height = props.height
      }
      vol() {
        return this.length * this.width * this.height;
      }
      surfArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
      }
  }

  const ugly = new Cuboid ({
      length: 4,
      width: 5,
      height: 5;
  })

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(ugly.vol()); // 100
console.log(ugly.surfArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.