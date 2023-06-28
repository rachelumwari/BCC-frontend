
import PersonIcon from '@mui/icons-material/Person';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import { Link } from 'react-router-dom';

const Siderbar = () => {
  return (
    <div className='sidebar'>
    <div className="top">
     <h2>Dashboard</h2>
    </div>
    <div className="center">
        <ul>
            <p className="title">MAIN MENU</p>
            <Link to="/dashboard" style={{textDecoration:"none"}}>
            <li>
            <DashboardCustomizeIcon  className="icon" />
                <span>Home</span>
            </li>
            </Link>
            <Link to="/user" style={{textDecoration:"none"}}>
            <li>
            <PersonIcon className="icon" />
                <span>User</span>
            </li>
            </Link>
            <Link to="/commitee" style={{textDecoration:"none"}}>
            <li>
                <GroupIcon className="icon"/>
                <span>Commitee</span>
            </li>
            </Link>
            <Link to="/schools" style={{textDecoration:"none"}}>
            <li>
            <SchoolIcon className="icon"/>
            <span>Schools</span>
        </li>
        </Link>
        <Link to="/family" style={{textDecoration:"none"}}>
        <li>
        <FamilyRestroomIcon className="icon"/>
        <span>Families</span>
    </li>
    </Link>
        </ul>
    </div>
    </div>
  )
}

export default Siderbar