import { Fragment, React, useEffect } from "react";
import LeftSideBar from "./leftsidebar";
import LeftSideBarWithICon from "././leftsidebar-icon";
import PrimarySearchAppBar from "./navbar";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";
import Avatar from "@material-ui/core/Avatar";
import io from "socket.io-client";
let socket;

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
      border: "none"
    }
  }
}));

function MainPage(props) {
  useEffect(() => {
    socket = io("localhost:5000");
    socket.connect();
    console.log(socket);
  }, []);
  const classes = useStyles();
  return (
    <Fragment>
      <PrimarySearchAppBar />
      <LeftSideBar />
      <main className="container">
        <div className="row justify-content-center p-3">
          <div className="col-md-10 pl-3 pr-3">
            <div className="chat-wrapper">
              <div className="chat-box-wrapper-msg">
                <div className="incoming-Message">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Fugit sed reprehenderit libero dolorem
                </div>
                <div className="outgoing-Message">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Fugit sed reprehenderit libero dolorem
                </div>
              </div>
              <div className="chat-box-wrapper p-2">
                <form className={classes.root} noValidate autoComplete="off">
                  <div className="row">
                    <div className="col-1 p-0 m-0">
                      <Avatar
                        alt="Remy Sharp"
                        src="https://www.niemanlab.org/images/Greg-Emerson-edit-2.jpg"
                      />
                    </div>
                    <div className="col-10 p-0">
                      <TextField
                        fullWidth={true}
                        id="outlined-basic"
                        label="Message"
                        variant="outlined"
                        multiline
                        placeholder="type a new message"
                      />
                    </div>
                    <div className="col col-1 p-0">
                      <IconButton component="span">
                        <SendIcon />
                      </IconButton>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default MainPage;
