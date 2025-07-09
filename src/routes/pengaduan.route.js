const express = require('express');
const router = express.Router();
const { buatPengaduan, getSemuaPengaduan, getPengaduanFiltered, hapusPengaduan  } = require('../controllers/pengaduan.controller');


router.post('/ajukan', buatPengaduan);
router.get('/semua', getSemuaPengaduan);
router.get('/filter', getPengaduanFiltered);
router.delete('/:id', hapusPengaduan);


module.exports = router;
