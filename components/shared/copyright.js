import { Typography } from "@material-ui/core";
import Link from "next/link"

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="http://oni.gouv.ht/">
                ONI - Office Nationale d'Identification
          </Link>{" "}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


export default Copyright