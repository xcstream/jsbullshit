#!/usr/bin/env node

const gen =  require('./generator')
const argv = process.argv

var help = `
js命令行版本的文章生成器 https://github.com/xcstream/jsbullshit
使用说明
jsbullshit [主题] [选项]

jsbullshit 今天天真好            //输出文章到控制台
jsbullshit 今天天真好 --txt      //输出文章到txt文件

`

if (argv.length <= 2) {
    console.log(help)
    return
}
const 主题 = argv[2]

if(主题=='-h'){
    console.log(help)
    process.exit()
}
let mode = null
if(argv.length>3){
    for(let i=3;i<argv.length;i++){
        if(argv[i].indexOf('--txt') !==-1){
            mode = 'txt'
        }
    }
}

if(mode === 'txt'){
    var fs=require('fs')
    file = 主题+'.txt'
    fs.writeFileSync(file,gen(主题))
    console.log('保存为 '+file)
}else{
    console.log(gen(主题))
}
