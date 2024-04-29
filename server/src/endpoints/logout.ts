import { expressServer } from '../server.js';

expressServer.get('/logout', (_, res) => {
  res.clearCookie('session', {
    secure: true,
    httpOnly: true,
    sameSite: 'strict'
  });

  res.sendStatus(200);
});
