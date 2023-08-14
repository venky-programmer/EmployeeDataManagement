import express from 'express';
const router = express.Router();
import { createDoc, getAlldoc, editDoc, updateDocById, deleteDocById } from '../controllers/employeeController.js';

// All get
router.get('/', getAlldoc);
router.get('/edit/:id', editDoc);

// All post
router.post('/', createDoc);
router.post('/update/:id', updateDocById);
router.post('/delete/:id', deleteDocById);

export default router;
