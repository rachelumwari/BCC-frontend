import './dashboard.scss';
import Siderbar from '../../component/siderbar/Siderbar';
import Navbar from '../../component/navbar/Navbar';
const Dashborad = () => {
  return (
    <div className='home'>
        <Siderbar/>
            <div className='dashbordNav'>
                <Navbar/>
            </div>
    </div>
  )
}

export default Dashborad