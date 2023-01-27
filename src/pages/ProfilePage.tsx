import FlexBox from "../components/FlexBox";
import { auth } from '../store/Firebase';
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { EmailAuthCredential } from "firebase/auth";

const ProfilePage = () => {
  return (
    <Paper component={Stack} direction="column" justifyContent="center">
         <FlexBox>
            <Typography variant="h5" component="h3">
                Profile Information
            </Typography> 
         </FlexBox>

         <FlexBox>
            <Box component="span" sx={{ display: 'block' }}>Rolle: </Box> 
         </FlexBox>

         <FlexBox>
            <Box component="span" sx={{ display: 'block' }}>E-Mail: {auth.currentUser.email}</Box> 
         </FlexBox>
         
         <FlexBox>
            <Box component="span" sx={{ display: 'block' }}>Vorname: </Box> 
         </FlexBox>
         
         <FlexBox>
            <Box component="span" sx={{ display: 'block' }}>Nachname: </Box> 
         </FlexBox>
         
         <FlexBox>
            <Box component="span" sx={{ display: 'block' }}>Wohnanlage: </Box> 
         </FlexBox>
         
         <FlexBox>
            <Box component="span" sx={{ display: 'block' }}>Adresse: </Box> 
         </FlexBox>
    </Paper>

  );
};
export default ProfilePage;