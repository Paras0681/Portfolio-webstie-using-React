import "./contact.scss";
export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <h1>My Contact ...</h1>
        <a href='https://mail.google.com/mail/u/0/#inbox?compose=new'><img src="assets/mail.png" alt="" /></a>
        <a href='https://www.linkedin.com/in/paras-kamble/'><img src="assets/linked.png" alt="" /></a>
        <a href='https://github.com/Paras0681'><img src="assets/github.png" alt="" /></a>
        <a href='tel:9604210970'><img src="assets/phone.png" alt="" /></a>
        <ul>
          <li>Gmail</li>
          <li>LinkedIn</li>
          <li>Github</li>
          <li>Phone no.</li>
        </ul>
        <a className='btn' href="https://drive.google.com/file/d/1DATBgFLuu7X-m6xCTWiRrxSd21zOalK-/view?usp=sharing" download="Paras_Kamble_Full_Stack">Resume</a>
      </div>
    </div>
  );
}