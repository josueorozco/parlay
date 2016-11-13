import express from 'express'; /* eslint-disable no-console, import/no-extraneous-dependencies */
import path from 'path';
import open from 'open';

const port = 3000;
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../app/index.html'));
});

app.listen(port, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Ready');
        open(`http://localhost:${port}`);
    }
});
