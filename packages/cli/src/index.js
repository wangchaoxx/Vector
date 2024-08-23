'use strict';

// console.log('Hello from vector1');

/**
 * 1. 生成页面模版
 * 2. 生成弹框模版
 * 3. 解析参数
 * 3.1 版本号
 */

const git = require('simple-git');
const packageJson = require('../package.json');
const { Command } = require('commander');
const path = require('path');
import { log } from '@wang_chao/utils'

log.info('Hello from vector', {
  name: packageJson.name,
  version: packageJson.version
});

const program = new Command();

// 获取当前所在目录
const currentDir = process.cwd();
console.log('当前目录：', currentDir);

import { createModal, createPage, createMock, createApi } from './hooks/createTemplate';

/**
 * @description: 版本号
 */
program
  .name('vector')
  .description('get version to use Vector')
  .version(packageJson.version, '-V, --version');

/**
 * @description: 创建模版
 */
program
  .command('create <name>')
  .description('Initialize a new project with the given name')
  .action((name) => {
    if (name === 'page') {
      createPage();
    } else if (name === 'modal') {
      createModal();
    } else if (name === 'mock') {
      createMock();
    } else if(name === 'api') {
      createApi();
    } else {
      console.log('Invalid name, please use "page" or "modal" and "mock"');
    }
  });

/**
 * @description: 创建项目模版
 */

program
  .command('init <templateType> <projectName>')
  .description('Initialize a new project from a GitHub template')
  .action(async (templateType, projectName) => {
    const tplMap = {
      'h5':'wangchaoxx/h5-template',
      'admin': 'wangchaoxx/vue-vben-admin-thin',
      'small-program': 'wangchaoxx/small-program-template',
    }
    const templateRepo = tplMap[templateType];
    try {
      const repoUrl = `https://github.com/${templateRepo}.git`;
      const targetPath = path.resolve(process.cwd(), projectName);

      console.log(`Cloning ${repoUrl} into ${targetPath}...`);

      await git().clone(repoUrl, targetPath);

      console.log('Project initialized successfully!');
    } catch (error) {
      console.error('Error initializing project:', error.message);
    }
  });

program.parse(process.argv);
