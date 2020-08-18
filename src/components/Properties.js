import React, { Component } from "react"
import Select from 'react-select'
import { zara_female } from "../data/zara";
import Shower from './Shower';

const genderOptions = [
    {value: 'F', label: 'Female'},
    {value: 'M', label: 'Male'}
]


const brandOptions = [
    {value: 'zara', label: 'Zara'},
    {value: 'koton', label: 'Koton'},
    {value: 'hm', label: 'H&M'}
]

const typeOptionsFemaleZara = [
    {value: 'clothing', label: 'Clothing'},
    {value: 'tights', label: 'Tights and Leggings'},
    {value: 'hats', label: 'Hats and Caps'},
    {value: 'bikinis', label: 'Bikinis'},
    {value: 'belts', label: 'Belts'},
    {value: 'rings', label: 'Rings'},
    {value: 'gloves', label: 'Gloves'},
    {value: 'socks', label: 'Socks'},
    {value: 'shoes', label: 'Shoes'}
]

const typeOptionsMaleZara = [
    {value: 'top', label: 'Coats, Jackets, Tshirts, Shirts, Sweaters'},
    {value: 'suit', label: 'Suit,Blazer'},
    {value: 'shirts', label: 'Shirts'},
    {value: 'jeans', label: 'Jeans, Suit Trousers'},
    {value: 'shorts', label: 'Sport Trousers, Track Suits, Shorts, Underwear'},
    {value: 'hatsman', label: 'Hats and Caps'},
    {value: 'beltsman', label: 'Belts'},
    {value: 'socksman', label: 'Socks'},
    {value: 'glovesman', label: 'Gloves'},
    {value: 'shoesman', label: 'Shoes'}
]

const typeOptionsFemaleKoton = [
    {value: 'clothing', label: 'Clothing'},
    {value: 'dress', label: 'Dress'},
    {value: 'bottom', label: 'Bottom'},
    {value: 'denim', label: 'Denim'},
    {value: 'bikinis', label: 'Bikinis'},
    {value: 'panties', label: 'Panties'},
    {value: 'belts', label: 'Belts'},
]

const typeOptionsMaleKoton = [
    {value: 'top', label: 'Top'},
    {value: 'bottomman', label: 'Bottom'},
    {value: 'denimman', label: 'Denim'},
    {value: 'beltsman', label: 'Belts'}
]

const typeOptionsFemaleHM = [
    {value: 'clothing', label: 'Clothing'},
    {value: 'dress', label: 'Dress'},
    {value: 'trousers', label: 'Trousers'},
    {value: 'bras', label: 'Bras'},
    {value: 'socks', label: 'Socks'},
    {value: 'belts', label: 'Belts'},
    {value: 'shoes', label: 'Shoes'},
    {value: 'rings', label: 'Rings'},
    {value: 'gloves', label: 'Gloves'},
    {value: 'hats', label: 'Hats'}
]

const typeOptionsMaleHM = [
    {value: 'top', label: 'Top'},
    {value: 'shirts', label: 'Shirts'},
    {value: 'trousersman', label: 'Trousers'},
    {value: 'socksman', label: 'Socks'},
    {value: 'shoesman', label: 'Shoes'},
    {value: 'beltsman', label: 'Belts'},
    {value: 'glovesman', label: 'Gloves'},
    {value: 'hatsman', label: 'Hats'},
    {value: 'ringsman', label: 'Rings'}
]

const changer = (data, value, name) => {
    Object.keys(data).forEach((key)=>{
        if(key===name){
            data[key].data = value;
            return;
        }
    })
    return data;
}

const brandChanger = (data, value, name) => {
    Object.keys(data).forEach((key)=>{
        if(key===name){
            data[key] = value;
            return;
        }
    })
    return data;
}

