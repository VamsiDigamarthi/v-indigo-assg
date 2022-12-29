import { FaSmile } from "react-icons/fa";
import { SlBookOpen } from "react-icons/sl";
import { CgYoutube } from "react-icons/cg";
import { HiUserGroup } from "react-icons/hi";
import "./index.css";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

const BecomeACCA = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="thanking-customers-section p-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 d-flex flex-column justify-content-center">
            <h1 className="thanking-customers-section-heading">
              Become ACCA in 18 months
            </h1>
            <p className="thanking-customers-section-description">
              Acquire globally recognized accountancy qualification, ACCA (also
              called as global CA), and get placed top MNCs & Big$s. Begin ACCA
              prep with 1FIN now.
            </p>
            <div className="d-flex flex-column justify-content-center d-md-none">
              <img
                alt="img"
                src="https://il-app.s3.ap-south-1.amazonaws.com/images/acca_first_panel.jpg"
                className="thanking-customers-section-img w-100"
              />
              <div className="form-card">
                <h6 className="text-center">
                  Aspiring to be an ACCA? get in touch with us!
                </h6>
                <input
                  className="form-control mb-3"
                  type="text"
                  placeholder="Phone Number*"
                />
                <input
                  className="form-control mb-3"
                  type="text"
                  placeholder="Email ID"
                />
                <select className="form-control mb-3">
                  <option>Current Qualification</option>
                  <option>B.Tech</option>
                  <option>MCA</option>
                </select>
                <select className="form-control mb-3">
                  <option>Interested In</option>
                  <option>B.Tech</option>
                  <option>MCA</option>
                </select>
                <Button variant="primary" onClick={handleShow}>
                  Request call back
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Thank You</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Successfully</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
            <div className="container">
              <div className="row flex-values mt-3">
                <div className="col-5 col-md-3 mb-3 all-icon-grid">
                  <FaSmile />
                  <div>
                    <p>Register User</p>
                    <p>248,255</p>
                  </div>
                </div>
                <div className="col-5 col-md-3 mb-3 all-icon-grid">
                  <SlBookOpen />
                  <div>
                    <p>Register User</p>
                    <p>248,255</p>
                  </div>
                </div>
                <div className="col-5 col-md-3 mb-3 all-icon-grid">
                  <CgYoutube />
                  <div>
                    <p>Register User</p>
                    <p>248,255</p>
                  </div>
                </div>
                <div className="col-5 col-md-3 mb-3 all-icon-grid">
                  <HiUserGroup />
                  <div>
                    <p>Register User</p>
                    <p>248,255</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="buttons">
              <button className="button-1">Download brochure</button>
              <button className="button-2">
                Silver Learning partner
                <span className="span-btn">ACCA</span>
              </button>
            </div>
          </div>

          <div className="col-12 col-md-4 d-none d-md-block">
            <div className="form-card">
              <h6 className="text-center">
                Aspiring to be an ACCA? get in touch with us!
              </h6>
              <input
                className="form-control mb-3"
                type="text"
                placeholder="Phone Number*"
              />
              <input
                className="form-control mb-3"
                type="text"
                placeholder="Email ID"
              />
              <select className="form-control mb-3">
                <option>Current Qualification</option>
                <option>B.Tech</option>
                <option>MCA</option>
              </select>
              <select className="form-control mb-3">
                <option>Interested In</option>
                <option>B.Tech</option>
                <option>MCA</option>
              </select>

              <Button variant="primary" onClick={handleShow}>
                Request call back
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Thank You</Modal.Title>
                </Modal.Header>
                <Modal.Body>Successfully</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeACCA;
