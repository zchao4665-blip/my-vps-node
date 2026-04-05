const { exec } = require('child_process');
// 这个脚本会自动下载 xray 程序、解压、给权限、然后带上 config.json 运行
const cmd = "curl -L -o xray https://github.com/XTLS/Xray-core/releases/latest/download/Xray-linux-64.zip && unzip -o xray && chmod +x xray && ./xray run -c config.json";

exec(cmd, (err, stdout, stderr) => {
    if (err) { console.error('报错啦:', err); return; }
    console.log(stdout);
});
console.log("正在启动 Xray...");
