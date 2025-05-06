class RoundHole {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  getRadius(): number {
    return this.radius;
  }

  fits(roundPeg: RoundPeg): boolean {
    return this.getRadius() >= roundPeg.getRadius();
  }
}

class RoundPeg {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  getRadius(): number {
    return this.radius;
  }
}

// 被适配者 - 方钉
class SquarePeg {
  private width: number;

  constructor(width: number) {
    this.width = width;
  }

  getWidth(): number {
    return this.width;
  }
}

// 适配器 - 将方钉适配到圆孔
class SquarePegAdapter extends RoundPeg {
  private peg: SquarePeg;

  constructor(peg: SquarePeg) {
    super((peg.getWidth() * Math.sqrt(2)) / 2);
    this.peg = peg;
  }
  // 适配器重写 getRadius 方法，将方钉的宽度转换为圆孔的半径
  getRadius(): number {
    return (this.peg.getWidth() * Math.sqrt(2)) / 2;
  }
}

// 使用示例
function main() {
  const hole = new RoundHole(5);
  const roundPeg = new RoundPeg(5);
  console.log(hole.fits(roundPeg)); // true

  // 未适配前，方钉不能插入圆孔
  const smallSquarePeg = new SquarePeg(5);
  const largeSquarePeg = new SquarePeg(10);
  console.log(hole.fits(smallSquarePeg)); // 报错

  // 适配后，方钉可以插入圆孔
  const smallSquarePegAdapter = new SquarePegAdapter(smallSquarePeg);
  const largeSquarePegAdapter = new SquarePegAdapter(largeSquarePeg);

  console.log(hole.fits(smallSquarePegAdapter)); // true
  console.log(hole.fits(largeSquarePegAdapter)); // false
}

// 运行示例
main();
