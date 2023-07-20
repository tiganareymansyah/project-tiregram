import Footer from "../../components/Footer";
import Navabco from "../../components/Navabco";

export default function Contact() {
    return (
        <>
            <Navabco />
            <div className="div-bg">
                <main className="flex justify-center">
                    <div className="div-contact">
                        <div className="flex justify-center">
                            <div className="flex flex-col items-center gap-3">
                                <img src="../../assets/trs.jpg" alt="trs" />
                                <p>Tigana Reymansyah</p>
                            </div>
                        </div>
                        <p>Whatsap</p>
                    </div>
                </main>
                <div className="footer-contact">
                    <Footer />
                </div>
            </div>
        </>
    )
}