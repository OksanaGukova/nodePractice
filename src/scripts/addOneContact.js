
import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import updateContacts from './updateContacts.js';

export const addOneContact = async () => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  const contactList = JSON.parse(data);
  const newContact = createFakeContact();
  contactList.push(newContact);
  await updateContacts(contactList);
};

addOneContact();
