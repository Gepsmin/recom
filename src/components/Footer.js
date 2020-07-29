import React, {Component} from "react";

class Footer extends Component{

    render(){
        return(
            <div className="Footer">
                <div className="SocialMedia">
                    <div className="SocialMediaHeader">
                        <h1>Bizi burdan takip edebilirsiniz</h1>
                    </div>
                    <div className="SocialMediaLinks">
                        <div className="Twitter">
                            <i className="fab fa-twitter"></i>
                        </div>
                        <div className="Facebook">
                            <i className="fab fa-facebook-f"></i>
                        </div>
                        <div className="Instagram">
                            <i className="fab fa-instagram"></i>
                        </div>
                    </div>
                    
                </div>
                <div className="WhoWeAre">
                    <div>Onur Sefa</div>
                    <div>Ataberk</div>
                </div>
            </div>
        )
    }

}

export default Footer;