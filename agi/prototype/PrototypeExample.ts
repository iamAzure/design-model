import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

export class PrototypeExample {
    public static run(): void {
        // 创建原始圆形
        const originalCircle = new Circle(5);
        console.log('原始圆形:');
        console.log('半径:', originalCircle.getRadius());
        console.log('面积:', originalCircle.getArea().toFixed(2));
        console.log('周长:', originalCircle.getPerimeter().toFixed(2));

        // 克隆圆形
        const clonedCircle = originalCircle.clone();
        console.log('\n克隆圆形:');
        console.log('半径:', clonedCircle.getRadius());
        console.log('面积:', clonedCircle.getArea().toFixed(2));
        console.log('周长:', clonedCircle.getPerimeter().toFixed(2));

        // 修改克隆圆形的属性
        clonedCircle.setRadius(8);
        console.log('\n修改后的克隆圆形:');
        console.log('半径:', clonedCircle.getRadius());
        console.log('面积:', clonedCircle.getArea().toFixed(2));
        console.log('周长:', clonedCircle.getPerimeter().toFixed(2));

        // 创建原始矩形
        const originalRectangle = new Rectangle(4, 6);
        console.log('\n原始矩形:');
        console.log('宽度:', originalRectangle.getWidth());
        console.log('高度:', originalRectangle.getHeight());
        console.log('面积:', originalRectangle.getArea());
        console.log('周长:', originalRectangle.getPerimeter());

        // 克隆矩形
        const clonedRectangle = originalRectangle.clone();
        console.log('\n克隆矩形:');
        console.log('宽度:', clonedRectangle.getWidth());
        console.log('高度:', clonedRectangle.getHeight());
        console.log('面积:', clonedRectangle.getArea());
        console.log('周长:', clonedRectangle.getPerimeter());

        // 修改克隆矩形的属性
        clonedRectangle.setWidth(8);
        clonedRectangle.setHeight(10);
        console.log('\n修改后的克隆矩形:');
        console.log('宽度:', clonedRectangle.getWidth());
        console.log('高度:', clonedRectangle.getHeight());
        console.log('面积:', clonedRectangle.getArea());
        console.log('周长:', clonedRectangle.getPerimeter());
    }
} 