import { Router } from 'express';
import { getAllMembers, createMember } from '../controllers/membersController';

const router = Router();

router.get('/', getAllMembers);
router.post('/', createMember);

export default router;
