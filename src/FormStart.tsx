import React, { FormEvent } from 'react'
import {Form, Button, Input, Card, Rate } from 'antd'
const FormItem = Form.Item;

interface Iprops{
    form:any
}

class FormStart extends React.PureComponent<Iprops, Object>{
    constructor(props:Iprops){
        super(props)
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleSearch(e:FormEvent) {
        const THIS = this;
        e.preventDefault();
        THIS.props.form.validateFields((err:ErrorEvent, values:Object) => {
          if (err) return;
          console.log(values)
        })
      }
    getFields() {
        const { getFieldDecorator } = this.props.form
        return (
          <Card className='FormStart'>
            <FormItem label="姓名" >
              {getFieldDecorator('name')(<Input placeholder="请输入演讲者" />)}
            </FormItem>
            <FormItem label="项目">
              {getFieldDecorator('project')(<Input placeholder="请输入项目" />)}
            </FormItem>
            <FormItem>
              {getFieldDecorator('start')(<Rate allowHalf={true}/>)}
            </FormItem>
            <FormItem className='FormStart_btn'>
              <Button  htmlType="submit">
                提交评分
              </Button>
            </FormItem>
          </Card>
        );
      }
    render(){
        return(
            <Form  layout="vertical" className='headerSeartch' onSubmit={this.handleSearch}>
            {this.getFields()}
          </Form>
        )
    }
}

export default Form.create()(FormStart)