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
setTimeout(mdzz,1000);
const i =1;
add_1=()=>{
    i++;
};
setInterval(add_1,1000);