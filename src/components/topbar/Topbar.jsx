import './topbar.scss';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import DraftsRoundedIcon from '@material-ui/icons/DraftsRounded';
function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={'topbar '+ (menuOpen && 'active')}>
            <div className="wrapper">
                <div className="left">
                    <a href='#intro' className='logo'>portfolio 1.0</a>
                    <div className="itemContainer">
                        <AccountCircleRoundedIcon className='icon'/>
                        <span>+91-9604210970</span>
                    </div>
                    <div className="itemContainer">
                        <DraftsRoundedIcon className='icon'/>
                        <span>paraskamble8268@gmail.com</span>
                        <span><a href="https://drive.google.com/file/d/1DATBgFLuu7X-m6xCTWiRrxSd21zOalK-/view?usp=sharing" download="Paras_Kamble_Full_Stack">For resume click here...</a></span>
                    </div>
                </div>
                
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar