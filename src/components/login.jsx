import { Fragment, React } from "react";
import LeftSideBar from "./leftsidebar";
import LeftSideBarWithICon from "././leftsidebar-icon";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import PrimarySearchAppBar from "./navbar";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%"
    }
  }
}));

function Login(props) {
  const classes = useStyles();
  return (
    <Fragment>
      <PrimarySearchAppBar />
      <main className="container">
        <div className="row p-3 justify-content-center">
          <div className="col-md-6 pl-3 pr-3 pt-5">
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                placeholder="Enter email to login"
              />
            </form>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default Login;
