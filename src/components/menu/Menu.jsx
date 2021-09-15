import './menu.scss';

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={'menu ' +(menuOpen && 'active')}>
            <ul>
                <li><a href="https://drive.google.com/file/d/1DATBgFLuu7X-m6xCTWiRrxSd21zOalK-/view?usp=sharing" download="Paras_Kamble_Full_Stack">Resume</a></li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href='#intro'>Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    {/* portfolio is for skills */}
                    <a href='#portfolio'>Skills</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    {/* work is for skills */}
                    <a href='#work'>Projects</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
        </div>
    )
}