class Properties extends Component{
    constructor(){
        super();

        this.state={
            zaraf : {
                clothing: '',
                tights: ''
            },
            zaram : [],


            gender : '',
            submitted : false,
            brands: '',
            typesdelete : [],
            options: [],

            types:{
                
            },
            clothing:false,
                tights:false,
                hats: false,
                bikinis: false,
                belts: false,
                rings: false,
                gloves: false,
                socks: false,
                shoes: false,
                dress: false,
                bottom: false,
                denim: false,
                panties: false,
                trousers: false,
                bras: false,


                top: false,
                suit: false,
                shirts: false,
                jeans: false,
                shorts: false,
                hatsman: false,
                beltsman: false,
                socksman: false,
                glovesman: false,
                shoesman: false,
                bottomman: false,
                denimman: false,
                trousersman: false,
                ringsman: false,

            data:{
                chest:{
                    data: '',
                    placeholder: 'chest',
                    isValid: true,
                    label: 'chest',
                    help: 'invalid chest'
                },
                waist:{
                    data: '',
                    placeholder: 'waist',
                    isValid: true,
                    label: 'waist',
                    help: 'invalid waist'
                },
                hips:{
                    data: '',
                    placeholder: 'hips',
                    isValid: true,
                    label: 'hips',
                    help: 'invalid hips'
                },
                height:{
                    data: '',
                    placeholder: 'height',
                    isValid: true,
                    label: 'height',
                    help: 'invalid height'
                },
                neckline:{
                    data: '',
                    placeholder: 'neckline',
                    isValid: true,
                    label: 'neckline',
                    help: 'invalid neckline'
                },
                insideLeg:{
                    data: '',
                    placeholder: 'inside leg',
                    isValid: true,
                    label: 'insideLeg',
                    help: 'invalid inside leg'
                },
                ms1:{
                    data: '',
                    placeholder: 'measurement 1',
                    isValid: true,
                    label: 'ms1',
                    help: 'invalid measurement 1'
                },
                ms2:{
                    data: '',
                    placeholder: 'measurement 2',
                    isValid: true,
                    label: 'ms2',
                    help: 'invalid measurement 2'
                },
                footLength:{
                    data:'',
                    placeholder: 'foot length',
                    isValid: true,
                    label: 'footLength',
                    help: 'invalid foot length'
                },
                ballGirth:{
                    data: '',
                    placeholder: 'ball girth',
                    isValid: true,
                    label: 'ballGirth',
                    help: 'invalid ball girth'
                },
                calfGirth:{
                    data: '',
                    placeholder: 'calf girth',
                    isValid: true,
                    label: 'calfGirth',
                    help: 'invalid claf girth'
                },
                length:{
                    data: '',
                    placeholder: 'belt length',
                    isValid: true,
                    label: 'length',
                    help: 'invalid belt length'
                },
                hand:{
                    data:'',
                    placeholder: 'hand outline',
                    isValid: true,
                    label: 'hand',
                    help: 'invalid hand outline'
                },
                head:{
                    data: '',
                    placeholder: 'head measurement',
                    isValid: true,
                    label: 'head',
                    help: 'invalid head'
                },
                diameter:{
                    data:'',
                    placeholder: 'finger diameter',
                    isValid: true,
                    label: 'diameter',
                    help: 'invalid diameter'
                },
                armLength:{
                    data:'',
                    placeholder: 'arm length',
                    isValid: true,
                    label: 'armLength',
                    help: 'invalid arm length'
                },
                handLength:{
                    data:'',
                    placeholder: 'hand length',
                    isValid: true,
                    label: 'handLength',
                    help: 'invalid hand length'
                },
                handWidth:{
                    data:'',
                    placeholder: 'hand width',
                    isValid: true,
                    label: 'handWidth',
                    help: 'invalid hand width'
                },
                weight:{
                    data: '',
                    placeholder: 'weight',
                    isValid: true,
                    label: 'weight',
                    help: 'invalid weight'
                }

            }
        }

        this.genderSelecter = this.genderSelecter.bind(this);
        this.typeSelecter = this.typeSelecter.bind(this);
        this.brandSelecter = this.brandSelecter.bind(this);
        this.submit = this.submit.bind(this);
        this.change = this.change.bind(this);
        this.blur = this.blur.bind(this);
    }

