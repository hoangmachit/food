import { Marker, Phone, Facebook, Global } from "../Icon";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container p-0 d-flex">
          <div className="main-footer">
            <h1>Công ty TNHH Allgrow-labo ALLGROW Inc.</h1>
            <div className="footer-info">
              <div className="items-f">
                <span className="svg-footer">
                  <Marker />
                </span>
                <div className="items-info">
                  4th Floor, An Phu Plaza Building, 117-119 Ly Chinh Thang, Vo
                  Thi Sau Ward, District 3, Ho Chi Minh City, Vietnam
                </div>
              </div>
              <div className="items-f">
                <span className="svg-footer">
                  <Phone />
                </span>
                <div className="items-info">
                  <a
                    href="tel:0969874264"
                    className="text-decoration-none"
                    title="Phone"
                  >
                    (+84) 969 874 264
                  </a>
                </div>
              </div>
              <div className="items-f">
                <span className="svg-footer">
                  <Facebook />
                </span>
                <div className="items-info">
                  <a
                    href="https://www.facebook.com/machvanhoang1507"
                    target="blank"
                    className="text-decoration-none"
                    title=" Contact Support Team"
                  >
                    Contact Support Team
                  </a>
                </div>
              </div>
              <div className="items-f">
                <span className="svg-footer">
                  <Global />
                </span>
                <div className="items-info">
                  <a
                    href="https://allgrow-labo.jp"
                    className="text-decoration-none"
                    target="blank"
                    title="Allgrow Labo"
                  >
                    {" "}
                    www.allgrow-labo.jp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          Copyright © 2022 ALLGROW LABO Inc. By design <strong>BE TEAM.</strong>
        </p>
      </div>
    </>
  );
};
export default Footer;
