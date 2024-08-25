import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';


const getAllContacts = async () => {

      const data = await fs.readFile(PATH_DB, 'utf-8');
     return JSON.parse(data);

};


console.log(await getAllContacts());
