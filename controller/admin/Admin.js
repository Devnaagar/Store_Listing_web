
import AdminModel from "../../model/admin.js";

class Admin {
    static login = async (req, res) => {
        const {email, password } = req.body;

        try {
            const admin = await AdminModel.findOne({ email:email});

            if (admin) {
                if (password === admin.password) {
                    req.session.adminId =  admin._id.toString();
                    res.redirect('/admin/dashboard');
                } else {
                    res.render("backend/admin/login.ejs", { error: 'Invalid password' });
                }
            } else {
                res.render("backend/admin/login.ejs", { error: 'Invalid email' });
            }
        } catch (error) {
            console.log(error);
            res.status(500).send('Internal server error');
        }
    }

    static logout = (req, res) => {
        req.session.destroy((err) => {
            if (err) {
                return res.status(500).send('Failed to logout');
            }
            res.redirect('/admin');
        });
    }
}

export default Admin;
