import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import HomeIcon from '@material-ui/icons/Home';
import CodeIcon from '@material-ui/icons/Code';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import {Link} from 'react-router-dom'

const Header = () => {

    return (
        <div className='Header'>

            <div>
                <div className='logo'></div>
            </div>

            <div className='nav'>
                <Link to='/'>
                    <HomeIcon className='Icon' style={{fontSize: 50}}/>
                </Link>
                <Link to='/code'>
                    <CodeIcon className='Icon' style={{fontSize: 50}}/>
                </Link>
                <Link to='/photos'>
                    <PhotoLibraryIcon className='Icon' style={{fontSize: 50}}/>
                </Link>
                <Link to='/contact'>
                    <MailOutlineIcon className='Icon' style={{fontSize: 50}}/>
                </Link>
            </div>

            <div className='social'>
                <a href='https://www.linkedin.com/in/jesse-etherington/'>
                <LinkedInIcon className='Icon' style={{fontSize: 40}}/>
                </a>
                <a href='https://github.com/Snergdafer'>
                <GitHubIcon className='Icon' style={{fontSize: 40}}/>
                </a>
            </div>

        </div>
    )
}

export default Header