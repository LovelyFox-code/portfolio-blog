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

const dataEmail =`
  <html>
    <h1>Hello </h1>
    <p>${req.body.name}</p>
    <p>${req.body.email}</p>
    <p>${req.body.message}</p>
  </html>
`;
   console.log(req.body, req.method);
    // sendEmail(req.body.email, "Front-end", emailHTML(req.body.name));
    // receiveEmail("alinadakhno60@gmail.com", "Your site was visited", dataEmail);
  res.status(200).json({ name: 'John Doe' })
}