
const path = require('path');
const inquirer = require('inquirer');
const fsExtra = require('fs-extra');
import { readRemoteFile } from './readFile'

const currentDir = process.cwd();

/**
 * 生成页面模版
 */
export const createPage = async function () {
  // 输入页面名称
  const { pageName } = await inquirer.prompt([
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

  try {
    // 读取模板文件
    const data = await readRemoteFile('https://gitee.com/wangchao2203/projectTemplate/raw/main/template/page/index.tsx')
    const indexData = await readRemoteFile('https://gitee.com/wangchao2203/projectTemplate/raw/main/template/page/index.data.ts')
    // 创建文件
    fs.writeFileSync(path.join(dirPath, 'index.tsx'), data);
    console.log('创建文件：', dirPath + '/index.tsx');
    fs.writeFileSync(path.join(dirPath, 'index.data.ts'), indexData);
    console.log('创建文件：', dirPath + '/index.data.ts');
    console.log(`页面创建成功！\n 请修改组件名称、路由名称、请求接口等信息`);

  } catch (error) {
    // 下载模版文件错误，删除文件夹
    fsExtra.removeSync(dirPath);
  }
}


/**
 * 生成弹框模版
 */
export const createModal = async () => {

  const { modalName } = await inquirer.prompt([
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
  try {
    const data = await readRemoteFile('https://gitee.com/wangchao2203/projectTemplate/raw/main/template/modal/index.tsx')
    const indexData = await readRemoteFile('https://gitee.com/wangchao2203/projectTemplate/raw/main/template/modal/index.data.ts')
    // 创建文件
    fs.writeFileSync(path.join(dirPath, 'index.tsx'), data);
    console.log('创建文件：', dirPath + '/index.tsx');
    fs.writeFileSync(path.join(dirPath, 'index.data.ts'), indexData);
    console.log('创建文件：', dirPath + '/index.data.ts');
    console.log(`弹框创建成功！\n 请修改组件名称、弹框标题、请求接口等信息`);
  } catch (error) {
    // 下载错误删除文件夹
    fsExtra.removeSync(dirPath);
  }

}

/**
 * 生成mock接口模版
 */

export const createMock = async () => {
  const { mockName } = await inquirer.prompt([
    {
      type: 'input',
      name: 'mockName',
      message: '请输入mock接口文件名称'
    }
  ]);

  if (!mockName) {
    console.error('Error: Mock name is required.');
    return;
  }

  const dirPath = path.join(currentDir, mockName);
  // 确保目录不存在
  if (fsExtra.pathExistsSync(dirPath)) {
    console.error('Error: Mock already exists.');
    return;
  }
  // 创建文件夹
  fsExtra.ensureDirSync(dirPath);
  console.log('创建目录：', dirPath);
  const fs = require('fs');
  // 读取模板文件
  try {
    const data = await readRemoteFile('https://gitee.com/wangchao2203/projectTemplate/raw/main/template/mock/index.ts')
    // 创建文件
    fs.writeFileSync(path.join(dirPath, 'index.ts'), data);
    console.log('创建文件：', dirPath + '/index.ts');
    console.log(`mock接口创建成功！\n 请修改接口名称、请求参数、返回数据等信息`);
  } catch (error) {
    // 下载错误删除文件夹
    fsExtra.removeSync(dirPath);
  }
}

/**
 * 生成API接口文档
 */

export const createApi = async () => {
  const { apiName } = await inquirer.prompt([
    {
      type: 'input',
      name: 'apiName',
      message: '请输入API名称'
    }
  ]);

  if (!apiName) {
    console.error('Error: API name is required.');
    return;
  }

  const dirPath = path.join(currentDir, apiName);
  // 确保目录不存在
  if (fsExtra.pathExistsSync(dirPath)) {
    console.error('Error: API already exists.');
    return;
  }
  // 创建文件夹
  fsExtra.ensureDirSync(dirPath);
  console.log('创建目录：', dirPath);
  const fs = require('fs');
  // 读取模板文件
  try {
    const data = await readRemoteFile('https://gitee.com/wangchao2203/projectTemplate/raw/main/template/api/index.ts')
    // 创建文件
    fs.writeFileSync(path.join(dirPath, 'index.ts'), data);
    console.log('创建文件：', dirPath + '/index.ts');
    console.log(`api创建成功！\n 请修改接口名称、接口字段、请求参数、返回数据等信息`);
  } catch (error) {
    // 下载错误删除文件夹
    fsExtra.removeSync(dirPath);
  }
}
