import { NavLink } from "react-router-dom";
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
                <img src="../../images/trs.jpg" alt="trs" className="img-contact"/>
                <p className="text-2xl tracking-wide font-serif">Tigana Reymansyah</p>
              </div>
            </div>
            <p className="font-bold mt-3">Contact : </p>
            <ul className="indent-7 ul-contact">
              <li>
                <p>- Whatsapp : 082267274100</p>
              </li>
              <li>
                <p>
                  - Instagram :{" "}
                  <NavLink
                    to={"https://www.instagram.com/tigana_reymansyah/?hl=id"}
                    target="blank"
                  >
                    @tigana_reymansyah
                  </NavLink>
                </p>
              </li>
              <li>
                <p>
                  - Facebook :{" "}
                  <NavLink
                    to={
                      "https://www.facebook.com/people/Tigana-Reymansyah/pfbid02RLWXWqs9WKgPa39gWoyfD8qtLbetNpiXt2qqMEFpawbthCaYHLMjuxjV7kXQy8Kfl/"
                    }
                    target="blank"
                  >
                    Tigana Reymansyah
                  </NavLink>
                </p>
              </li>
              <li>
                <p>
                  - Github :{" "}
                  <NavLink
                    to={"https://github.com/tiganareymansyah"}
                    target="blank"
                  >
                    tiganareymansyah
                  </NavLink>
                </p>
              </li>
              <li>
                <p>
                  - LinkedIn :{" "}
                  <NavLink
                    to={
                      "https://www.linkedin.com/in/tigana-reymansyah-3b1055278/"
                    }
                    target="blank"
                  >
                    Tigana Reymansyah
                  </NavLink>
                </p>
              </li>
            </ul>
          </div>
        </main>
        <div className="footer-contact">
          <Footer />
        </div>
      </div>
    </>
  );
}
