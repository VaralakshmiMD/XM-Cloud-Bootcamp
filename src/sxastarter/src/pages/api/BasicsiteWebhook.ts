import { SendEmail } from 'lib/mail-smtp';
import type { NextApiRequest, NextApiResponse } from 'next';
const webHookReqRes = async (
  _req: NextApiRequest,
  _res: NextApiResponse
): Promise<NextApiResponse | void> => {
  console.log('Web hook response = ' + JSON.stringify(_req.body));
  const jsonData = JSON.parse(JSON.stringify(_req.body));
  const eventName = jsonData.EventName;
  const Comments = JSON.parse(JSON.stringify(jsonData.Comments, null, 2));
  // const changedItem = jsonData.Changes.FieldChanges[0].Value;
  let newValue;
  _res.status(200).send('');
  console.log('vara' + eventName);
  console.log('vl1234' + Comments);
  jsonData.Comments.map((vara: { Value: string }) => {
    newValue = vara.Value;
    console.log('vl1' + vara.Value);
  });
  await SendEmail({
    to: 'varalakshmi.md@horizontal.com',
    subject: 'A event item was created ' + newValue,
    html:
      '<p><b>' + newValue + 'f</b>&nbsp; ' + '</p><p>Go and check out the blog to see changes</p>',
  });
};
export default webHookReqRes;
