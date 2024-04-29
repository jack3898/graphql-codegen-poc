import { expressServer } from '../server.js';

expressServer.get('/login', (_, res) => {
  res.cookie('session', 'pretend-I-am-secure-lol', {
    secure: true,
    httpOnly: true,
    sameSite: 'strict'
  });

  res.sendStatus(200);
});
