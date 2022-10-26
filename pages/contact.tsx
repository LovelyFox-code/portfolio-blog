import styled from "styled-components"
import Button from "../components/Button"
import { H1 } from "../components/Common/Typography"
import Form from "../components/Form"

export const FormWraper = styled.div`
    width: 90%;
    margin: auto;
    margin-bottom: 10%;

`

const ContactPage = () => {

    return (
        <FormWraper>
            <H1>Contact Me</H1>
            <Form />
            <Button variant="submit">SEND MESSAGE</Button>
        </FormWraper>


    )
}

export default ContactPage
