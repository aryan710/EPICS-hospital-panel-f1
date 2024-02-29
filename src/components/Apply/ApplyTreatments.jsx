//import Layout from '../../components/Layout/Layout';    
import React from 'react'
import { Col, Form,Input,Row, TimePicker } from 'antd'
import Navbar from '../Navbar/Navbar'

const ApplyTreatments = () => {
    //handle form
    const handleFinish = (values) => {
        console.log(values) 
    }
  return (
    <Navbar>
         <h1 className="text-center">Treatments Information</h1>
         <Form layout='vertical' onFinish={handleFinish}  className='m-3'>
         <h4 className="text-dark">Personal Details:</h4>

            <Row gutter={20}>
                 <Col xs={24}  md={24} lg={8}>
                    <Form.Item label='First Name' name="firstName" required rules={[{required:true}]}>
                          <Input type='text' placeholder="your name"/>
                    </Form.Item>
                 </Col>

                 <Col xs={24}  md={24} lg={8}>
                    <Form.Item label='Last Name' name="lastName" required rules={[{required:true}]}>
                          <Input type='text' placeholder="your last name"/>
                    </Form.Item>
                 </Col>

                 <Col xs={24}  md={24} lg={8}>
                    <Form.Item label='Phone No' name="phone" required rules={[{required:true}]}>
                          <Input type='text' placeholder="your contact no"/>
                    </Form.Item>
                 </Col>

                 <Col xs={24}  md={24} lg={8}>
                    <Form.Item label='Email' name="email" required rules={[{required:true}]}>
                          <Input type='text' placeholder="your email address"/>
                    </Form.Item>
                 </Col>

                 <Col xs={24}  md={24} lg={8}>
                    <Form.Item label='Website' name="website" required rules={[{required:true}]}>
                          <Input type='text' placeholder="your website"/>
                    </Form.Item>
                 </Col>

                 <Col xs={24}  md={24} lg={8}>
                    <Form.Item label='Address' name="address" required rules={[{required:true}]}>
                          <Input type='text' placeholder="your clinic/Hospital address"/>
                    </Form.Item>
                 </Col>
                 

            </Row>

            <h4 className="text-dark">Professional Details:</h4>

            <Row gutter={20}>
                 <Col xs={24}  md={24} lg={8}>
                    <Form.Item label='Specialization' name="specialization" required rules={[{required:true}]}>
                          <Input type='text' placeholder="your specialization"/>
                    </Form.Item>
                 </Col>

                 <Col xs={24}  md={24} lg={8}>
                    <Form.Item label='Experience' name="experience" required rules={[{required:true}]}>
                          <Input type='text' placeholder="your experience"/>
                    </Form.Item>
                 </Col>

                 <Col xs={24}  md={24} lg={8}>
                    <Form.Item label='Fees Per Cunsaltation' name="feesPerCunsaltation" required rules={[{required:true}]}>
                          <Input type='text' placeholder="your fees per cunsaltation"/>
                    </Form.Item>
                 </Col>

                 <Col xs={24}  md={24} lg={8}>
                    <Form.Item label='Timings' name="timings" required rules={[{required:true}]}>
                        <TimePicker.RangePicker format="HH:mm a"/>
                    </Form.Item>
                 </Col>
                 
                 
 
            </Row>
            <div className="d-flex justify-content-end">
                    <button className='btn btn-primary' type='submit'>Submit</button>
            </div>
         </Form>
    </Navbar>
  )
}

export default ApplyTreatments;
