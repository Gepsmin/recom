import React , {Component} from "react"

class Shirt extends Component{
    constructor(){
        super();

        this.state={
            length:69.4,
            chest:54,
            hem:52,
        }

        this.clicked = this.clicked.bind(this);
    }

    clicked(e){
        var val = e.target.getAttribute("value");
        if(val==="1"){
            this.setState(()=>({length:69.4, chest:54, hem:52}));
        }else if(val==="2"){
            this.setState(()=>({length:70.7, chest:56, hem:54}));
        }else if(val==="3"){
            this.setState(()=>({length:72, chest:58, hem:56}));
        }else if(val==="4"){
            this.setState(()=>({length:73.3, chest:60, hem:58}));
        }else if(val==="5"){
            this.setState(()=>({length:74.6, chest:62, hem:60}));
        }else if(val==="6"){
            this.setState(()=>({length:75.9, chest:64, hem:62}));
        }else if(val==="7"){
            this.setState(()=>({length:77.2, chest:66, hem:64}));
        }
    }

    render(){
        return(
            <div className="shirt">
                <div className="button" value="1" onClick={this.clicked}> 1</div>
                <div className="button" value="2" onClick={this.clicked}> 2</div>
                <div className="button" value="3" onClick={this.clicked}> 3</div>
                <div className="button" value="4" onClick={this.clicked}> 4</div>
                <div className="button" value="5" onClick={this.clicked}> 5</div>
                <div className="button" value="6" onClick={this.clicked}> 6</div>
                <div className="button" value="7" onClick={this.clicked}> 7</div>

                <svg className="shirtsvg">
                    <g>
                        <path d={`M ${this.state.hem} ${this.state.length*3+10}
                         L  ${this.state.hem*5/2-this.state.chest*3/2} ${this.state.length*6/5} 
                         L ${this.state.hem*5/2-this.state.chest*3/2-20} ${this.state.length*6/5+10}  
                         L ${this.state.chest-60} 55 
                         L ${this.state.chest-40} 35 
                         L ${this.state.chest} 15 
                         L ${this.state.hem+this.state.chest} 10 
                         L ${this.state.hem+this.state.chest+5} 5 
                         L ${this.state.hem+2*this.state.chest-5} 5
                        L ${this.state.hem+2*this.state.chest} 10 
                        L ${2*this.state.hem+2*this.state.chest} 15 
                        L ${2*this.state.hem+2*this.state.chest+40} 35 
                        L ${2*this.state.hem+2*this.state.chest+60} 55
                        L ${5/2*this.state.hem+3/2*this.state.chest+20} ${this.state.length*6/5+10} 
                        L ${5/2*this.state.hem+3/2*this.state.chest} ${this.state.length*6/5}
                        L ${4*this.state.hem} ${this.state.length*3+10}  Z`} fill="none" stroke="black" stroke-width="3">
                        </path>
                    </g>
                </svg>
            </div>
        );
    }


}

export default Shirt;