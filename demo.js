const fs = require('fs');//built-in module (node path) that allow us to navigate through the file
fs.readFile('demo.txt', (err, res) => {
    const lines = res.toString();
    console.log(lines);
});

//let data = 'username: Ben, password: Password123';
const users = [
    { username: 'Ben', password: '123' },
    { username: 'Louis', password: '456' },
    { username: 'Larry', password: '789' }
]
/*fs.writeFile('userInfo.txt',data, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('File written! All is well!');
    }
})*/

fs.readFile('userInfo.txt', (err, res) => {
    const lines = res.toString();
    console.log(lines);
});

users.forEach(user => {
    const fileName = 'userInfo/' + user.username + 'Info.txt';
    const data = user.password;

    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(`File ${fileName} written! All is well!`);
        }
    })
})