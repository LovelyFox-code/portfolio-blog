import type { NextApiRequest, NextApiResponse } from 'next'
import {sendEmail} from "../../sendEmail"
import {receiveEmail} from "../../receiveEmail"
import {emailHTML} from "../../components/EmailHTML"
type Data = {
  message: string
}

export default async function handler(
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
try {
  const info = await sendEmail(req.body.email, "Front-end", emailHTML(req.body.name));
  console.log(info);
  
  const info2 = await receiveEmail("alinadakhno60@gmail.com", "Your site was visited", dataEmail);
  console.log(info2);
 res.status(200).json({ message: 'Email sent' })
} catch (error) {
  console.log(error);
  res.status(500).json({message: "Something went wrong"})
  
}

}