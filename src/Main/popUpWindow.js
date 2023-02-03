import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./popUpWindow.css";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail, HiOutlineOfficeBuilding } from "react-icons/hi";

const PopUpWindow = ({ trigger }) => {
  return (
    <Popup
      className="popup"
      trigger={
        <div className="popUpCircle">
          <FiPhoneCall color="#ecba05" size="1.7em" />
        </div>
      }
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="popUpSection">
            {/* <img /> */}
            <div className="detailsLine">
              <div className="detailBox">
                <FiPhoneCall size={25} />
                <h1 className="detailText">+94740916598 - HashBaze</h1>
                <h1 className="detailText">+94763983077 - Tharaka</h1>
              </div>
              <div className="detailBox">
                <HiOutlineMail size={25} />
                <h1 className="detailText">hashbaze@gmail.com</h1>
              </div>
              <div className="detailBox">
                <HiOutlineOfficeBuilding size={25} />
                <h1 className="detailText">147/A Eliot Rd, Galle</h1>
              </div>
            </div>
            <h2 className="rights"> © HashBaze. All Rights Reserved</h2>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default PopUpWindow;
