#! /usr/bin/env  node


console.log('xiu-cli working');


// 引入 commander
const program = require("commander")

const packg = require('../package.json')

// 生成字体logo
const figlet = require('figlet')

// 粉笔 修改颜色
const chalk = require('chalk')



program
    .command('create <app-name>')
    .description('create a new project')
    .option('-f, --force', 'overwrite target directory if it exist')
    .action((name, option) => {
        console.log('name', name);
        console.log('option', option);
        require('../lib/create.js')(name, option)
    })
    // .description()
// 版本号
program
    .version(packg.version, '-v, -V, --version', '输出版本号')
    

program
    .on('--help', () => {
        console.log('\r\n' + figlet.textSync('xiuer', {
            font: 'Ghost',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 80,
            whitespaceBreak: true
          }));
        // 新增说明信息
        console.log(`\r\nRun ${chalk.cyan(`xiu-cil <command> --help`)} for detailed usage of given command\r\n`)
    })


program.parse(process.argv)

