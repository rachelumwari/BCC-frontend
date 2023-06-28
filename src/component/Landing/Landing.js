import React from 'react'
import "./landing.css"
import TopnavBar from '../TopNav/TopnavBar'
import { Link } from 'react-router-dom'

const Landing = () => {
    <TopnavBar />
    return (
        <div className='landing'>
            <TopnavBar />
            <div className='landing-image'>
                <div className='landing-text'>
                    <h2>Bible Communication Center</h2>
                    <p>
                        The BCC Bible School is a Bible Study platform for Christians wishing <br />
                        to grow in the knowledge of the Word of God.Our courses are delivered <br />
                        online and face-to-face as need. Our goal is to make to make the Word <br />
                        of God known to as many people as possible <br />
                    </p>
                    <center>
                        <Link to="/signin" style={{textDecoration:"none"}}>
                            <button className='btn'>
                                Start
                            </button>
                        </Link>
                    </center>
                </div>
            </div>
        </div>
    )
}

export default Landing