    genderSelecter(e){
        if(e){
            this.setState(()=>({gender:e.value,}));
        }else{
            this.setState(({gender:null,}));
        }
    }

    brandSelecter(e){
        const {gender} = this.state;
        let l = [];
        let typeOptions = [];
        var set = new Set();
        if(e){
            Object.keys(e).forEach((v)=>{
                l.push(e[v].value);
                if(gender==='F'){
                    if(e[v].value==="zara"){
                        Object.keys(typeOptionsFemaleZara).forEach((key)=>{
                            if(!set.has(typeOptionsFemaleZara[key].value)){
                                typeOptions.push(typeOptionsFemaleZara[key]);
                                set.add(typeOptionsFemaleZara[key].value);
                            }
                        });
                    }
                    if(e[v].value==="hm"){
                        Object.keys(typeOptionsFemaleHM).forEach((key)=>{
                            if(!set.has(typeOptionsFemaleHM[key].value)){
                                typeOptions.push(typeOptionsFemaleHM[key]);
                                set.add(typeOptionsFemaleHM[key].value);
                            }
                        })
                    }
                    if(e[v].value==="koton"){
                        Object.keys(typeOptionsFemaleKoton).forEach((key)=>{
                            if(!set.has(typeOptionsFemaleKoton[key].value)){
                                typeOptions.push(typeOptionsFemaleKoton[key]);
                                set.add(typeOptionsFemaleKoton[key].value);
                            }
                        })
                    }
                }else if(gender==='M'){
                    if(e[v].value==="zara"){
                        Object.keys(typeOptionsMaleZara).forEach((key)=>{
                            if(!set.has(typeOptionsMaleZara[key].value)){
                                typeOptions.push(typeOptionsMaleZara[key]);
                                set.add(typeOptionsMaleZara[key].value);
                            }
                        });
                    }
                    if(e[v].value==="hm"){
                        Object.keys(typeOptionsMaleHM).forEach((key)=>{
                            if(!set.has(typeOptionsMaleHM[key].value)){
                                typeOptions.push(typeOptionsMaleHM[key]);
                                set.add(typeOptionsMaleHM[key].value);
                            }
                        })
                    }
                    if(e[v].value==="koton"){
                        Object.keys(typeOptionsMaleKoton).forEach((key)=>{
                            if(!set.has(typeOptionsMaleKoton[key].value)){
                                typeOptions.push(typeOptionsMaleKoton[key]);
                                set.add(typeOptionsMaleKoton[key].value);
                            }
                        })
                    }
                }
            });
            if(l.length===0){
                this.setState(()=>({brands:'',}));
            }else{
                this.setState(()=>({brands:l,}));
            }
        }else{
            this.setState(()=>({brands:'',}));
        }
        this.setState(()=>({options:typeOptions}))
    }

