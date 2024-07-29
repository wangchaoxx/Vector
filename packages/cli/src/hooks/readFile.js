const ora = require('ora');
const spinner = ora('正在下载页面模版...');
const https = require('https');

export const readRemoteFile = function (url) {
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
