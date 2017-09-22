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
util.inherits(Sub,Base);
var base = new Base();
base.sayHello();
base.showName();
console.log(base);
var sub = new Sub();
sub.showName();
console.log(sub);