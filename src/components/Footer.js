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
                    <a href='#' target='_blank'><img alt='youtube' src={Youtube} /></a>
                    <a href='https://www.instagram.com/anqunix/' target='_blank'><img alt='instagram' src={Instagram} /></a>
                    <a href='#'  target='_blank'><img alt='facebook' src={Facebook} /></a>
                    <a href='#'  target='_blank'><img alt='twitter' src={Twitter} /></a>
                </div>
        </div>
    )
}