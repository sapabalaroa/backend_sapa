const express = require('express');
const cors = require('cors');
const pengaduanRouter = require('./routes/pengaduan.route');


const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/pengaduan', pengaduanRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server SAPA berjalan di http://localhost:${PORT}`);
});
 