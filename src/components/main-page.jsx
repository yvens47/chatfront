import { Fragment, React } from "react";
import LeftSideBar from "./leftsidebar";
import LeftSideBarWithICon from "././leftsidebar-icon";

function MainPage(props) {
  return (
    <Fragment>
      <LeftSideBar />
      <main className="container">
        <div className="row p-3">
          <div className="col-md-12 pl-3 pr-3"></div>
        </div>
      </main>
    </Fragment>
  );
}

export default MainPage;
