/* eslint-disable no-useless-escape */
import React, {useState} from 'react';
import { Form, Input, Button, notification } from 'antd';
import {UserOutlined} from '@ant-design/icons';
import './Newsletter.scss';
import { suscribeNewsletterApi } from '../../../api/newsletter';

export default function Newsletter() {

    const [email, setEmail] = useState("")

    const onSubmit = e => {
        e.preventDefault();
        const emailValid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        const resulValidation = emailValid.test(email)

        if (!resulValidation) {
            notification["error"]({
                message: "El correo no es válido"
            })
        } else {
            suscribeNewsletterApi(email)
                .then(response =>{
                    if (response.code !== 200) {
                        notification["warning"]({
                            message: response.message
                        })
                        setEmail("")
                    } else {
                        notification["success"]({
                            message: response.message
                        })
                        setEmail("")
                    }
                })
        }
        
    }

  return (
    <div className='newsletter'>
        <h3>Newsletter</h3>
        <Form onSubmitCapture={onSubmit}>
            <Form.Item>
                <Input
                    prefix={<UserOutlined style={{color: "rgba(0,0,0,0.25)"}} />}
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
            </Form.Item>
            <Form.Item>
                <Button type='primary' htmlType='submit' className='login-form-button'>
                    Me suscribo
                </Button>
            </Form.Item>
        </Form>
    </div>
  )
}
