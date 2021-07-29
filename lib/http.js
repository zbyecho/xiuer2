/*
 * @Date: 2021-07-29 13:51:57
 * @LastEditors: zhangbaoyan
 * @LastEditTime: 2021-07-29 15:34:51
 * @FilePath: /my-node-cli/xiuer/lib/http.js
 */

const axios = require('axios')

axios.interceptors.response.use(res => {
    return res.data;
})

/**
 * 
 * @returns  Promise
 * @description 获取模板列表
 */
async function getRepoList() {
    return axios.get('https://api.github.com/users/zbyecho/repos')
}

/**
 * @description 获取版本信息
 * @param {string} repo 模板名称
 * @returns Promise
 */
 async function  getTagList(repo) {
     console.log(`https://api.github.com/repos/zbyecho/${repo}/tags`);
    return axios.get(`https://api.github.com/repos/zbyecho/ant-design/tags`)
}
  
module.exports = {
    getRepoList,
    getTagList
}