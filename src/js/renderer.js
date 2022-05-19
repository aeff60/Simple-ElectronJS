const { ipcRenderer } = require('electron')
const ipc = ipcRenderer

closeApp.addEventListener('click',()=>{
    console.log('yo')
    ipc.send('closeTheApp')
})