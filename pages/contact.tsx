import { useState } from "react"
import { json } from "stream/consumers"
import styled from "styled-components"
import Button from "../components/Button"
import { H1 } from "../components/Common/Typography"
import Form from "../components/ContactForm"

export const FormWraper = styled.form`
    width: 300px;
    max-width: 400px;
    margin: auto;
    margin-bottom: 10%;
`
export interface IFormPost {
    firstname?: string
    email?: string
    message?: string

}
const ContactPage = () => {
    const [state, setState] = useState<IFormPost>({ firstname: "", message: "", email: "" });
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("submit", state);
        const response = await fetch("./api/contactForm", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(state)
        })
        console.log(response);

    }
    return (
        <FormWraper onSubmit={handleSubmit}>
            <H1>Contact Me</H1>
            <Form values={state}
                updateValues={setState} />
            <Button variant="submit" type="submit" >SEND MESSAGE</Button>
        </FormWraper>


    )
}

export default ContactPage
