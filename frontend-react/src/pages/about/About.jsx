import Footer from "../../components/Footer";
import Navabco from "../../components/Navabco";

export default function About() {
    return (
        <>
            <Navabco />
            <div className="div-bg">
                <main className="flex justify-center">
                    <div className="div-about mt-12">
                        <h1 className="text-pink-600 h1-about">TiRegram</h1>
                        <p className="text-justify tracking-wide p-about">
                            Tigana Reymansyah gram atau disingkat dengan TiRegram adalah salah satu media sosial berbasis web yang cara 
                            penggunaan aplikasinya sama seperti instagram. TiRegram dibuat oleh nama kepanjangan dari aplikasi itu sendiri
                            yaitu Tigana Reymansyah pada hari Senin, 17 Juli 2023. Aplikasi ini dibuat menggunakan bahasa pemrograman 
                            Javascript dengan framework React dan Node.js dengan tujuan untuk meningkatkan skill pemrograman si pembuat
                            itu sendiri.
                        </p>
                    </div>
                </main>
                <div className="footer-about">
                    <Footer />
                </div>
            </div>
        </>
    )
}