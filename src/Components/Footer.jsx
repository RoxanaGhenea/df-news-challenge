import "./FooterStyle.css";

const Footer = () => {
    let currentYear = new Date().getFullYear();
    return (
        <footer>
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