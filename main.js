const electron = require("electron");
const {app, BrowserWindow} = electron;

app.on("ready", ()=>{
	let win = new BrowserWindow({
        width:800,
        height:600
    });
	win.loadURL(`file://${__dirname}/index.html`);
	win.on('closed', function () {
         win = null; 
        });
});

exports.openWindow = (filename) =>{
//let win จะทำงานแค่ในวงเล็บ
let win = new BrowserWindow({
        width:800,
        height:600
    });
win.loadURL(`file://${__dirname}/${filename}.html`);
}