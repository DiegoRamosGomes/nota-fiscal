import { Router } from 'express';
import invoiceRoutes from './invoiceRoutes';

const router = Router();

router.use('/invoice', invoiceRoutes);

export default router;