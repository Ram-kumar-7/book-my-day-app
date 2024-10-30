import { AccountCircle, Login } from "@mui/icons-material";
import LoginIcon from '@mui/icons-material/Login';
import EmailIcon from '@mui/icons-material/Email';
import LockOpenIcon from '@mui/icons-material/Lock';
import { CircularProgress } from "@mui/material";

export const iconBank = {
    loginIcon: (sx) => <LoginIcon sx={sx} />,
    emailIcon: (sx) => <EmailIcon sx={sx} />,
    lockIcon: (sx) => <LockOpenIcon sx={sx} />,
    accountIcon: (sx) => <AccountCircle sx={sx} />,
    loadingIcon: (sx) => <CircularProgress sx={sx} />
};
