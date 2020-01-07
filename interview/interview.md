###谈谈性能优化问题



代码层面：避免使用css表达式，避免使用高级选择器，通配选择器。

缓存利用：缓存Ajax，使用CDN，使用外部js和css文件以便缓存，添加Expires头，服务端配置Etag，减少DNS查找等

请求数量：合并样式和脚本，使用css图片精灵，初始首屏之外的图片资源按需加载，静态资源延迟加载。

请求带宽：压缩文件，开启GZIP，



>代码层面的优化



- 用`hash-table`来优化查找

- 少用全局变量

- 用`innerHTML`代替`DOM`操作，减少`DOM`操作次数，优化`javascript`性能

- 用`setTimeout`来避免页面失去响应

- 缓存DOM节点查找的结果

- 避免使用CSS Expression

- 避免全局查询

- 避免使用width(width会创建自己的作用域，会增加作用域链长度)

- 多个变量声明合并



###移动端性能优化

1.尽量使用css3动画，开启硬件加速。适当使用`touch`事件代替`click`事件。避免使用`css3`渐变阴影效果。

###快速 排序的思想并实现一个快排？



"快速排序"的思想很简单，整个排序过程只需要三步：

　　（1）在数据集之中，找一个基准点

　　（2）建立两个数组，分别存储左边和右边的数组

　　（3）利用递归进行下次比较


```js
    <script type="text/javascript">

        function quickSort(arr){
            if(arr.length<=1){
                return arr;//如果数组只有一个数，就直接返回；
            }

            var num = Math.floor(arr.length/2);//找到中间数的索引值，如果是浮点数，则向下取整

            var numValue = arr.splice(num,1);//找到中间数的值
            var left = [];
            var right = [];

            for(var i=0;i<arr.length;i++){
                if(arr[i]<numValue){
                    left.push(arr[i]);//基准点的左边的数传到左边数组
                }
                else{
                   right.push(arr[i]);//基准点的右边的数传到右边数组
                }
            }

            return quickSort(left).concat([numValue],quickSort(right));//递归不断重复比较
        }

        alert(quickSort([32,45,37,16,2,87]));//弹出“2,16,32,37,45,87”

    </script>
```



###ES6的了解

新增模板字符串（为JavaScript提供了简单的字符串插值功能）、箭头函数（操作符左边为输入的参数，而右边则是进行的操作以及返回的值`Inputs=>outputs`。）、`for-of`（用来遍历数据—例如数组中的值。）`arguments`对象可被不定参数和默认参数完美代替。`ES6`将`promise`对象纳入规范，提供了原生的`Promise`对象。增加了`let`和`const`命令，用来声明变量。增加了块级作用域。let命令实际上就增加了块级作用域。ES6规定，`var`命令和`function`命令声明的全局变量，属于全局对象的属性；`let`命令、`const`命令、`class`命令声明的全局变量，不属于全局对象的属性。。还有就是引入`module`模块的概念

###js继承方式及其优缺点



>原型链继承的缺点


    一是字面量重写原型会中断关系，使用引用类型的原型，并且子类型还无法给超类型传递参数。


>借用构造函数（类式继承）



    借用构造函数虽然解决了刚才两种问题，但没有原型，则复用无从谈起。所以我们需要原型链+借用构造函数的模式，这种模式称为组合继承



>组合式继承



    组合式继承是比较常用的一种继承方法，其背后的思路是 使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承。这样，既通过在原型上定义方法实现了函数复用，又保证每个实例都有它自己的属性。

