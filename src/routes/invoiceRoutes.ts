import {Router} from 'express';
import {generateNewInvoice} from "../controllers/InvoiceController";

const router = Router();

router.get('/', generateNewInvoice);

export default router;