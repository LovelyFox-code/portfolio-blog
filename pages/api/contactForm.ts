import type { NextApiRequest, NextApiResponse } from 'next'
import {sendEmail} from "../../sendEmail"
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
   console.log(req.body, req.method);
    sendEmail(req.body.email, "Front-end", email);
  res.status(200).json({ name: 'John Doe' })
}