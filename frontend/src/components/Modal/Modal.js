import React from 'react';
import { Modal as ModalAntd} from 'antd';

export default function Modals(props) {


  const {children, title, isVisible, setIsVisible} = props;


  return (
    <ModalAntd
        title={title}
        centered
        open={isVisible}
        onCancel={() => setIsVisible(false)}
        footer={false}
    >
      {children}
    </ModalAntd>
  )
}
