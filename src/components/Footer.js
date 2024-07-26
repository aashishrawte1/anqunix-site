import Facebook from '../assets/images/Facebook.png';
import Instagram from '../assets/images/Instagram.png';
import Twitter from '../assets/images/Twitter.png';
import Youtube from '../assets/images/Youtube.png';
import './Footer.css';

export function Footer() {
    return (
        <div className='footer'>
                <span className='copyright'>Copyright &copy; 2024. All right reserved.</span>
                <div className='social'>
                    <img alt='youtube' src={Youtube} />
                    <img alt='instagram' src={Instagram} />
                    <img alt='facebook' src={Facebook} />
                    <img alt='twitter' src={Twitter} />
                </div>
        </div>
    )
}