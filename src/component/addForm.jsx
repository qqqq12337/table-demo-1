import React from 'react'
import '../css/addFormStyle.css'


export default class AddForm extends React.Component {
    constructor(props) {
        super(props)
        let list = JSON.parse(localStorage.getItem('info')||'[]')
        this.state = {
            id: list.length > 0?list[list.length-1].id+1:0
        }
    }
    getMessage =() =>  {
        console.log('getMessage', this.props)
        let name = document.querySelector('#name').value;
        let age = document.querySelector('#age').value;
        let height = document.querySelector('#height').value;
        let hobby = document.querySelector('#hobby').value;
        if(name.trim().length !== 0 && age.trim().length !== 0 
        &&height.trim().length !== 0 &&hobby.trim().length !== 0) {
            if(this.props.type === 'add') {
                let id = this.state.id;
                let info = {id, name, age, height, hobby};
                let list = JSON.parse(localStorage.getItem('info')||'[]')
                list.push(info)
                localStorage.setItem('info', JSON.stringify(list))
                id++;
                this.setState({
                    id
                })
                
            } else if(this.props.type === 'edit'){
                console.log('hide')
                let list = JSON.parse(localStorage.getItem('info')||'[]')
                console.log(list)
                let current = list.find(item => item.id === this.props.item.id)
                console.log(current)
                current.name = name
                current.age = age
                current.height = height
                current.hobby = hobby
                console.log(list)
                localStorage.setItem('info', JSON.stringify(list))
            }
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