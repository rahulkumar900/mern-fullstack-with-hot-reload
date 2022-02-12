import express from 'express';
const app = express();
import devBundle from './devBundle';
import template from './../template'
import path from 'path';
devBundle.compile(app);
const CURRENT_WORKING_DIR = process.cwd();
let port = process.env.PORT || 3000;
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR,'dist')));

app.get('/', (req, res) => {
    res.status(200).send(template());
})


app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});