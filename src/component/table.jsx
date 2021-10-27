import React from 'react' 
import TableList from './tableList'
import AddForm from './addForm';
import '../css/tableStyle.css';

export default class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                {
                    name: '张三',
                    age: 18,
                    height: '178cm',
                    hobby: '跳舞、篮球、RAP'
                },
                {
                    name: '张三',
                    age: 18,
                    height: '178cm',
                    hobby: '跳舞、篮球、RAP'
                }
            ],
            type: "add", // adit 、edit
            isShow: false,   /* 弹窗*/
            current: {}
        }
    }
    
    componentWillMount() {
        this.getList();
    }

    //删除
    deleteItem = (id) => {
        console.log("子组件传进来的id:" +id)
        let list = JSON.parse(localStorage.getItem('info')||'[]')
        list = list.filter(item => item.id !== id)
        localStorage.setItem('info', JSON.stringify(list))
        this.setState({
            list 
        })
    }

    getList =() => {
        let list = JSON.parse(localStorage.getItem('info')||'[]');
        this.setState({
            list
        })
    }
    showAdd = (flag, type = 'add', item) => {
        console.log(flag, type, item)
        this.setState({
            isShow: flag,
            type: type,
            current: item
        })
    }
    render() {
        return <div>
            <TableList getShow={this.showAdd}
             infoList={this.state.list}
             showMask={this.state.isShow}
             infoList={this.state.list}
            onDeleteItem={this.deleteItem}></TableList>
             {/* <TableList
            
            /> */}
            <div className={this.state.isShow? "show": "hidden"}>
                 <AddForm getShow={this.showAdd} getData={this.getList}  type={this.state.type} item={this.state.current}></AddForm>
            </div>
        </div>
    }
}