    typeSelecter(e){
        if(e){
            let l = [];
            Object.keys(e).forEach((v)=>{
                l.push(e[v].value);
            })
            this.setState(()=>({typesdelete:l,}));
            console.log("L: ", l);
            Object.keys(l).forEach((key)=>{
                if(l[key]==='clothing'){
                    this.setState(()=>({clothing:true}))
                }else if(l[key]==='tights'){
                    this.setState(()=>({tights:true}))
                }else if(l[key]==='hats'){
                    this.setState(()=>({hats:true}))
                }else if(l[key]==='bikinis'){
                    this.setState(()=>({bikinis:true}))
                }else if(l[key]==='belts'){
                    this.setState(()=>({belts:true}))
                }else if(l[key]==='rings'){
                    this.setState(()=>({rings:true}))
                }else if(l[key]==='gloves'){
                    this.setState(()=>({gloves:true}))
                }else if(l[key]==='socks'){
                    this.setState(()=>({socks:true}))
                }else if(l[key]==='footwear'){
                    this.setState(()=>({footwear:true}))
                }else if(l[key]==='coats'){
                    this.setState(()=>({coats:true}))
                }else if(l[key]==='suit'){
                    this.setState(()=>({suit:true}))
                }else if(l[key]==='shirts'){
                    this.setState(()=>({shirts:true}))
                }else if(l[key]==='jeans'){
                    this.setState(()=>({jeans:true}))
                }else if(l[key]==='shorts'){
                    this.setState(()=>({shorts:true}))
                }else if(l[key]==='hatsman'){
                    this.setState(()=>({hatsman:true}))
                }else if(l[key]==='beltsman'){
                    this.setState(()=>({beltsman:true}))
                }else if(l[key]==='socksman'){
                    this.setState(()=>({socksman:true}))
                }else if(l[key]==='glovesman'){
                    this.setState(()=>({glovesman:true}))
                }else if(l[key]==='shoes'){
                    this.setState(()=>({shoes:true}))
                }else if(l[key]==='dress'){
                    this.setState(()=>({dress:true}))
                }else if(l[key]==='bottom'){
                    this.setState(()=>({bottom:true}))
                }else if(l[key]==='denim'){
                    this.setState(()=>({denim:true}))
                }else if(l[key]==='panties'){
                    this.setState(()=>({panties:true}))
                }else if(l[key]==='trousers'){
                    this.setState(()=>({trousers:true}))
                }else if(l[key]==='bras'){
                    this.setState(()=>({bras:true}))
                }else if(l[key]==='top'){
                    this.setState(()=>({top:true}))
                }else if(l[key]==='shoesman'){
                    this.setState(()=>({shoesman:true}))
                }else if(l[key]==='bottomman'){
                    this.setState(()=>({bottomman:true}))
                }else if(l[key]==='denimman'){
                    this.setState(()=>({denimman:true}))
                }else if(l[key]==='trousersman'){
                    this.setState(()=>({trousersman:true}))
                }else if(l[key]==='shoesman'){
                    this.setState(()=>({shoesman:true}))
                }else if(l[key]==='ringsman'){
                    this.setState(()=>({ringsman:true}))
                }
            });
        }else{
            this.setState(()=>({types:[],}));
            Object.keys(this.state).forEach((key)=>{
                if(key==='clothing'){
                    this.setState(()=>({clothing:false}))
                }else if(key==='tights'){
                    this.setState(()=>({tights:false}))
                }else if(key==='hats'){
                    this.setState(()=>({hats:false}))
                }else if(key==='bikinis'){
                    this.setState(()=>({bikinis:false}))
                }else if(key==='belts'){
                    this.setState(()=>({belts:false}))
                }else if(key==='rings'){
                    this.setState(()=>({rings:false}))
                }else if(key==='gloves'){
                    this.setState(()=>({gloves:false}))
                }else if(key==='socks'){
                    this.setState(()=>({socks:false}))
                }else if(key==='footwear'){
                    this.setState(()=>({footwear:false}))
                }else if(key==='coats'){
                    this.setState(()=>({coats:false}))
                }else if(key==='suit'){
                    this.setState(()=>({suit:false}))
                }else if(key==='shirts'){
                    this.setState(()=>({shirts:false}))
                }else if(key==='jeans'){
                    this.setState(()=>({jeans:false}))
                }else if(key==='shorts'){
                    this.setState(()=>({shorts:false}))
                }else if(key==='hatsman'){
                    this.setState(()=>({hatsman:false}))
                }else if(key==='beltsman'){
                    this.setState(()=>({beltsman:false}))
                }else if(key==='socksman'){
                    this.setState(()=>({socksman:false}))
                }else if(key==='glovesman'){
                    this.setState(()=>({glovesman:false}))
                }else if(key==='shoes'){
                    this.setState(()=>({shoes:false}))
                }else if(key==='dress'){
                    this.setState(()=>({dress:false}))
                }else if(key==='bottom'){
                    this.setState(()=>({bottom:false}))
                }else if(key==='denim'){
                    this.setState(()=>({denim:false}))
                }else if(key==='panties'){
                    this.setState(()=>({panties:false}))
                }else if(key==='trousers'){
                    this.setState(()=>({trousers:false}))
                }else if(key==='bras'){
                    this.setState(()=>({bras:false}))
                }else if(key==='top'){
                    this.setState(()=>({top:false}))
                }else if(key==='shoesman'){
                    this.setState(()=>({shoesman:false}))
                }else if(key==='bottomman'){
                    this.setState(()=>({bottomman:false}))
                }else if(key==='denimman'){
                    this.setState(()=>({denimman:false}))
                }else if(key==='trousersman'){
                    this.setState(()=>({trousersman:false}))
                }else if(key==='shoesman'){
                    this.setState(()=>({shoesman:false}))
                }else if(key==='ringsman'){
                    this.setState(()=>({ringsman:false}))
                }
            });
        }
    }

