
import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const countContacts = async () => {

  const data = await fs.readFile(PATH_DB, 'utf-8');
  const contactList = JSON.parse(data);
  return contactList.length;

};

console.log(await countContacts());
