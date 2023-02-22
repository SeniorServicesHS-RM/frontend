import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  signOut,
  updatePassword,
} from "firebase/auth";
import { useContext, useState } from "react";
import FlexBox from "../components/FlexBox";
import { auth } from "../store/Firebase";
import { UserContext } from "../store/UserContext";

const ProfilePage = () => {
  const { user } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showNewConfPassword, setShowNewConfPassword] = useState(false);
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [newConfPassword, setNewConfPassword] = useState<string>("");
  const handleClickShowOldPassword = () => setShowOldPassword(!showOldPassword);
  const handleClickShowNewPassword = () => setShowNewPassword(!showNewPassword);
  const handleClickShowNewConfPassword = () =>
    setShowNewConfPassword(!showNewConfPassword);
  const userPW = auth.currentUser;
  const [errorOldPW, setErrorOldPW] = useState(false);
  const [errorNewPW, setErrorNewPW] = useState(false);
  const [errorMessageOldPW, setErrorMessageOldPW] = useState("");
  const [errorMessageNewPW, setErrorMessageNewPW] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setErrorOldPW(false);
    setErrorNewPW(false);
    setErrorMessageOldPW("");
    setErrorMessageNewPW("");
    setShowOldPassword(false);
    setShowNewPassword(false);
    setShowNewConfPassword(false);
  };

  const changePassword = () => {
    // "re-provide" the sign-in credentials for auth check with oldpassword
    setErrorOldPW(false);
    setErrorNewPW(false);
    setErrorMessageOldPW("");
    setErrorMessageNewPW("");

    const credential = EmailAuthProvider.credential(
      auth.currentUser.email,
      oldPassword
    );

    if (newPassword !== newConfPassword) {
      setErrorNewPW(true);
      setErrorMessageNewPW("Neue Passwörter stimmen nicht überein!");
      console.log("Neue Passwörter stimmen nicht überein!");
      return;
    } else if (newPassword.length < 8 && newConfPassword.length < 8) {
      setErrorNewPW(true);
      setErrorMessageNewPW(
        "Neues Passwort muss mindestens 8 Zeichen lang sein!"
      );
      console.log("Neues Passwort muss mindestens 8 Zeichen lang sein!");
      return;
    } else {
      setErrorNewPW(false);
      setErrorMessageNewPW("");
      reauthenticateWithCredential(userPW, credential)
        .then(() => {
          // User re-authenticated succesfully, proceed to update password
          console.log("reauthenticate succesful");
          const newPassword = newConfPassword;
          setErrorOldPW(false);
          setErrorMessageOldPW("");
          updatePassword(userPW, newPassword)
            .then(() => {
              // PW update successful.
              console.log("password change successful");
              // Logout user automatically after successful pw change
              signOut(auth)
                .then(() => {
                  console.log(
                    "re-login required after successfully changing the password"
                  );
                })
                .catch((error) => {
                  console.error("Error re-logging the user: ", error);
                });
            })
            .catch((error: any) => {
              console.error("Error on changing the password: ", error);
            });
        })
        .catch((error: any) => {
          setErrorOldPW(true);
          setErrorMessageOldPW("Das alte Passwort ist inkorrekt!");
          console.error("Error re-authenticating the user: ", error);
        });
    }
  };

  function showRoleName() {
    switch (user.role) {
      case 1:
        return "Einkaufsplaner";
      case 2:
        return "Einkaufshelfer";
      case 3:
        return "Senior";
      default:
        return " ";
    }
  }

  return (
    <>
      <Paper
        component={Stack}
        direction="column"
        justifyContent="center"
        sx={{
          backgroundColor: "primary.dark",
        }}
      >
        <FlexBox>
          <Typography variant="h3" component="h3">
            Profile Information
          </Typography>
        </FlexBox>

        <FlexBox>
          <Box component="span" sx={{ display: "block" }}>
            Rolle: {showRoleName()}
          </Box>
        </FlexBox>

        <FlexBox>
          <Box component="span" sx={{ display: "block" }}>
            E-Mail: {auth.currentUser.email}
          </Box>
        </FlexBox>

        <FlexBox>
          <Box component="span" sx={{ display: "block" }}>
            Vorname: {user.firstName}
          </Box>
        </FlexBox>

        <FlexBox>
          <Box component="span" sx={{ display: "block" }}>
            Nachname: {user.lastName}
          </Box>
        </FlexBox>

        <FlexBox>
          <Button variant="contained" onClick={handleClickOpen}>
            Passwort ändern
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Passwort ändern</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Wählen Sie mindestens 8 Zeichen. Verwenden Sie kein Passwort von
                einer anderen Website und kein einfach zu erratendes Passwort
                wie den Namen Ihres Haustiers.
              </DialogContentText>
              <TextField
                error={errorOldPW}
                helperText={errorMessageOldPW}
                autoFocus
                margin="dense"
                id="oldpassword"
                label="Altes Passwort"
                type={showOldPassword ? "text" : "password"}
                onChange={(event) => setOldPassword(event.target.value)}
                value={oldPassword}
                fullWidth
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowOldPassword}
                      >
                        {showOldPassword ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                error={errorNewPW}
                autoFocus
                margin="dense"
                id="newpassword"
                label="Neues Passwort"
                type={showNewPassword ? "text" : "password"}
                onChange={(event) => setNewPassword(event.target.value)}
                value={newPassword}
                fullWidth
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowNewPassword}
                      >
                        {showNewPassword ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                error={errorNewPW}
                helperText={errorMessageNewPW}
                autoFocus
                margin="dense"
                id="newconfpassword"
                label="Neues Passwort bestätigen"
                type={showNewConfPassword ? "text" : "password"}
                onChange={(event) => setNewConfPassword(event.target.value)}
                value={newConfPassword}
                fullWidth
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowNewConfPassword}
                      >
                        {showNewConfPassword ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Abbrechen</Button>
              <Button onClick={changePassword}>Passwort ändern</Button>
            </DialogActions>
          </Dialog>
        </FlexBox>
      </Paper>
    </>
  );
};

export default ProfilePage;
