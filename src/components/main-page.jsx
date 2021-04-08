import { Fragment, React } from "react";
import LeftSideBar from "./leftsidebar";

function MainPage(props) {
  return (
    <Fragment>
      <LeftSideBar />
      <main className="container">
        <div className="row p-3">
          <div className="col-md-12 pl-3 pr-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
            distinctio eveniet exercitationem repellat numquam, harum obcaecati?
            Eaque dignissimos labore dolore voluptates odit ad repellendus id
            consequatur hic animi? Deserunt, perferendis.
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default MainPage;
