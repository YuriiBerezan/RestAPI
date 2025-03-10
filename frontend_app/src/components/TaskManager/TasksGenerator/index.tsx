import React, { useEffect, useState } from 'react';
import { Button, Input, Form} from 'antd';
import styled from 'styled-components';

const { Item } = Form;

const TasksGenerator = () => {
    const [form] = Form.useForm();

    const finishHandler = () => {
        console.log('clicked')
    }

    return (
        <StyledDiv>
            <Form form={form} layout="inline" onFinish={finishHandler}>
                <Item>
                    <StyledInput  placeholder="What is your goal today?" />
                </Item>
                <Item>
                    <Button type="primary" htmlType="submit">
                        Generate Tasks
                    </Button>
                </Item>                     
            </Form>              
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
  overflow: hidden;
  margin-bottom: 20px;
`;

const StyledInput = styled(Input)`
  width: 100%;
`;

export default TasksGenerator;