import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faStrava } from '@fortawesome/free-brands-svg-icons'

function Footer(props) {

    return (
        <footer>
            <a href="https://github.com/Spec-Tr" className='social-icon'>
                <FontAwesomeIcon icon={faGithub} size="4x" style={{ color: "#3A9F7E", padding: '20px' }} />
            </a>
            <a href="https://www.linkedin.com/in/loganlagrange/" className='social-icon'>
                <FontAwesomeIcon icon={faLinkedin} size="4x" style={{ color: "#3A9F7E", padding: '20px' }}  />
            </a>
            <a href="https://www.strava.com/athletes/26364094" className='social-icon'>
                <FontAwesomeIcon icon={faStrava} size="4x" style={{ color: "#3A9F7E", padding: '20px' }}  />
            </a>
        </footer>
    )
}

export default Footer;