'use strict';

// console.log('Hello from vector1');

/**
 * 1. 生成页面模版
 * 2. 生成弹框模版
 * 3. 解析参数
 * 3.1 版本号
 */

const inquirer = require('inquirer');

// 获取当前所在目录
const currentDir = process.cwd();
console.log('当前目录：', currentDir);

import { createModal, createPage, createMock } from './hooks/createTemplate';

/**
 * @description: 初始化命令行参数解析
 */

const packageJson = require('../package.json');
const { Command } = require('commander');

const program = new Command();

program
  .name('vector')
  .description('get version to use Vector')
  .version(packageJson.version, '-V, --version');

program
  .command('create <name>')
  .description('Initialize a new project with the given name')
  .action((name) => {
    if(name === 'page'){
      createPage();
    } else if(name ==='modal'){
      createModal();
    } else if(name ==='mock') {
      createMock();
    }else {
      console.log('Invalid name, please use "page" or "modal"');
    }
  });

program.parse(process.argv);
