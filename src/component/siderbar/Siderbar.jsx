import './siderbar.scss';
import PersonIcon from '@mui/icons-material/Person';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import { Link } from 'react-router-dom'

const Siderbar = () => {
  return (
    <div className='sidebar'>
    <div className="top">
     <h2>BCC</h2>
    </div>
    <div className="center">
        <ul>
            <p className="title">MAIN MENU</p>
            <Link to="/dashboard" style={{textDecoration:"none"}}>
            <li>
            <DashboardCustomizeIcon  className="icon" />
                <span>Dashboard</span>
            </li>
            </Link>
            <Link to="/user" style={{textDecoration:"none"}}>
            <li>
            <PersonIcon className="icon" />
                <span>Users</span>
            </li>
            </Link>
            <Link to="/teacher" style={{textDecoration:"none"}}>
            <li>
                <GroupIcon className="icon"/>
                <span>Teacher</span>
            </li>
            </Link>
            <Link to="/student" style={{textDecoration:"none"}}>
            <li>
            <GroupIcon className="icon"/>
            <span>Student</span>
        </li>
        </Link>
            <li>
            <SchoolIcon className="icon"/>
            <span>Assignment</span>
        </li>
        <li>
        <FamilyRestroomIcon className="icon"/>
        <span>Course</span>
    </li>
        </ul>
    </div>
    </div>
  )
}

export default Siderbar
