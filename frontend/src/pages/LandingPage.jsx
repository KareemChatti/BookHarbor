import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';
import '../assets/style.css';
import logo from '../assets/logo.png';
import about from '../assets/about.jpg';
import karim from '../assets/karim.jpg';
import books from '../assets/books.png';
import hiba from '../assets/hiba.jpg';

const LandingPage = () => {
    const scrollToSection = (sectionId) => {
        scroll.scrollTo(sectionId, {
            smooth: true,
            duration: 500,
            offset: -50,
        });
    };

    return (
        <div>
            <nav>
                <div className="container">
                    <a href="#"><img src={logo} alt="Logo" /></a>
                    <ul>
                        <ScrollLink to="about" smooth={true} duration={500} onClick={() => scrollToSection("about")}>
                            <li>About</li>
                        </ScrollLink>
                        <ScrollLink to="teams" smooth={true} duration={500} onClick={() => scrollToSection("teams")}>
                            <li>Team</li>
                        </ScrollLink>
                        <ScrollLink to="contact" smooth={true} duration={500} onClick={() => scrollToSection("contact")}>
                            <li>Contact</li>
                        </ScrollLink>
                        <li><Link to="/login">Login</Link> </li>
                    </ul>
                </div>
            </nav>
            <section className="welcome" id="welcome">
                <div className="first-container">
                    <div className="dd1">
                        <div className="text">
                            <h4>WELCOME TO</h4>
                            <h1>BOOKHARBOR</h1>
                            <p className="desc">Découvrez un monde infini de connaissances et d'aventures littéraires. Parcourez notre vaste collection de livres, allant des classiques intemporels aux dernières œuvres captivantes. Chez nous, chaque page offre une nouvelle aventure. Trouvez votre prochaine lecture passionnante dès maintenant.</p>
                            <Link to="/users" id="buy">BUY NOW</Link>
                        </div>
                    </div>
                    <div className="img">
                        <img src={books} alt="books" />
                    </div>
                </div>
            </section>
            <div className="content">
                <h1 className="title-section">About US</h1>
                <section id="about">
                    <div className="about-card">
                        <div className="image-container">
                            <img className="img" src={about} alt="Bookstore Image" />
                        </div>
                        <div className="text-container">
                            <p>Bienvenue dans notre librairie, où l'amour de la littérature prend vie. Chez BOOKHARBOR, nous croyons en la puissance des mots pour inspirer, éduquer et transporter les lecteurs vers de nouveaux mondes. Notre collection soigneusement sélectionnée propose une gamme diverse de genres, garantissant quelque chose pour chaque amateur de livres. Que vous recherchiez les derniers best-sellers, des classiques intemporels ou des joyaux cachés, nous vous invitons à explorer la magie de la narration au sein des murs accueillants de notre librairie virtuelle. Bonne lecture !</p>
                        </div>
                    </div>
                </section>
            </div>
            <div className="content">
                <h1 className="title-section">Our Team</h1>
                <section id="teams">
                    <div className="row">
                        <div className="column">
                            <div className="card">
                                <img src={karim} alt="karim" style={{ width: '100%' }} />
                                <div className="teams-container">
                                    <h2>Abdelkarim chatti</h2><br />
                                    <p className="title">Etudiant DSI</p>
                                    <p>Étudiant passionné en développement web, je suis en route pour apporter des solutions innovantes au monde numérique</p> <br />
                                    <p>karim2004ch@gmail.com</p>
                                    <p><button className="button">Contact</button></p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <img src={hiba} alt="karim" style={{ width: '100%', height:'350px' }} />
                                <div className="teams-container">
                                    <h2>Hiba ben araar</h2> <br />
                                    <p className="title">Etudiante DSI</p>
                                    <p>Étudiante passionnée en développement web, je suis en route pour apporter des solutions innovantes au monde numérique</p> <br />
                                    <p>Hbenaraar@gmail.com</p>
                                    <p><button className="button">Contact</button></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="content">
                <h1 className="title-section">Contact Us</h1>
                <section id="contact" className="contact">
                    <div className="form-container">
                        <form className="form">
                            <div className="form-cont">
                                <div className="form-group">
                                    <label htmlFor="email">Company Email</label>
                                    <input required="" name="email" id="email" type="text" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="textarea">Write Your Message</label>
                                    <textarea required="" cols="50" rows="10" id="textarea" name="textarea" >          </textarea>
                                </div>
                                <button type="submit" className="form-submit-btn">Submit</button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
            <script src='./script.js'></script>
        </div>
    );
}

export default LandingPage;
