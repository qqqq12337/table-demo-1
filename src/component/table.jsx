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
            isShow: false
        }
    }
    componentWillMount() {
        this.getList();
    }
    getList =() => {
        let list = JSON.parse(localStorage.getItem('info')||'[]');
        this.setState({
            list
        })
    }
    showAdd = (flag) => {
        this.setState({
            isShow: flag
        })
    }
    render() {
        return <div>
            <TableList getShow={this.showAdd}
             infoList={this.state.list} 
             showMask={this.state.isShow}></TableList>
            <div className={this.state.isShow? "show": "hidden"}>
                 <AddForm getShow={this.showAdd} getData={this.getList}></AddForm>
            </div>
        </div>
    }
}