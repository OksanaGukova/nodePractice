// src/utils/env.js

import dotenv from 'dotenv';

dotenv.config();

export function env(name, defaultValue) {
  const value = process.env[name];

  if (value !== undefined && value !== '') return value;

  if (defaultValue !== undefined) return defaultValue;

  throw new Error(`Missing: process.env['${name}'].`);
}

//  Використати її ми можемо, наприклад, в такому вигляді: env('PORT', '3000');
//  Якщо змінної оточення з такою назвою не було вказано і не було передано дефолтного значення,
// то виклик цієї функції викине помилку з повідомленням Missing: process.env['PORT'].
