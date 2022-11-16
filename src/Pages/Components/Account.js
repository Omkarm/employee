import React from "react";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
const Account = () => {
  return (
    <div className="splittop1 top">
      {/* <img src={"./logo1.png"} height="50"></img> */}

      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        {/* <div class="imgalign">
          {" "}
          <img src={"./logo1.png"} height="50"></img>
        </div> */}
        <h4>Omkar More</h4>
        <div className="nav-item dropdown">
          <a
            className="nav-link active dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
          >
            <AccountCircleRoundedIcon fontSize="large" />
          </a>
          <ul className="dropdown-menu dropbox">
            <li>
              <a className="dropdown-item" href="/account">
                Account
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/personalproject">
                Personal Projects
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/settings">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/signout">
                SignOut
              </a>
            </li>
          </ul>
        </div>
        &nbsp;&nbsp;&nbsp;
      </div>
    </div>
  );
};

export default Account;
