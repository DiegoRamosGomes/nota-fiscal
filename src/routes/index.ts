import { Router } from 'express';
import invoiceRoutes from './invoiceRoutes';

const router = Router();

router.get('/', (_, res) => {
    res.send("Aplicativo rondando normalmente")
})
router.use('/invoice', invoiceRoutes);

export default router;