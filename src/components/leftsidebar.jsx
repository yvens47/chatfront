import LeftSideBarWithICon from "./leftsidebar-icon";

function LeftSideBar(props) {
  return (
    <aside className=" leftSidebar ">
      <div className="sidebar">
        <LeftSideBarWithICon />
        <div className="box p-3">content here</div>
      </div>
    </aside>
  );
}

export default LeftSideBar;
