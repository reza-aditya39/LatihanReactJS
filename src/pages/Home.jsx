import thumbnail1 from '../assets/Buku Utama.jpeg'
import thumbnail2 from '../assets/Atomic Habits.webp'
import thumbnail3 from '../assets/Berani Tidak Disukai.webp'
import thumbnail4 from '../assets/Sebuah Seni untuk Bersikap Bodo Amat.webp'
import thumbnail5 from '../assets/The Book You Wish Your Parent had Read.webp'
import thumbnail6 from '../assets/Filosofi Teras.webp'
import thumbnail7 from '../assets/How to Win Friend and Influence People.webp'
<assets />

function Home(){
return(
    <>
    <div className="container my-5"> 
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg"> 
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3"> 
                <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Atomic Habits: Perubahan Kecil yang memberikan hasil luar biasa</h1> 
                <p className="lead">Cara mudah terbukti untuk membentuk kebiasaan baik dan menghilangkan kebiasaan buruk</p> 
                <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"> 
                    <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Beli Sekarang</button> 
                    <button type="button" className="btn btn-outline-secondary btn-lg px-4">Lihat Detail</button> </div> 
                </div> 
                <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg"> 
                    <img className="rounded-lg-3 img-fluid" src={thumbnail1} alt="" width="720"/> 
            </div> 
        </div> 
    </div>

    {/* Tampilan Buku */}
    <div id="book">
        <section className="py-5 text-center container"> 
            <div className="row py-lg-5"> 
                <div className="col-lg-6 col-md-8 mx-auto"> 
                    <h1 className="fw-light">Best seller</h1> 
                    <p className="lead text-body-secondary">Kami menyediakan buku original dengan kualitas yang baru. Anda dapat melihat buku Best seller atau yang terjual banyak dibawah ini</p> 
                    <p> 
                        <a href="#" className="btn btn-primary my-2 me-3">Lihat sekarang</a> 
                        <a href="#" className="btn btn-secondary my-2">Buku Lainnya</a> 
                    </p> 
                </div> 
            </div> 
        {/* Katalog Buku */}
        </section> 
            <div className="album py-5 bg-body-tertiary">  
                <div className="container"> 
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"> 
                        <div className="col"> 
                            <div className="card shadow-sm h-100"> 
                                <img 
                                    src={thumbnail2} 
                                    alt="Deskripsi gambar" 
                                    className="bd-placeholder-img card-img-top" 
                                    height="225" 
                                    width="100%" 
                                    style={{objectFit: 'cover'}}
                                    />
                                <div className="card-body d-flex flex-column"> 
                                    <h5 className="card-title fw-bold">Atomic Habits</h5>
                                    <p 
                                        className="card-text"
                                        style={{
                                            display: '-webkit-box',
                                            WebkitLineClamp: 2,
                                            webkitBoxOrient: 'vertikal',
                                            overflow: 'hidden'
                                        }}
                                    >
                                        Cara mudah terbukti untuk membentuk kebiasaan baik dan menghilangkan kebiasaan buruk
                                    </p> 
                                    <div className="d-flex justify-content-between align-items-center mt-auto"> 
                                        <div className="btn-group"> 
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Beli Sekarang</button> 
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Preview</button> 
                                        </div> 
                                        <small className="text-body-secondary">236 Terjual</small> 
                                     </div> 
                                </div> 
                            </div> 
                        </div> 
                        <div className="col"> 
                            <div className="card shadow-sm h-100"> 
                                <img 
                                    src={thumbnail3} 
                                    alt="Deskripsi gambar" 
                                    className="bd-placeholder-img card-img-top" 
                                    height="225" 
                                    width="100%" 
                                    style={{objectFit: 'cover'}}
                                    />
                                <div className="card-body d-flex flex-column"> 
                                    <h5 className="card-title fw-bold">Berani Tidak Disukai</h5>
                                    <p 
                                        className="card-text"
                                        style={{
                                            display: '-webkit-box',
                                            WebkitLineClamp: 2,
                                            webkitBoxOrient: 'vertikal',
                                            overflow: 'hidden'
                                        }}
                                    >
                                        Apakah kebahagiaan adalah sesuatu yang Anda pilih? Berani Tidak Disukai menyajikan jawabannya secara sederhana dan langsung
                                    </p> 
                                    <div className="d-flex justify-content-between align-items-center mt-auto"> 
                                        <div className="btn-group"> 
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Beli Sekarang</button> 
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Preview</button> 
                                        </div> 
                                        <small className="text-body-secondary">201 Terjual</small> 
                                    </div> 
                                </div> 
                            </div> 
                        </div> 
                        <div className="col"> 
                            <div className="card shadow-sm h-100"> 
                                <img 
                                    src={thumbnail4} 
                                    alt="Deskripsi gambar" 
                                    className="bd-placeholder-img card-img-top" 
                                    height="225" 
                                    width="100%" 
                                    style={{objectFit: 'cover'}}
                                    />
                                <div className="card-body d-flex flex-column"> 
                                    <h5 className="card-title fw-bold">Sebuah Seni untuk Bersikap Bodo Amat</h5>
                                    <p 
                                        className="card-text"
                                        style={{
                                            display: '-webkit-box',
                                            WebkitLineClamp: 2,
                                            webkitBoxOrient: 'vertikal',
                                            overflow: 'hidden'
                                        }}
                                    >
                                        Sebuah Seni untuk Bersikap Bodo Amat menghadirkan pandangan lugas tentang menjalani hidup dengan menerima keterbatasan, memilih hal-hal yang layak dipedulikan, dan nyaman dengan perbedaan.
                                        </p> 
                                    <div className="d-flex justify-content-between align-items-center mt-auto"> 
                                        <div className="btn-group"> 
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Beli Sekarang</button> 
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Preview</button> 
                                        </div> 
                                        <small className="text-body-secondary">197 Terjual</small> 
                                    </div> 
                                </div> 
                            </div> 
                        </div> 
                        <div className="col"> 
                            <div className="card shadow-sm h-100"> 
                                <img 
                                    src={thumbnail5} 
                                    alt="Deskripsi gambar" 
                                    className="bd-placeholder-img card-img-top" 
                                    height="225" 
                                    width="100%" 
                                    style={{objectFit: 'cover'}}
                                    />
                                <div className="card-body d-flex flex-column"> 
                                    <h5 className="card-title fw-bold">The Book You Wish Your Parent had Read</h5>
                                    <p 
                                        className="card-text"
                                        style={{
                                            display: '-webkit-box',
                                            WebkitLineClamp: 2,
                                            webkitBoxOrient: 'vertikal',
                                            overflow: 'hidden'
                                        }}
                                    >
                                        Buku ini membahas hubungan antara orang tua dan anak-anak serta bagaimana pengalaman masa kecil mempengaruhi cara menjadi orang tua. 
                                    </p> 
                                    <div className="d-flex justify-content-between align-items-cente0 mt-autor"> 
                                        <div className="btn-group"> 
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Beli Sekarang</button> 
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Preview</button> 
                                        </div> 
                                        <small className="text-body-secondary">223 Terjual</small> 
                                    </div> 
                                </div> 
                            </div> 
                        </div> 
                        <div className="col"> 
                            <div className="card shadow-sm h-100"> 
                                <img 
                                    src={thumbnail6} 
                                    alt="Deskripsi gambar" 
                                    className="bd-placeholder-img card-img-top" 
                                    height="225" 
                                    width="100%" 
                                    style={{objectFit: 'cover'}}
                                    /> 
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title fw-bold">Filosofi Teras</h5> 
                                    <p 
                                        className="card-text"
                                        style={{
                                            display: '-webkit-box',
                                            WebkitLineClamp: 2,
                                            webkitBoxOrient: 'vertikal',
                                            overflow: 'hidden'
                                        }}
                                    >
                                        Filosofi Teras adalah penerapan Stoikisme kuno yang membantu mengelola emosi negatif dan membangun ketangguhan mental melalui prinsip-prinsip praktis yang relevan dengan kehidupan modern
                                        </p> 
                                    <div className="d-flex justify-content-between align-items-center mt-auto"> 
                                        <div className="btn-group"> 
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Beli Sekarang</button> 
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Preview</button> 
                                        </div> 
                                        <small className="text-body-secondary">167 Terjual</small> 
                                    </div> 
                                </div> 
                            </div> 
                        </div> 
                        <div className="col"> 
                            <div className="card shadow-sm h-100"> 
                                <img 
                                    src={thumbnail7} 
                                    alt="Deskripsi gambar" 
                                    className="bd-placeholder-img card-img-top" 
                                    height="225" 
                                    width="100%" 
                                    style={{objectFit: 'cover'}}
                                    /> 
                                <div className="card-body d-flex flex-column"> 
                                    <h5 className="card-title fw-bold">How to Win Friend and Influence People</h5>
                                    <p 
                                        className="card-text"
                                        style={{
                                            display: '-webkit-box',
                                            WebkitLineClamp: 2,
                                            webkitBoxOrient: 'vertikal',
                                            overflow: 'hidden'
                                        }}
                                    >
                                        Buku Dale Carnegie mengajarkan strategi abadi untuk membangun hubungan, berkomunikasi dengan efektif, dan memengaruhi orang lain tanpa menimbulkan rasa kesal.
                                        </p> 
                                    <div className="d-flex justify-content-between align-items-center mt-auto"> 
                                        <div className="btn-group"> 
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Beli Sekarang</button> 
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Preview</button> 
                                        </div> 
                                        <small className="text-body-secondary">161 Terjual</small> 
                                    </div> 
                                </div> 
                            </div> 
                        </div> 
                    </div> 
                </div> 
            </div> 

    </div>
    </>

)

}

export default Home;