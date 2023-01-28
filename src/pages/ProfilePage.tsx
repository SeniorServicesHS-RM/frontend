import FlexBox from "../components/FlexBox";
import { auth } from '../store/Firebase';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { useContext } from "react";
import { UserContext } from "../store/UserContext";
import { ifError } from "assert";
import { stringify } from "querystring";



const ProfilePage = () => {
   const { user } = useContext(UserContext);

   function showRoleName() {
      var rolename: string;
      switch (user.role) {
         case 1:  return rolename = "Einkaufsplaner";
         case 2:  return rolename = "Einkaufshelfer";
         case 3:  return rolename = "Senior";
         default: return rolename = " ";    
   }}

   return (
    <Paper component={Stack} direction="column" justifyContent="center">
         <FlexBox>
            <Typography variant="h5" component="h3">
                Profile Information
            </Typography> 
         </FlexBox>
         
         <FlexBox>
            <Box component="span" sx={{ display: 'block' }}>Rolle: {showRoleName()}</Box> 
         </FlexBox>

         <FlexBox>
            <Box component="span" sx={{ display: 'block' }}>E-Mail: {auth.currentUser.email}</Box> 
         </FlexBox>
         
         <FlexBox>
            <Box component="span" sx={{ display: 'block' }}>Vorname: {user.firstName}</Box> 
         </FlexBox>
         
         <FlexBox>
            <Box component="span" sx={{ display: 'block' }}>Nachname: {user.lastName}</Box> 
         </FlexBox>
    </Paper>

  );
};
export default ProfilePage;