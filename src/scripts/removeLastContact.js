
import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import updateContacts from './updateContacts.js';

export const removeLastContact = async () => {

    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contactList = JSON.parse(data);
      contactList.pop();
     await updateContacts(contactList);
};

removeLastContact();