    calculateDistance(list1, list2){
        var total = 0;
        Object.keys(list1, list2).forEach((key1, key2)=>{
            if(list1[key1]!==0){
                total += (list1[key1] - list2[key2]) * (list1[key1] - list2[key2]);
            }
        });

        var sqrrt = Math.sqrt(total);
        return sqrrt;
    }

    calculateClothing(data){
        let l = [];
        var chest = Number(data.chest.data);
        var waist = Number(data.waist.data);
        var hips = Number(data.hips.data);
        var height = Number(data.height.data);
        const ourdata = [chest, waist, hips, height];

        const zaraf = zara_female.clothing;
        Object.keys(zaraf).forEach((key)=>{
            var distance = this.calculateDistance(zaraf[key],ourdata);
            l.push([key, distance]);
        });

        l.sort(function(a,b){
            var x = a[1] < b[1]? -1:1;
            return x;
        });
        
        let result = ("clothing", l[0][0]);

        return result;
    }

    submit(e){
        let clothing = '';
        if(this.state.clothing){
            clothing = this.calculateClothing(this.state.clothingData);
        }
        if(this.state.tights){
     //       let tight_size = this.calculateClothing(this.state.tightsData);
        }
        if(this.state.hats){
    //        let hats_size = this.calculateClothing(this.state.hatsData); 
        }
        if(this.state.bikinis){
   //         let bikinis_size = this.calculateClothing(this.state.bikinisData);
        }
        if(this.state.belts){
  //          let belts_size = this.calculateClothing(this.state.beltsData);
        }
        if(this.state.rings){
  //          let rings_size = this.calculateClothing(this.state.ringsData);
        }
        if(this.state.gloves){
     //       let gloves_size = this.calculateClothing(this.state.glovesData);
        }
        if(this.state.socks){
    //        let socks_size = this.calculateClothing(this.state.socksData);
        }
        if(this.state.footwear){
           // let footwear_size = this.calculateClothing(this.state.footwearData);
        }
        this.setState(prevState => ({
            submitted: true,
            zaraf : brandChanger(prevState.zaraf, clothing, "clothing")
        }))
    }

