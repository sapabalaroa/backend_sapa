const prisma = require('../prisma/client');

exports.buatPengaduan = async (req, res) => {
  try {
    const { nama, email, jenisKelamin, noTelepon, kronologi } = req.body;

    if (!kronologi || kronologi.trim() === "") {
      return res.status(400).json({ message: "Kronologi wajib diisi." });
    }

    const pengaduan = await prisma.pengaduan.create({
      data: { nama, email, jenisKelamin, noTelepon, kronologi },
    });

    res.status(201).json({ message: "Pengaduan berhasil dikirim", data: pengaduan });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Terjadi kesalahan saat mengirim pengaduan." });
  }
};

exports.getSemuaPengaduan = async (req, res) => {
    try {
      const semua = await prisma.pengaduan.findMany({
        orderBy: { createdAt: 'desc' }, // supaya data terbaru di atas
      });
      res.status(200).json(semua);
    } catch (err) {
      res.status(500).json({ message: "Gagal mengambil data", error: err.message });
    }
  };

  exports.getPengaduanFiltered = async (req, res) => {
    const { gender, dari, sampai } = req.query;
  
    try {
      const filter = {
        ...(gender && { jenisKelamin: gender }),
        ...(dari && sampai && {
          createdAt: {
            gte: new Date(dari),
            lte: new Date(sampai)
          }
        })
      };
  
      const hasil = await prisma.pengaduan.findMany({
        where: filter,
        orderBy: { createdAt: 'desc' }
      });
  
      res.status(200).json(hasil);
    } catch (err) {
      res.status(500).json({ message: 'Gagal mengambil data terfilter', error: err.message });
    }
  };
  
  exports.hapusPengaduan = async (req, res) => {
    const { id } = req.params;
    try {
      await prisma.pengaduan.delete({ where: { id: parseInt(id) } });
      res.status(200).json({ message: "Pengaduan berhasil dihapus" });
    } catch (err) {
      res.status(500).json({ message: "Gagal menghapus", error: err.message });
    }
  };
    