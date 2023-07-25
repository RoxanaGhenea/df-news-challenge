import "./FooterStyle.css";

const Footer = () => {
    let currentYear = new Date().getFullYear();
    return (
        <footer>
            <div className="upperContainer">
                <div>
                    <h3>NewsHub</h3>
                    <form>
                        <label>Stay in the know! Subscribe to receive exclusive updates!</label><br />
                        <input className="me-2" type="email" id="email" pattern=".+@globex\.com" size="30" placeholder="Email address.." required></input>
                        <button className="btn btn-dark">Submit</button>
                    </form>
                </div>
                <div className="upperInsideContainer">
                    <div>
                        <div className="category">Product</div>
                        <div>Overview</div>
                        <div>Features</div>
                        <div>Solution</div>
                        <div>Releases</div>
                    </div>
                    <div>
                        <div className="category">Company</div>
                        <div>About Us</div>
                        <div>Media</div>
                        <div>Careers</div>
                        <div>Contact</div>
                    </div>
                    <div>
                        <div className="category">Resources</div>
                        <div>Blog</div>
                        <div>Newsletter</div>
                        <div>Events</div>
                        <div>Help Center</div>
                    </div>
                    <div>
                        <div className="category">Social</div>
                        <div>Twitter</div>
                        <div>LinkedIn</div>
                        <div>Facebook</div>
                        <div>Github</div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="lowerContainer">
                <div>©{currentYear} News Hub! All rights reserved.</div>
                <div className="policies">
                    <div>Terms of Service</div>
                    <div>Policy Service</div>
                    <div>Cookie Policy</div>
                    <div>Partners</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;