    change(e){
        let value = e.target.value;
        let name = e.target.name;
        if(name==='chest'){
            this.setState(prevState => ({clothingData: changer(prevState.data,value,name),
                                            bikinisData: changer(prevState.data,value,name),
                                            coatsData: changer(prevState.data,value,name),
                                            suitData: changer(prevState.data,value,name),
                                            shirtsData: changer(prevState.data,value,name)}));
        }else if(name==='waist'){
            this.setState(prevState => ({clothingData: changer(prevState.data,value,name),
                                            jeansData: changer(prevState.data,value,name),
                                            shortsData: changer(prevState.data,value,name)}));
        }else if(name==='hips'){
            this.setState(prevState => ({clothingData: changer(prevState.data,value,name),
                                            tightsData: changer(prevState.data,value,name),
                                            bikinisData: changer(prevState.data,value,name),
                                            jeansData: changer(prevState.data,value,name)}));
        }else if(name==='height'){
            this.setState(prevState => ({clothingData: changer(prevState.data,value,name),
                                            tightsData: changer(prevState.data,value,name)}));
        }else if(name==='weight'){
            this.setState(prevState => ({tightsData: changer(prevState.data,value,name)}));
        }else if(name==='head'){
            this.setState(prevState => ({hatsData: changer(prevState.data,value,name),
                                            hatsmanData: changer(prevState.data,value,name)}));
        }else if(name==='length'){
            this.setState(prevState => ({beltsData: changer(prevState.data,value,name),
                                            beltsmanData: changer(prevState.data,value,name)}));
        }else if(name==='diameter'){
            this.setState(prevState => ({ringsData: changer(prevState.data,value,name)}));
        }else if(name==='hand'){
            this.setState(prevState => ({glovesData: changer(prevState.data,value,name)}));
        }else if(name==='footLength'){
            this.setState(prevState => ({socksData: changer(prevState.data,value,name),
                                            footwearData: changer(prevState.data,value,name),
                                            socksmanData: changer(prevState.data,value,name),
                                            shoesData: changer(prevState.data,value,name)}));
        }else if(name==='neckline'){
            this.setState(prevState => ({shirtsData: changer(prevState.data,value,name)}));
        }else if(name==='handLength'){
            this.setState(prevState => ({glovesmanData: changer(prevState.data,value,name)}));
        }else if(name==='handWith'){
            this.setState(prevState => ({glovesmanData: changer(prevState.data,value,name)}));
        }
    }


    blur(e){
        console.log("blur")
    }

