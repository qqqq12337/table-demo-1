import React from 'react'
import '../css/addFormStyle.css'


export default class AddForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0
        }
    }
    getMessage =() =>  {
        let name = document.querySelector('#name').value;
        let age = document.querySelector('#age').value;
        let height = document.querySelector('#height').value;
        let hobby = document.querySelector('#hobby').value;
        if(name.trim().length !== 0 && age.trim().length !== 0 
        &&height.trim().length !== 0 &&hobby.trim().length !== 0) {
            let id = this.state.id;
            let info = {id, name, age, height, hobby};
            let list = JSON.parse(localStorage.getItem('info')||'[]')
            list.push(info)
            localStorage.setItem('info', JSON.stringify(list))
            id++;
            this.setState({
                id
            })
            name = age = height = hobby =""
            this.props.getShow(false)
            this.props.getData()
        }
        
    }
    render() {
        return  <div className="addForm">
                    <div className="title"><span>{this.props.type}</span><span className="close" onClick={()=> {this.props.getShow(false)}}>×</span></div>
                    <div className="content">
                        <div><label>名称：<input type="text" id="name"/></label></div>
                        <div><label>年龄：<input type="text" id="age"/></label></div>
                        <div><label>身高：<input type="text" id="height"/></label></div>
                        <div><label>爱好：<input type="text" id="hobby"/></label></div>
                    </div>
                    <div className="operate">
                        <button onClick={()=> {this.props.getShow(false)}}>取消</button>
                        <button onClick={this.getMessage}>确定</button>
                    </div>
                </div>
    }
    
    

}