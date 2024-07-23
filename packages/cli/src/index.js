'use strict';

console.log('Hello from vector-cli');

/**
 * 1. 生成页面模版
 * 2. 生成弹框模版
 */

const path = require('path');
const inquirer = require('inquirer');
const fsExtra = require('fs-extra');
const ora = require('ora');

const spinner = ora('正在下载页面模版...'); 

// 获取当前所在目录
const currentDir = process.cwd();
console.log('当前目录：', currentDir);

const https = require('https');

function readRemoteFile(url) {
  spinner.start(); 
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
  
      res.on('end', () => {
        resolve(data);
        spinner.succeed('模版下载成功！'); 
      });
    }).on('error', (err) => {
      spinner.fail('fail'); 
      reject(err)
      console.error(`Error: ${err.message}`);
    });

  });
}


/**
 * 生成页面模版
 */
async function createPage() {
  // 输入页面名称
  const { pageName } = await inquirer.default.prompt([
    {
      type: 'input',
      name: 'pageName',
      message: '请输入页面名称'
    }
  ]);

  if (!pageName) {
    console.error('Error: Page name is required.');
    return;
  }

  const dirPath = path.join(currentDir, pageName);
  console.log('创建目录：', dirPath);
  // 确保目录不存在
  if (await fsExtra.pathExists(dirPath)) {
    console.error('Error: Page already exists.');
    return;
  }
  // 创建文件夹
  await fsExtra.ensureDir(dirPath);
  const fs = require('fs');
  // 读取模板文件

  const data = await readRemoteFile('https://raw.githubusercontent.com/wangchaoxx/projectTemplate/main/template/page/index.vue')
  const indexData = await readRemoteFile('https://raw.githubusercontent.com/wangchaoxx/projectTemplate/main/template/page/index.data.ts')
  // 创建文件
  fs.writeFileSync(path.join(dirPath, 'index.vue'), data);
  console.log('创建文件：', dirPath + '/index.vue');
  fs.writeFileSync(path.join(dirPath, 'index.data.ts'), indexData);
  console.log('创建文件：', dirPath + '/index.data.ts');
  console.log(`页面创建成功！\n 请修改组件名称、路由名称、请求接口等信息`);
}

/**
 * 生成弹框模版
 */
async function createModal() {
  // 输入弹框名称
  const { modalName } = await inquirer.default.prompt([
    {
      type: 'input',
      name: 'modalName',
      message: '请输入弹框名称'
    }
  ]);

  if (!modalName) {
    console.error('Error: Modal name is required.');
    return;
  }

  const dirPath = path.join(currentDir, modalName);
  // 确保目录不存在
  if (fsExtra.pathExistsSync(dirPath)) {
    console.error('Error: Modal already exists.');
    return;
  }
  // 创建文件夹
  fsExtra.ensureDirSync(dirPath);
  console.log('创建目录：', dirPath);
  const fs = require('fs');
  // 读取模板文件
  const data = await readRemoteFile('https://raw.githubusercontent.com/wangchaoxx/projectTemplate/main/template/modal/index.vue')
  const indexData = await readRemoteFile('https://raw.githubusercontent.com/wangchaoxx/projectTemplate/main/template/modal/index.data.ts')
  // 创建文件
  fs.writeFileSync(path.join(dirPath, 'index.vue'), data);
  console.log('创建文件：', dirPath + '/index.vue');
  fs.writeFileSync(path.join(dirPath, 'index.data.ts'), indexData);
  console.log('创建文件：', dirPath + '/index.data.ts');
  console.log(`弹框创建成功！\n 请修改组件名称、弹框标题、请求接口等信息`);
}

function createTemplate() {
  // 选择模板类型
  const templateType = [
    {
      type: 'list',
      name: 'templateType',
      message: '请选择模板类型',
      choices: ['page', 'modal']
    }
  ];
  inquirer.default.prompt(templateType).then(async answers => {
    console.log('选择的模板类型：', answers.templateType);
    if (answers.templateType === 'page') {
      createPage();
    } else if (answers.templateType === 'modal') {
      createModal();
    }
  });
}

createTemplate();
