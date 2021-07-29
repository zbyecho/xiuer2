/*
 * @Date: 2021-07-29 10:32:01
 * @LastEditors: zhangbaoyan
 * @LastEditTime: 2021-07-29 13:58:56
 * @FilePath: /my-node-cli/xiuer/lib/create.js
 */


const path = require('path')
const fs = require("fs-extra")
const inquirer = require("inquirer")
const Generator = require('./Generator')

module.exports = async function (name, options) {
    
    // 验证是否正常取到值
    console.log('>>> create.js', name, options)

    // 当前命令行选择的目录
    const cwd  = process.cwd();

    // 需要创建的目录地址
    const targetAir  = path.join(cwd, name);

    // 目录是否已经存在？
    if (fs.existsSync(targetAir)) {

        // 是否为强制创建？
        if (options.force) {
            await fs.remove(targetAir)
        } else {
            // TODO：询问用户是否确定要覆盖

            let { action } = await inquirer.prompt([
                { // 是否
                    type: 'confirm',
                    name: 'action',
                    message: '项目已存在，是否覆盖？',
                    // prefix: "🚀",
                },
            ])

            console.log(action);

            if (!action) {
                return;
            } else if (action) {
                // 移除已存在的目录
                console.log(`\r\nRemoving...`)
                await fs.remove(targetAir)
            }
        }
    } 

    // 创建项目
    const generator = new Generator(name, targetAir);
    
    // 开始创建项目
    generator.create()
}