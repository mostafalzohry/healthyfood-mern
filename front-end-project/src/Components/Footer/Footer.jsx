import "../Home/Home.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer ">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className = "mb-4" >Healthy</h2>
            <div className="copyRight text-white">&copy;2021 - 2022 Healthy.</div>
          </div>

          <div className="col">
            <ul className="list-unstyled">
              <li>    <Link className="text-white" to="/" >
                Home
              </Link></li>
              <li>    <Link className="text-white" to="about" >
                About Us
              </Link></li>
            </ul>
          </div>

          <div className="col">
            <ul className="list-unstyled">
              <li> <Link className="text-white" to="contact" >
                Contact Us
              </Link></li>
         
              <li> <Link className="text-white" to="faq">
                Faq
              </Link></li>
            </ul>
          </div>

          <div className="col">
            <ul className="list-unstyled">
              <li className="text-white"> <i class="fa-solid fa-location-dot"></i> New Cairo, 15 May City</li>
              <li className="text-white"><i class="fa-solid fa-phone"></i> 01123456785</li>
            </ul>
          
            <div className="social-icons">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-twitter"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
