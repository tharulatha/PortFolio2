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
                    <img src={linkedin} alt='linkedin' className='linkedin' />
                  <img src={github}  alt='github' className='github'/>
                    
                </div>
            </div>
    </section>
)
}

export default Profile