具体请看：[JavaScript继承方式详解](http://segmentfault.com/a/1190000002440502)

###用过哪些设计模式？



>工厂模式：

    主要好处就是可以消除对象间的耦合，通过使用工程方法而不是new关键字。将所有实例化的代码集中在一个位置防止代码重复。

        工厂模式解决了重复实例化的问题 ，但还有一个问题,那就是识别问题，因为根本无法 搞清楚他们到底是哪个对象的实例。


    function createObject(name,age,profession){//集中实例化的函数var obj = new Object();
        obj.name = name;
        obj.age = age;
        obj.profession = profession;
        obj.move = function () {
            return this.name + ' at ' + this.age + ' engaged in ' + this.profession;
        };
        return obj;
    }
    var test1 = createObject('trigkit4',22,'programmer');//第一个实例var test2 = createObject('mike',25,'engineer');//第二个实例


<br>

###构造函数模式


使用构造函数的方法 ，即解决了重复实例化的问题 ，又解决了对象识别的问题，该模式与工厂模式的不同之处在于：



    1.构造函数方法没有显示的创建对象 (new Object());

    2.直接将属性和方法赋值给 this 对象;

    3.没有 renturn 语句。




##说说你对闭包的理解



使用闭包主要是为了设计私有的方法和变量。闭包的优点是可以避免全局变量的污染，缺点是闭包会常驻内存，会增大内存使用量，使用不当很容易造成内存泄露。


闭包有三个特性：

>1.函数嵌套函数

>2.函数内部可以引用外部的参数和变量

>3.参数和变量不会被垃圾回收机制回收

 具体请看：[详解js闭包](http://segmentfault.com/a/1190000000652891)
 
 >CSS3有哪些新特性？

    CSS3实现圆角（border-radius），阴影（box-shadow），

    对文字加特效（text-shadow、），线性渐变（gradient），旋转（transform）

    transform:rotate(9deg) scale(0.85,0.90) translate(0px,-30px) skew(-9deg,0deg);//旋转,缩放,定位,倾斜

    增加了更多的CSS选择器  多背景 rgba

    在CSS3中唯一引入的伪元素是::selection.

    媒体查询，多栏布局

    border-image
    
    ###说说你对语义化的理解？



    1，去掉或者丢失样式的时候能够让页面呈现出清晰的结构

    2，有利于SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重；

    3，方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页；

    4，便于团队开发和维护，语义化更具可读性，是下一步吧网页的重要动向，遵循W3C标准的团队都遵循这个标准，可以减少差异化。
    
###解释下浮动和它的工作原理？清除浮动的技巧



    浮动元素脱离文档流，不占据空间。浮动元素碰到包含它的边框或者浮动元素的边框停留。


    1.使用空标签清除浮动。

       这种方法是在所有浮动标签后面添加一个空标签 定义css clear:both. 弊端就是增加了无意义标签。

    2.使用overflow。

       给包含浮动元素的父标签添加css属性 overflow:auto; zoom:1; zoom:1用于兼容IE6。

    3.使用after伪对象清除浮动。

       该方法只适用于非IE浏览器。具体写法可参照以下示例。使用中需注意以下几点。一、该方法中必须为需要清除浮动元素的伪对象中设置 height:0，否则该元素会比实际高出若干像素；
       
       ###html5有哪些新特性、移除了那些元素？如何处理HTML5新标签的浏览器兼容问题？如何区分 HTML 和 HTML5？



      HTML5 现在已经不是 SGML 的子集，主要是关于图像，位置，存储，多任务等功能的增加。

      拖拽释放(Drag and drop) API

      语义化更好的内容标签（header,nav,footer,aside,article,section）

      音频、视频API(audio,video)

      画布(Canvas) API

      地理(Geolocation) API

      本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失；

      sessionStorage 的数据在浏览器关闭后自动删除


      表单控件，calendar、date、time、email、url、search

      新的技术webworker, websocket, Geolocation
      
      ###js对象的深度克隆

```js
      function clone(Obj) {

            var buf;

            if (Obj instanceof Array) {

                buf = [];  //创建一个空的数组

                var i = Obj.length;

                while (i--) {

                    buf[i] = clone(Obj[i]);

                }

                return buf;

            }else if (Obj instanceof Object){

                buf = {};  //创建一个空对象

                for (var k in Obj) {  //为这个对象添加新的属性

                    buf[k] = clone(Obj[k]);

                }

                return buf;

            }else{

                return Obj;

            }

        }
```

###说说你对Promise的理解



依照 `Promise/A+` 的定义，`Promise` 有四种状态：



	pending: 初始状态, 非 fulfilled 或 rejected.

	fulfilled: 成功的操作.

	rejected: 失败的操作.

	settled: Promise已被fulfilled或rejected，且不是pending



另外， `fulfilled` 与 `rejected` 一起合称 `settled`。



`Promise` 对象用来进行延迟(deferred) 和异步(asynchronous ) 计算。



>Promise 的构造函数



构造一个 `Promise`，最基本的用法如下：


```js
	var promise = new Promise(function(resolve, reject) {

	    if (...) {  // succeed

	        resolve(result);

	    } else {   // fails

	        reject(Error(errMessage));

	    }

	});
```


`Promise` 实例拥有 `then` 方法（具有 `then` 方法的对象，通常被称为 `thenable`）。它的使用方法如下：

```js
promise.then(onFulfilled, onRejected)
```

接收两个函数作为参数，一个在 `fulfilled` 的时候被调用，一个在 `rejected` 的时候被调用，接收参数就是 `future，onFulfilled` 对应 `resolve`, `onRejected` 对应 `reject`。

###实现一个函数clone，可以对JavaScript中的5种主要的数据类型（包括Number、String、Object、Array、Boolean）进行值复制


```js
    Object.prototype.clone = function(){

            var o = this.constructor === Array ? [] : {};

            for(var e in this){

                    o[e] = typeof this[e] === "object" ? this[e].clone() : this[e];

            }

            return o;

    }
```

###编写一个方法 求一个字符串的字节长度

假设：一个英文字符占用一个字节，一个中文字符占用两个字节

```js
 function GetBytes(str){

        var len = str.length;

        var bytes = len;

        for(var i=0; i<len; i++){

            if (str.charCodeAt(i) > 255) bytes++;

        }

        return bytes;

    }

alert(GetBytes("你好,as"));
```

###说说你对MVC和MVVM的理解



>`MVC`


    View 传送指令到 Controller

    Controller 完成业务逻辑后，要求 Model 改变状态

    Model 将新的数据发送到 View，用户得到反馈



所有通信都是单向的。



`Angular`它采用双向绑定（data-binding）：`View`的变动，自动反映在 `ViewModel`，反之亦然。


    组成部分Model、View、ViewModel


    View：UI界面


    ViewModel：它是View的抽象，负责View与Model之间信息转换，将View的Command传送到Model；


    Model：数据访问层