    render(){
        const {submitted} = this.state;
        const {zaraf} = this.state;
        const {gender, brands, options} = this.state;
        const {clothing, tights, hats, bikinis, belts, rings, gloves, socks, shoes,dress,bottom,denim,panties,trousers,bras} = this.state;
        const {top,suit,shirts,jeans,shorts,hatsman,beltsman,socksman,glovesman,shoesman,bottomman,denimman,trousersman,ringsman}=this.state;
        const {data} = this.state;
        return(
            <div className="Properties">
                <div className="Gender">
                    <Select isLoading={false} 
                    defaultValue={'asdf'}
                    isClearable={true}
                    isSearchable={true}
                    options={genderOptions}
                    onChange={this.genderSelecter}/>
                </div>
                <div>
                    <Select isLoading={false} 
                    defaultValue={[]}
                    isClearable={true}
                    isSearchable={true}
                    options={brandOptions}
                    isMulti
                    onChange={this.brandSelecter}>

                    </Select>
                </div>
                <div style={{display: gender&&brands? 'block':'none'}} >
                    <Select isLoading={false} 
                    defaultValue={[]}
                    isClearable={true}
                    isSearchable={true}
                    options={options}
                    isMulti
                    onChange={this.typeSelecter}>
                        {console.log(gender, brands)}
                    </Select>
                </div>


                <div className="PropertyButton" onClick={this.submit}>
                    Button
                </div>

                <div className="Clothing">
                    <input style={{display: clothing||dress||shirts||top||bikinis||suit? 'block':'none'}}
                        name='chest'
                        className="input ex"
                        placeholder={data.chest.placeholder}
                        onChange= {this.change}
                        onBlur={this.blur}
                    ></input>
                    <input style={{display:clothing||dress||trousers||belts||shirts||top||trousersman||beltsman||bottom||
                                            denim||bikinis||panties||bottomman||denimman||jeans||shorts? 'block':'none'}}
                        name='waist'
                        className="input ex"
                        placeholder={data.waist.placeholder}
                        onChange= {this.change}
                        onBlur={this.blur}
                    ></input>
                    <input style={{display:clothing||dress||trousers||belts||trousersman||bottom||bikinis||panties||
                                            bottomman||denimman||tights||jeans? 'block':'none'}}
                        name='hips'
                        className="input ex"
                        placeholder={data.hips.placeholder}
                        onChange= {this.change}
                        onBlur={this.blur}
                    ></input>
                    <input style={{display:clothing||dress||trousers||top||tights? 'block':'none'}}
                        name='height'                            
                        className="input ex"
                        placeholder={data.height.placeholder}
                        onChange= {this.change}
                        onBlur={this.blur}
                    ></input>
                    <input style={{display:clothing||dress||shirts||top? 'block':'none'}}
                        name='neckline'                            
                        className="input ex"
                        placeholder={data.neckline.placeholder}
                        onChange= {this.change}
                        onBlur={this.blur}
                    ></input>
                    <input style={{display:trousers||trousersman||denim||denimman? 'block':'none'}}
                        name='insideLeg'                            
                        className="input ex"
                        placeholder={data.insideLeg.placeholder}
                        onChange= {this.change}
                        onBlur={this.blur}
                    ></input>
                    <input style={{display: bras? 'block':'none'}}
                        name='ms1'                            
                        className="input ex"
                        placeholder={data.ms1.placeholder}
                        onChange= {this.change}
                        onBlur={this.blur}
                    ></input>
                    <input style={{display: bras? 'block':'none'}}
                        name='ms2'                            
                        className="input ex"
                        placeholder={data.ms2.placeholder}
                        onChange= {this.change}
                        onBlur={this.blur}
                    ></input>
                    <input style={{display: socks||shoes||socksman||shoesman? 'block':'none'}}
                        name='footLength'                            
                        className="input ex"
                        placeholder={data.footLength.placeholder}
                        onChange= {this.change}
                        onBlur={this.blur}
                    ></input>
                    <input style={{display: shoes? 'block':'none'}}
                        name='ballGirth'                            
                        className="input ex"
                        placeholder={data.ballGirth.placeholder}
                        onChange= {this.change}
                        onBlur={this.blur}
                    ></input>
                    <input style={{display: shoes? 'block':'none'}}
                        name='calfGirth'                            
                        className="input ex"
                        placeholder={data.calfGirth.placeholder}
                        onChange= {this.change}
                        onBlur={this.blur}
                    ></input>
                    <input style={{display: belts||beltsman? 'block':'none'}}
                        name='length'                            
                        className="input ex"
                        placeholder={data.length.placeholder}
                        onChange= {this.change}
                        onBlur={this.blur}
                    ></input>
                    <input style={{display: gloves||glovesman? 'block':'none'}}
                        name='hand'                            
                        className="input ex"
                        placeholder={data.hand.placeholder}
                        onChange= {this.change}
                        onBlur={this.blur}
                    ></input>
                    <input style={{display: hats||hatsman ? 'block':'none'}}
                        name='head'                            
                        className="input ex"
                        placeholder={data.head.placeholder}
                        onChange= {this.change}
                        onBlur={this.blur}
                    ></input>
                    <input style={{display: rings||ringsman ? 'block':'none'}}
                        name='diameter'                            
                        className="input ex"
                        placeholder={data.diameter.placeholder}
                        onChange= {this.change}
                        onBlur={this.blur}
                    ></input>
                    <input style={{display: top ? 'block':'none'}}
                        name='armLength'                            
                        className="input ex"
                        placeholder={data.armLength.placeholder}
                        onChange= {this.change}
                        onBlur={this.blur}
                    ></input>
                    <input style={{display: glovesman ? 'block':'none'}}
                        name='handLength'                            
                        className="input ex"
                        placeholder={data.handLength.placeholder}
                        onChange= {this.change}
                        onBlur={this.blur}
                    ></input>
                    <input style={{display: glovesman ? 'block':'none'}}
                        name='handWidth'                            
                        className="input ex"
                        placeholder={data.handWidth.placeholder}
                        onChange= {this.change}
                        onBlur={this.blur}
                    ></input>
                    <input style={{display: tights? 'block':'none'}}
                        name='weight'                            
                        className="input ex"
                        placeholder={data.weight.placeholder}
                        onChange= {this.change}
                        onBlur={this.blur}
                    ></input>
                </div>

            

                {submitted? 
                    <div>Submitted{console.log(this.state)}
                        <Shower zaraf={zaraf}>

                        </Shower>
                    </div>:
                    <div>Didnt submitted{console.log(this.state.submitted)}</div>}
            </div>
        );
    }


}


export default Properties;