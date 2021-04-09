import LeftSideBarWithICon from "./leftsidebar-icon";

function LeftSideBar(props) {
  return (
    <aside className=" leftSidebar ">
      <LeftSideBarWithICon />
      <div className="sidebar">
        <div className="box p-3">content here</div>
      </div>
    </aside>
  );
}

export default LeftSideBar;
