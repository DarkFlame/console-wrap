# node-console-wrap
 
 对nodejs原生的console.log函数的一层简单的包装，能够正确显示多层级的对象
 
 # Install
```
  npm i node-console-wrap
```
 
 # Usage
 
```

require('node-console-wrap')({option});
var count = {
    a:{
        b:{
            c:[1,2,3],
            d:[1,2,3]
        }
    }
};

console.log('count:', count);
//count: { a: { b: { c: [ 1, 2, 3, [length]: 3 ], d: [ 1, 2, 3, [length]: 3 ] } } }
```
# Setting
 option<object> 可以设置显示的参数配置
 1. showHidden <boolean> 是否显示不可枚举属性以及Symbol属性，defaults to false .
 2. depth <number> 指定格式化对象的层级，defaults to null(最大化层级)
 3. colors <boolean> 是否显示颜色，defaults to true
 4. showProxy <boolean> 是否显示代理对象，defaults to false
 5. maxArrayLength <number> 显示数组长度的最大值 defaults tp 1000
 6. breakLength <number> 一个对象最多划分成多少行显示 defaults to 60


