import express from 'express';
import { expressServer } from '../server.js';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log(join(__dirname, '..', 'public'));

expressServer.use('/public', express.static(join(__dirname, '..', 'public')));
