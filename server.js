const express = require('express');
const path = require('path');

const adminRouter = require('./router/admin.route');
const apiRouter = require('./router/api.route');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  '/sb-admin-2',
  express.static(
    path.join(__dirname, 'node_modules/startbootstrap-sb-admin-2'),
  ),
);

app.use('/img', express.static(path.join(__dirname, 'public/assets/img')));

app.use('/admin', adminRouter);
app.use('/api/v1', apiRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port::${PORT}`);
});
