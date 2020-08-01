import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

function Footer() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        Learnmern.io
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Footer;
