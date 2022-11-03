import type { NextApiRequest, NextApiResponse } from 'next'
import {sendEmail} from "../../sendEmail"
import {receiveEmail} from "../../receiveEmail"
import {emailHTML} from "../../components/EmailHTML"
type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
const email = `
    <html>
    <h1 style="background-color: 'red'">Hello ${req.body.firstname} </h1>
    <p>thanks for reaching me</p>
    <p>I will contact you soon!</p>
    <p>Kind regards</p>
    <p>Alina</p>
    </html>
`;
const dataEmail =`
  <html>
    <h1>Hello </h1>
    <p>${req.body.firstname}</p>
    <p>${req.body.email}</p>
    <p>${req.body.message}</p>
  </html>
`;
   console.log(req.body, req.method);
    // sendEmail(req.body.email, "Front-end", email);
    receiveEmail("alinadakhno60@gmail.com", "Your site was visited", dataEmail)
  res.status(200).json({ name: 'John Doe' })
}