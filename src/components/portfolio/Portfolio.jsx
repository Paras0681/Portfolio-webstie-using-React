import './portfolio.scss';

function Portfolio() {
    return (
        <div className='portfolio' id='portfolio'>
           <h1>Skills &Technologies</h1> 
            {/* <ul>

            </ul> */}
            <div className="container">
                <div className="item">
                <img src="https://mindxmaster.s3.amazonaws.com/wp-content/uploads/2019/08/1_python-1-750x422.jpg" alt="python-logo"/>
                <h3>Python</h3>
                </div>
                <div className="item">
                <img src="https://wallpaperaccess.com/full/3949076.jpg" alt="react-logo"/>
                <h3>React</h3>
                </div>
                <div className="item">
                <img src="https://www.teahub.io/photos/full/292-2920011_django-developer.png" alt="django-logo"/>
                <h3>Django</h3>
                </div>
                <div className="item">
                <img src="https://i.imgur.com/KRwfMz3.png" alt="js-logo"/>
                <h3>Javascript</h3>
                </div>
                <div className="item">
                <img src="https://www.cloudways.com/blog/wp-content/uploads/Building-Laravel-Android-App-With-Laravel-REST-API-1280x720.jpg" alt="restapi-logo"/>
                <h3>RestAPI</h3>
                </div>
                <div className="item">
                <img src="https://wallpaperaccess.com/full/1631875.jpg" alt="html-logo"/>
                <h3>HTML5</h3>
                </div>
                <div className="item">
                <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--uFzN1yha--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/17ewmfug4cencd9izyii.jpg" alt="css-logo"/>
                <h3>CSS</h3>
                </div>
                <div className="item">
                <img src="https://images.ctfassets.net/xn002lwgzosc/7iT5h25MV71pXiJ91dxPmR/a39c8c48035c721d26610bb15de0a565/Blog_Thumbnail.png" alt="fire-logo"/>
                <h3>FireBase</h3>
                </div>
                <div className="item">
                <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--yPX8CIHI--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/otnbdjputmuddq933pp2.jpeg" alt="heroku-logo"/>
                <h3>Heroku</h3>
                </div>
                <div className="item">
                <img src="https://images8.alphacoders.com/430/thumb-1920-430944.jpg" alt="git-logo"/>
                <h3>git</h3>
                </div>
                <div className="item">
                <img src="data:image/png;base64,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" alt="agile-logo"/>
                <h3>Agile</h3>
                </div>
                <div className="item">
                <img src="https://thumbs.dreamstime.com/b/scrum-agile-development-methodology-programming-application-design-technology-concept-virtual-screen-scrum-agile-145585179.jpg" alt="scrum-logo"/>
                <h3>Scrum</h3>
                </div>
            </div>
        </div>

    )
}

export default Portfolio
