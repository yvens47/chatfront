import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ChatIcon from "@material-ui/icons/Chat";
import HistoryIcon from "@material-ui/icons/History";
function LeftSideBarWithICon(props) {
  return (
    <div className="box box-icon p-3">
      <IconButton color="primary" edge="start" variant="outlined">
        <ChatIcon />
      </IconButton>
      <IconButton color="primary" edge="start" variant="outlined">
        <HistoryIcon />
      </IconButton>
      chat
    </div>
  );
}

export default LeftSideBarWithICon;
