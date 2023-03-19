// import React, { useContext } from "react";
// import { useGetIdentity } from "@pankod/refine-core";
// import {
//   AppBar,
//   IconButton,
//   Stack,
//   Toolbar,
//   Typography,
//   Avatar,
// } from "@pankod/refine-mui";
// import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";

// import { ColorModeContext } from "contexts";

// export const Header: React.FC = () => {
//   const { mode, setMode } = useContext(ColorModeContext);

//   const { data: user } = useGetIdentity();
//   const shouldRenderHeader = true; // since we are using the dark/light toggle; we don't need to check if user is logged in or not.

//   return shouldRenderHeader ? (
//     <AppBar color="default" position="sticky" elevation={0} sx = {{backgroundColor:'#fcfcfc'}}>
//       <Toolbar>
//         <Stack
//           direction="row"
//           width="100%"
//           justifyContent="flex-end"
//           alignItems="center"
//         >
        
//           <Stack
//             direction="row"
//             gap="16px"
//             alignItems="center"
//             justifyContent="center"
//           >
//             {user?.name ? (
//               <Typography variant="subtitle2">{user?.name}</Typography>
//             ) : null}
//             {user?.avatar ? (
//               <Avatar src={user?.avatar} alt={user?.name} />
//             ) : null}
//           </Stack>
//         </Stack>
//       </Toolbar>
//     </AppBar>
//   ) : null;
// };

import React from "react";
import { useGetIdentity } from "@pankod/refine-core";
import { AppBar, Avatar, Stack, Toolbar, Typography } from "@pankod/refine-mui";

export const Header: React.FC = () => {
  const { data: user } = useGetIdentity();
  const showUserInfo = user && (user.name || user.avatar);

  return (
    <AppBar color="default" position="sticky" elevation={0} sx={{ background: '#fcfcf'}}>
      <Toolbar>
        <Stack direction="row" width="100%" justifyContent="flex-end" alignItems="center" >
          {showUserInfo && (
            <Stack direction="row" gap="16px" alignItems="center">
              {user.avatar && <Avatar src={user?.avatar} alt={user?.name} />}
              {user.name && <Typography variant="subtitle2">{user?.name}</Typography>}
            </Stack>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};