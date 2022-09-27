import { FAQ } from "./faq";
import './partner-page.css'
import { Footer } from "./footer/Footer";
import { Signup } from "./signup-card/Signup";
import { Container } from 'react-bootstrap';
import { Section1 } from "./section1";

const styles = {
    width: "100%",
    margin: 'Auto 20px'
}

export const Business = () => {
    return (
        <Container className="container">

            < Section1 />

            <div className='section2 flexBox'>
                <div className="section2-text">
                    <h1>Why Become a Deleeva Paddy</h1>
                </div>
                <div style={{ height: '70%' }} className="cardHolder flexBox">
                    <div style={styles} className="card">
                        <div className="cardImage">
                            <img style={{
                                height: "60%", marginTop: '10px',
                                width: '30%',
                                backgroundColor: ''
                            }} src="/images/money.png" alt="money-logo" />
                        </div>
                        <div className="cardBody">
                            <div className="cardTitle">
                                <h2>Earn extra income</h2>
                            </div>
                            <div className="cardText">
                                <p>
                                Receive orders from all over the city. There are no monthly fees to pay and we'll send your earnings each week!
                                </p>
                            </div>

                        </div>
                    </div>
                    <div style={styles} className="card">
                        <div className="cardImage">
                            <img style={{
                                height: "60%",
                                width: '25%',
                                marginTop: '10px', backgroundColor: ''
                            }} src="/images/clock.png" alt="money-logo" />
                        </div>
                        <div className="cardBody">
                            <div className="cardTitle">
                                <h2>Flexible working hours</h2>
                            </div>
                            <div className="cardText">
                                You decide when and how often you deliver. An hour? Evenings and weekends? The whole week? You're the boss!
                            </div>

                        </div>
                    </div>
                    <div style={styles} className="card">
                        <div className="cardImage">
                            <img style={{
                                height: '60%',
                                width: '30%'
                            }}
                                src="/images/delivery-club.png" alt="money-logo" />
                        </div>
                        <div className="cardBody">
                            <div className="cardTitle">
                                <h2>Ride your way</h2>
                            </div>
                            <div className="cardText">
                                Whether you want to burn off some extra calories on a bicycle or deliver food in your car — it's all up to you!
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='section3 flexBox'>

                <div className="section3-wrapper flexBox">

                    <div className="section3-text-wrapper flexBox">

                        <div className="align-left">
                            <h2 className="section3-h2">If you’re a bike owner and looking to more than double your earning capacity, we want you on the Deeleva Team.</h2>

                            <p>We’ve got <strong>customers to share,</strong> and you’ve got bikes to spare. <br /> We bring the orders to you, and you earn while making a delivery. </p>
                        </div>
                    </div>

                    <div className="section3-image-wrapper flexBox">
                        <a href="/">
                            <img className="deleeva_image"
                                alt="deleeva_image"
                                src='/images/delivery-guy.jpg' />
                        </a>
                    </div>
                </div>

            </div>

            <div className="section3 flexBox">
                <div className="section3-wrapper">
                    <Signup />
                </div>
            </div>

            <div className='FAQ flexBox'>
                <section className='faq-container'>
                    <div className='faq-content'>
                        <FAQ />
                    </div>
                </section>
            </div>

            <Footer />
        </Container>
    )
}