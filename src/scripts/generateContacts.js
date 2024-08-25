
import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import updateContacts from './updateContacts.js';

const generateContacts = async (number) => {

  const data = await fs.readFile(PATH_DB, 'utf-8');
  const contactList = JSON.parse(data);
    const NewContactList = Array(number).fill(0).map(createFakeContact);
      contactList.push(...NewContactList);
  await updateContacts(contactList);
};

generateContacts(5);


