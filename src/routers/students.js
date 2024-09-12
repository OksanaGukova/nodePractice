// src/routers/students.js

import { Router } from 'express';

import {
  getStudentsController,
  getStudentByIdController,
  createStudentController,
  deleteStudentController,
  upsertStudentController,
  patchStudentController,
} from '../controllers/students.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../controllers/middlewares/validateBody.js';
import { createStudentSchema } from '../validation/students.js';
import { isValidId } from '../controllers/middlewares/isValidId.js';

const router = Router();

router.get('/', ctrlWrapper(getStudentsController));

router.get(
  '/:studentId',
  isValidId,
  ctrlWrapper(getStudentByIdController)
);

router.post(
  '/register',
  validateBody(createStudentSchema),
  ctrlWrapper(createStudentController),
);

router.delete(
  '/:studentId',
  isValidId,
  ctrlWrapper(deleteStudentController));

router.put(
  '/:studentId',
  isValidId,
  validateBody(createStudentSchema),
  ctrlWrapper(upsertStudentController),
);

router.patch(
  '/:studentId',
  isValidId,
  validateBody(createStudentSchema),
  ctrlWrapper(patchStudentController),
);

export default router;
