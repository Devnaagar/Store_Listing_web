import express from "express";
const router = express.Router();

import Admin from "../controller/admin/Admin.js";
import Dashboard from "../controller/admin/Dashboard.js";

router.get('/', (req, res) => {

    if (req.session.adminId) {
        res.redirect('/admin/dashboard');
    } else {
        res.render('backend/admin/login.ejs');
    }
});
router.post('/', Admin.login);
router.get('/dashboard', Dashboard.dashboard);
router.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send('Error logging out');
        }
        res.redirect('/admin');
    });
});
// router.post('/',StudentController.createDoc);
// router.get('/edit/:id',StudentController.editDoc);
// router.post('/update/:id',StudentController.updateDocbyID);
// router.post('/delete/:id',StudentController.deleteDocbyID);

export default router;