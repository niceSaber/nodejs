/* 代表当前执行脚本所在的目录*/
console.log(__dirname);
/* 代表当前执行脚本的名称的绝对路径*/
console.log(__filename);

/* 代表多长时间后执行mdzz*/
/**
 * setTimeout(function,0);代表立刻执行，可以在多个任务时取得优先执行
 */
mdzz = ()=>{
    console.log('mdzz')
}
console.log('开始执行单次定时器·····');
setTimeout(mdzz,1000);
console.log('单词定时器执行结束···')
var i =1;
add_1=()=>{
    i++;
    console.log(i);
    if(i>5){
        process.nextTick(show);
        console.log('add_1这个定时器的标志:'+a);
        process.argv.forEach(function(value,index) {
            console.log(index+':'+value+'\n');
        }, this);
        clearInterval(a);
    }
};
show = ()=>{
    console.log("add_1方法已经执行完毕～～～～～～");
}
console.log('add_1定时器开始执行·········');
var a= setInterval(add_1,1000);