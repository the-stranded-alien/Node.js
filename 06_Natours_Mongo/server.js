const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');
const { mongo } = require('mongoose');

const DB = process.env.DATABASE_CLOUD.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    // console.log(con.connections);
    console.log('DB Connection Successful !');
  })
  .catch((err) => console.log('Error Connecting to DB: ' + err));

// console.log(app.get('env'));
// console.log(process.env);

const port = process.env.PORT || 8888;
app.listen(port, () => {
  console.log(`App Running on Port: ${port}...`);
});
