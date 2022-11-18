import { useState } from "react"
import styled from "styled-components"
import { H1, P } from "../components/Common/Typography"
import { useForm } from "react-hook-form"
import { DarkBlue, GrayishDarkBlue, LightGray } from "../components/Common/Colors"
import LoadingSpinner from "../components/LoadingSpinner"
import Success from "../components/Success"

export const FormWraper = styled.form`
    width: 300px;
    max-width: 400px;
    margin: 10% auto;
    display: flex;
    flex-direction: column;
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
export const SubmitBtn = styled.input`
    padding: 17px 32px;
    margin-top: 24px;
    background-color: ${DarkBlue};
    border: none;
    color: white;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    border: 1px solid ${DarkBlue};
     &:hover{
        background-color: white;
        border: 1px solid ${DarkBlue};
        color: ${DarkBlue};
    }
    
`
export const TextArea = styled.textarea`
	padding: 9px 16px;
	color: ${GrayishDarkBlue};
	background: ${LightGray};
	border: none;
	width: 100%;
	
`;
export const Error = styled(P)`
    color: red;
`

export interface IFormPost {
    name?: string
    email?: string
    message?: string

}
const ContactPage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [isSended, setIsSended] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm<IFormPost>({
        defaultValues: {
            name: "",
            email: "",
            message: ""
        }
    });
    return (
        <FormWraper onSubmit={handleSubmit(async (data) => {
            try {
                //loading spinner should be
                setIsLoading(true);
                const response = await fetch("./api/contactForm", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data)
                })
                console.log(response);
                //to do redirect or success msg
                console.log("SUCCESS");
                setIsLoading(false)
                setIsSended(true)
            } catch (error) {

            }

        })}>
            {isLoading ? <LoadingSpinner /> : ""}
            {isSended ? <Success /> : <>
                <H1>Get in touch</H1>
                <Label htmlFor="label">Name</Label>
                <Input {...register("name", { required: 'This field is required' })} placeholder="name" />
                <Error>{errors.name?.message}</Error>
                <Label htmlFor="label">Email</Label>
                <Input {...register("email", {
                    required: 'This field is required', minLength: {
                        value: 4,
                        message: "Min length is 4"
                    }
                })} placeholder="email" />
                <Error>{errors.email?.message}</Error>
                <Label htmlFor="label">Message</Label>
                <TextArea {...register("message")} placeholder="message" />
                <Error>{errors.message?.message}</Error>
                <SubmitBtn type="submit" value="Submit" /></>}
        </FormWraper>
    )
}

export default ContactPage
