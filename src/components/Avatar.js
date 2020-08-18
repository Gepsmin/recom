import React, {Component} from 'react'

class Avatar extends Component{
    constructor(){
        super();

        this.state = {
            open : false,
            
            chest: '',
            waist: '',
            hips: '',
            height: '',
            neckline: '',
            insideLeg: '',
            footLength: '',
            handLength: '',
            headLength: '',
            headDiameter: ''

        }

        this.change = this.change.bind(this);
        this.buttonClick = this.buttonClick.bind(this);
    }

    change(e){
        let value = e.target.value;
        let name = e.target.name;
        if(name==='chest'){
            this.setState(()=>({chest:value}))
        }else if(name==='waist'){
            this.setState(()=>({waist:value}))
        }else if(name==='hips'){
            this.setState(()=>({hips:value}))    
        }else if(name==='height'){
            this.setState(()=>({height:value}))
        }else if(name==='neckline'){
            this.setState(()=>({neckline:value}))
        }else if(name==='insideLeg'){
            this.setState(()=>({insideLeg:value}))
        }else if(name==='footLength'){
            this.setState(()=>({footLength:value}))
        }else if(name==='handLength'){
            this.setState(()=>({handLength:value}))
        }else if(name==='headLength'){
            this.setState(()=>({headLength:value}))
        }else if(name==='headDiameter'){
            this.setState(()=>({headDiameter:value}))
        }
        console.log(this.state);
    }

    buttonClick(e){
        const {open} = this.state;
        if(open){
            this.setState(()=>({open: false}))
        }else{
            this.setState(()=>({open: true}))
        }
    }


    render(){
        return(
            <div className="AvatarPage">
                <div className="AvatarButton" onClick={this.buttonClick}>Avatar Button</div>
                <div className="AvatarVisual" style={{display: this.state.open? 'block':'none'}}>
                    <div className="AvatarForm">
                        <div>
                            <input name='chest'
                            className="input ex"
                            placeholder={"chest"}
                            onChange={this.change}
                            onBlur={this.blur}>
                            </input>
                        </div>

                        <div>
                            <input name='waist'
                            className="input ex"
                            placeholder={"waist"}
                            onChange={this.change}
                            onBlur={this.blur}>
                            </input>
                        </div>

                        <div>
                            <input name='hips'
                            className="input ex"
                            placeholder={"hips"}
                            onChange={this.change}
                            onBlur={this.blur}>
                            </input>
                        </div>

                        <div>
                            <input name='height'
                            className="input ex"
                            placeholder={"height"}
                            onChange={this.change}
                            onBlur={this.blur}>
                            </input>
                        </div>

                        <div>
                            <input name='neckline'
                            className="input ex"
                            placeholder={"neckline"}
                            onChange={this.change}
                            onBlur={this.blur}>
                            </input>
                        </div>

                        <div>
                            <input name='insideLeg'
                            className="input ex"
                            placeholder={"insideLeg"}
                            onChange={this.change}
                            onBlur={this.blur}>
                            </input>
                        </div>

                        <div>
                            <input name='footLength'
                            className="input ex"
                            placeholder={"footLength"}
                            onChange={this.change}
                            onBlur={this.blur}>
                            </input>
                        </div>

                        <div>
                            <input name='handLength'
                            className="input ex"
                            placeholder={"handLength"}
                            onChange={this.change}
                            onBlur={this.blur}>
                            </input>
                        </div>

                        <div>
                            <input name='headLength'
                            className="input ex"
                            placeholder={"headLength"}
                            onChange={this.change}
                            onBlur={this.blur}>
                            </input>
                        </div>

                        <div>
                            <input name='headDiameter'
                            className="input ex"
                            placeholder={"headDiameter"}
                            onChange={this.change}
                            onBlur={this.blur}>
                            </input>
                        </div>
                    </div>
                    <div className="Avatar2D">
                        <svg className="AvatarSVG">
                        </svg>
                    </div>
                </div>
            </div>
        );
    }


}

export default Avatar;