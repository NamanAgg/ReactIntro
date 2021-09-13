import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { makeStyles, Grid, Avatar, Hidden } from "@material-ui/core";
import TelegramIcon from "@material-ui/icons/Telegram";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";

function NavBar(props) {
  let useStyles = makeStyles({
    centerDivs: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    centerDivsC: {
      width: "20%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    navContainer: {
      position: "sticky",
      top: "0",
      zIndex: "9",
      background: "white",
      width: "100vw",
      minHeight: "7vh",
      borderBottom: "1px solid #dbdbdb",
      margin: "0",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
    },
    instaIcon: {
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    gridLogo: {
      cursor: "pointer"
    }
  });
  let classes = useStyles();
  const history = useHistory();
  const handleProfile = () => {
    //  console.log(currentUser)
    history.push(`/profile/${props.userData.userId}`);
  };

  const handleBannerClick = ()=>{
      history.push('/');
  }
  return (
    <Grid container className={classes.navContainer} sm={12} xs={12}>
      <Grid item xs={12} sm={6}>
        <div
          className={classes.instaIcon}
          onClick={handleBannerClick}
        >
          <img
            alt="instaIcon"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            className={classes.gridLogo}
          ></img>
        </div>
      </Grid>
      <Hidden only={["xs"]}>
        <Grid item className={classes.centerDivsC} sm={3}>
          <HomeIcon onClick = {handleBannerClick} className ={classes.gridLogo} fontSize="medium"></HomeIcon>
          <FavoriteBorderIcon fontSize="medium" className ={classes.gridLogo}></FavoriteBorderIcon>

          <Avatar
            alt="profile"
            src={props.userData.profileUrl}
            fontSize="large"
            onClick={handleProfile}
            className ={classes.gridLogo}
          ></Avatar>
        </Grid>
      </Hidden>
    </Grid>
  );
}

export default NavBar;
