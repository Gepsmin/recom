import React, { Component } from "react";



class Shower extends Component{



    render(){
        let clothing = this.props.zaraf.clothing;

        return(
            <div>
                {clothing? <div>{clothing}</div>:<div></div>}

            </div>

        );

    }


}
export default Shower;