import { Router } from 'express';
import { homeRoute } from './routes';

const web = Router();

web.use('/', homeRoute);

export default web;
