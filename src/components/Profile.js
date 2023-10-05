import profile from '../asset/profile.jpg';
import github from '../asset/github.png'
import linkedin from '../asset/linkedin.png'
const Profile = () => {
    return (
        <section id="profile">
            <div className="profileImg">
            <img src={profile} alt='profile'  className='ImageProfile'/>
            </div>
            <div className="profileDesc">
                <div className="aboutProfile">
                <span className="hello">Hello, I'm</span><br />
                <span className="profileName">Tharulatha</span><br/>
                <span className="profilerAbout">Frontend Developer</span>
                </div>
                <div className="contactLinks">
                   <a href='https://www.linkedin.com/in/tharulatha-b-165897242' target='blank'> <img src={linkedin} alt='linkedin' className='linkedin' /></a>
                  <a href='https://github.com/tharulatha' target='blank'><img src={github}  alt='github' className='github'/></a>
                    
                </div>
            </div>
    </section>
)
}

export default Profile