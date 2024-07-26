import React, { useEffect, useState } from 'react';
import OurClients from "../assets/images/clients.png";
import DeploymentImg from "../assets/images/deployment.png";
import DesingImg from "../assets/images/designing.png";
import DevelopmentImg from "../assets/images/development.png";
import WorkImg from "../assets/images/discover.png";
import Girl from "../assets/images/girl.png";
import groupImage from '../assets/images/Group.png';
import Quotation from "../assets/images/quotation.png";
import SeeMore from "../assets/images/seemore.png";
import { Button } from "../components/Button";
import { Footer } from '../components/Footer';
import { Header } from "../components/Header";
import './Home.css';


const sentences = [
    "Web Development",
    "App Development",
    "Graphic Designing",
    "Motion Graphics",
    "Product Animation",
    "Vedio Editing",
    "Digital Marketing"
]
export function Home() {
    const [text, setText] = useState('');
    const [sentenceIndex, setSentenceIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typingSpeed = 100;
        const deletingSpeed = 50;
        const delayBetweenSentences = 2000;
    
        if (isDeleting) {
          if (charIndex > 0) {
            setTimeout(() => setCharIndex(prev => prev - 1), deletingSpeed);
          } else {
            setIsDeleting(false);
            setSentenceIndex((prev) => (prev + 1) % sentences.length);
          }
        } else {
          if (charIndex < sentences[sentenceIndex].length) {
            setTimeout(() => setCharIndex(prev => prev + 1), typingSpeed);
          } else {
            setTimeout(() => setIsDeleting(true), delayBetweenSentences);
          }
        }
      }, [charIndex, isDeleting, sentenceIndex]);
    
      useEffect(() => {
        setText(sentences[sentenceIndex].substring(0, charIndex));
      }, [charIndex, sentenceIndex]);

    return (
        <div className="home">
            <Header />
            <section className='section1'>
                <div className='left_container'>
                    <div className="services">We do <span className='changing_text'>{text}</span> <br/> for your business.</div>
                    <p className="service_description">
                        Transformaing Ideas into Reality with expert Web and Mobile Application developer,  <br/>
                        Graphic and Motion Graphic Designer, Animation,  <br/>Advertising and Digital Marketing solutions.
                    </p>
                    <Button text="Know More"/>
                </div>
                <div>
                    <img className='group_image' height={500} width={350} src={groupImage} alt='group_image' />
                </div>
            </section>
            <section className='section2'>
                <div className='section2_left'>
                    <div className='top_brands'>
                        <Button text="Top Brands" style={{ borderRadius: '15px', fontSize: '12px' }}/>  
                    </div>
                    <p className='clients'>
                        <span className='our_clients'>Our Clients</span><br/>
                        <span className='partner_text'>
                            Proud Partnerships <br/> and Collaborations <br/>
                        </span>
                        <span className='company_text'>Our Company Makes it Happen...</span>
                    </p>
                </div>
                <div>
                    <img className='section2_right' width={600}  src={OurClients} alt='clients'/>
                </div>
            </section>
            <section className='section3'>
                <span className='projects'>Our Projects</span>
                <span>Explore Our Portfolio of Successful web <br/>and App Development Projects</span>
                <div className='seemore'><span>See more </span><img width={10} height={10} alt='see more' src={SeeMore} /></div>
            </section>

            <section className='section4'>
                <span className='how'>How it Works</span>
                <div className='works'>
                    <div className='works_div'>
                        <img width={30} height={30} src={WorkImg} className='works_img' alt='discovery' />
                        <span className='works_heading'>Discovery & Planning</span>
                        <p className='works_description'>Understanding your project <br/>needs and defining goals.</p>
                    </div>
                    <div className='works_div'>
                        <img width={30} height={30} src={DesingImg} className='works_img' alt='discovery' />
                        <span className='works_heading'>Desgin & Prototyping</span>
                        <p className='works_description'>Creating captivating designs and <br/>interactive prototypes.</p>
                    </div>
                    <div className='works_div'>
                        <img width={30} height={30} src={DevelopmentImg} className='works_img' alt='discovery' />
                        <span className='works_heading'>Development & Testing</span>
                        <p className='works_description'>Bringing your project to live with <br/>cutting-edge technologies.</p>
                    </div>
                    <div className='works_div'>
                        <img width={30} height={30} src={DeploymentImg} className='works_img' alt='discovery' />
                        <span className='works_heading'>Deployment & Support</span>
                        <p className='works_description'>Deploying and providing ongoing <br/>maintenance and support.</p>
                    </div>
                </div>

            </section>
            <section className='section5'>
                <div className='client_says'>What our client say</div>
                <div className='clients_review'>
                    <div className='img_back'>
                        <img className='imageback' width={320} height={400} src={Girl} alt='girl' />
                    </div>
                    <div className='client_review'>
                        <img className='quotation_image' width={50} height={55} src={Quotation} alt='quotation' />
                        <p>Amet in elementum nulla scelerisque dui, egestas at. <br/>
                        Elit consectetur turpis elementum amet vitae et etiam<br/>
                        nec. Varius valutpat hac adipiscing tincidunt pretium.</p>
                        <br/>
                        <span className='sign'>Angel Paulina</span>
                    </div>
                </div>
            </section>

            
            <Footer />
        </div>
        
    )
}