import { SendEmail } from 'lib/mail-smtp';
import type { NextApiRequest, NextApiResponse } from 'next';
const webHookReqRes = async (
  _req: NextApiRequest,
  _res: NextApiResponse
): Promise<NextApiResponse | void> => {
  console.log('Web hook response = ' + JSON.stringify(_req.body));
  const jsonData = JSON.parse(JSON.stringify(_req.body));
  const eventName = jsonData.EventName;
  const changedItem = jsonData.Changes.FieldChanges[0].Value;
  _res.status(200).send('');
  console.log('vara' + eventName);
  console.log('vl' + changedItem);
  await SendEmail({
    to: '',
    subject: 'A blog item was ' + eventName,
    html:
      '<p><b>Changed Text : </b>&nbsp; ' +
      changedItem +
      '</p><p>Go and check out the blog to see changes</p>',
  });
};
export default webHookReqRes;
