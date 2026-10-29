import Person from '../assets/Person.webp'
function Team(){

    return(
        
    <div className="container my-5 py-4" id="team">
      {/* Judul  Tim */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Tim Kami</h2>
        <p className="text-muted">Orang-orang hebat di balik Bookstore</p>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {/* Anggota 1 */}
        <div className="col">
          <div className="card h-100 border-0 shadow-sm text-center p-3">
            <img 
              src={Person} 
              className="rounded-circle mx-auto mt-3" 
              alt="Foto Profil"
              style={{ width: '140px', height: '140px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title fw-bold mb-1">Zata Kazami</h5>
              <p className="text-primary small mb-3">Frontend Developer</p>
              <p className="card-text text-muted small">
                Bertanggung jawab mengelola tampilan website agar nyaman digunakan oleh pengguna.
              </p>
            </div>
          </div>
        </div>

        {/* Anggota 2 */}
        <div className="col">
          <div className="card h-100 border-0 shadow-sm text-center p-3">
            <img 
              src={Person} 
              className="rounded-circle mx-auto mt-3" 
              alt="Foto Profil"
              style={{ width: '140px', height: '140px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title fw-bold mb-1">Kasumi Toyama</h5>
              <p className="text-primary small mb-3">UI/UX Designer</p>
              <p className="card-text text-muted small">
                Merancang alur dan desain antarmuka yang intuitif serta estetik.
              </p>
            </div>
          </div>
        </div>

        {/* Anggota 3 */}
        <div className="col">
          <div className="card h-100 border-0 shadow-sm text-center p-3">
            <img 
              src={Person} 
              className="rounded-circle mx-auto mt-3" 
              alt="Foto Profil"
              style={{ width: '140px', height: '140px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title fw-bold mb-1">Chisa Kuchiba</h5>
              <p className="text-primary small mb-3">Backend Developer</p>
              <p className="card-text text-muted small">
                Mengurus logika server, basis data, serta integrasi data katalog buku.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team;