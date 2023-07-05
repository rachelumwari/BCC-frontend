import './navbar.scss';
import { Button } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';

const Navbar = () => {
  return (
    <div className='topbar'>
    <div className="wrapper">
    <div className="log">
   <b>BCC in full word</b>
    </div>
   <div className="items">
     <div className="item">
     <Button>
     <span >
     <Stack direction="row" spacing={2}>
     <Avatar sx={{ bgcolor: deepPurple[500] }}>L</Avatar>
   </Stack>
     </span>
     </Button>
     </div>
   </div>
  </div>
    </div>
  )
}

export default Navbar