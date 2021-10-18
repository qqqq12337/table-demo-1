import React from 'react'
import '../css/tableListStyle.css'; 

export default class TableList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        console.log(this.props)
    }
    isShowForm =() => {
        this.props.getShow(true)
    }
    //编辑修改
    editInfo = (id) => {
        let list = JSON.parse(localStorage.getItem('info')||'[]')

    }
    //删除
    deleteItem = (id) => {

    }
    render() {
        return <div className="table">
        <div className="add" onClick={this.isShowForm}>新增</div>
        <table>
            <thead>
                <tr>
                    <th>名称</th>
                    <th>年龄</th>
                    <th>身高</th>
                    <th>爱好</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
        
            {this.props.infoList.map((item, i) => {
                let that = this;
                return <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.height}</td>
                        <td>{item.hobby}</td>
                        <td>
                            <a href="#" className="edit" onClick={this.isShowForm.bind(that, item.id)}>编辑</a>
                            <a href="#" onClick={this.deleteItem.bind(that, item.id)}>删除</a>
                        </td>
                    </tr>
            },this)}
            </tbody>
        </table>
        <div className={this.props.showMask? "mask": ""}></div>
    </div>
    }
}