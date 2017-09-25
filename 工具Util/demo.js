var util = require('util');
function Base (){
    this.name = 'xiao';
    this.base = 1990;
    this.sayHello = ()=>{
        console.log('Hello'+this.name);
    };
}
// Base.prototype.showName = function(){
//     console.log(this.name);
// }
Base.prototype.showName = () => {console.log(this.name);}

function Sub(){
    this.name='da';
}
//这个方法是使Sub继承Base在原型中定义的函数Sub();
util.inherits(Sub,Base);


var base = new Base();
base.sayHello();
base.showName();
console.log(base);
var sub = new Sub();
sub.showName();
console.log(sub);