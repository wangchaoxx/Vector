'use strict';

console.log('Hello from vector1');

/**
 * 1. 生成页面模版
 * 2. 生成弹框模版
 */

const path = require('path');
const inquirer = require('inquirer');
const fsExtra = require('fs-extra');

// 获取当前所在目录
const currentDir = process.cwd();
console.log('当前目录：', currentDir);

import { createModal, createPage } from './hooks/createTemplate'

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
  inquirer.prompt(templateType).then(async answers => {
    console.log('选择的模板类型：', answers.templateType);
    if (answers.templateType === 'page') {
      createPage();
    } else if (answers.templateType === 'modal') {
      createModal();
    }
  });
}

createTemplate();
