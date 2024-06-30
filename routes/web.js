import express from "express";
const router = express.Router();

import Admin from "../controller/admin/Admin.js";
import Dashboard from "../controller/admin/Dashboard.js";
import City from "../controller/admin/City.js";
import Store from "../controller/admin/Store.js";
// import { jsx } from 'react/jsx-runtime';
// import  jsx  from "jsx";

// import CityModel from "../model/city.js";


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

//city
router.get('/city', City.getAllDoc);
router.get('/add_city', City.add_form);
router.post('/city', City.add_city);
router.get('/edit_city/:id',City.editDoc);
router.post('/update_city/:id',City.updateDocbyID);
router.post('/delete_city/:id',City.deleteDocbyID);

//common
router.post('/status', City.changestatus);

//stores
router.get('/store', Store.getAllDoc);
router.get('/add_store', Store.city_info);
router.get('/add_store', Store.add_form);
router.post('/store', Store.add_store);
router.get('/stores_data',Store.display_data);




export default router;