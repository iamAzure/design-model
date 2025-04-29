1.实现具体的产品
2.定义抽象 Builder 接口
3.实现具体的 Builder 
    3.1 在 constructor 中实例化产品
    3.2 实现 reset 方法，用于重置 Production 的配置
    3.3 实现 getResult 方法，返回 Production 实例
4.实现 Direction
    4.1 实现 setBuilder 接口，指定具体的的 Builder
    4.2 实现具体的 createProduction（如： createSportCar、createSUV）
5.调用 builder 的 getResult 拿到产品实例