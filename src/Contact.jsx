function Contact() {
  return (
    <div className="container my-5 py-4" id="contact">
      {/* Judul Halaman */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Hubungi Kami</h2>
        <p className="text-muted">Punya pertanyaan atau masukan? Kami siap membantu Anda.</p>
      </div>

      <div className="row g-5 mb-5">
        {/* Kolom Kiri: Info Kontak */}
        <div className="col-lg-5">
          <div className="p-4 bg-light rounded-3 shadow-sm h-100">
            <h4 className="fw-bold mb-4">Informasi Kontak</h4>
            <div className="mb-3">
              <h6 className="fw-bold mb-1">Alamat</h6>
              <p className="text-muted small">Jl. Ketintang No. 12, Surabaya, Jawa Timur</p>
            </div>
            <div className="mb-3">
              <h6 className="fw-bold mb-1">Email</h6>
              <p className="text-muted small">support@bookstore.com</p>
            </div>
            <div className="mb-3">
              <h6 className="fw-bold mb-1">WhatsApp / Telepon</h6>
              <p className="text-muted small">+62 812-3456-7890</p>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Form Pesan */}
        <div className="col-lg-7">
          <form className="p-4 border rounded-3 shadow-sm">
            <div className="mb-3">
              <label className="form-label fw-semibold">Nama Lengkap</label>
              <input type="text" className="form-control" placeholder="Masukkan nama Anda" />
            </div>
            <div className="mb-3">
              <label className="form-label fw-semibold">Alamat Email</label>
              <input type="email" className="form-control" placeholder="nama@email.com" />
            </div>
            <div className="mb-3">
              <label className="form-label fw-semibold">Pesan / Masukan</label>
              <textarea className="form-control" rows="3" placeholder="Tuliskan pesan Anda..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100 fw-bold">
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>

      {/* Bagian Peta Google Maps Embed */}
      <div className="row">
        <div className="col-12">
          <div className="rounded-3 overflow-hidden shadow-sm border">
            <iframe
              title="Lokasi Bookstore"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.387123456789!2d112.730000!3d-7.310000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTgnMzYuMCJTIDExMsKwNDMnNDguMCJF!5e0!3m2!1sid!2sid!4v1234567890123!5m2!1sid!2sid"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Contact;