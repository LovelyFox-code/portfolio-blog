
import React from "react";
import styled from "styled-components";
import { GrayishDarkBlue, LightGray } from "./Common/Colors";

interface IForm {

}
export const FormBody = styled.div`
        
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`
export const FormGroup = styled.div`
    display: block;
	width: 100%;
	
`;

export const Label = styled.label`
	color: ${GrayishDarkBlue};
    display: block;
`;


export const Input = styled.input`
	padding: 9px 16px;
	color: ${GrayishDarkBlue};
	background: ${LightGray};
	border: none;
	width: 100%;
    margin-bottom: 24px;
`;
export const TextArea = styled.textarea`
	padding: 9px 16px;
	color: ${GrayishDarkBlue};
	background: ${LightGray};
	border: none;
	width: 100%;
	
`;

const Form: React.FC<IForm> = () => {
    return (
        <FormBody>

            <FormGroup>
                <Label htmlFor="label">Name</Label>
                <Input placeholder="Jane Appleseed" />

            </FormGroup>
            <FormGroup>
                <Label>Email Address</Label>
                <Input placeholder="email@example.com" />

            </FormGroup>
            <FormGroup>
                <Label>Message</Label>
                <TextArea placeholder="How can I help?" />

            </FormGroup>
        </FormBody>
    );
};
export default Form;
