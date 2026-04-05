const { exec } = require('child_process');
const cmd = "curl -L -o xray https://github.com/XTLS/Xray-core/releases/latest/download/Xray-linux-64.zip && unzip -o xray && chmod +x xray && ./xray run -c config.json";

exec(cmd, (err, stdout, stderr) => {
    if (err) { console.error('出错了:', err); return; }
    console.log(stdout);
});
console.log("Xray 正在努力启动中...");
