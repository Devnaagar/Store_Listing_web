
import AdminModel from "../../model/store_all.js";

class Admin {
    static login = async (req, res) => {
        const {email, password } = req.body;
        console.log(password);

        try {
            const admin = await AdminModel.findOne({ email:email});
            console.log(admin.password);

            if (admin) {
                // Compare passwords (assuming they are stored in plain text)
                if (password === admin.password) {
                    req.session.adminId =  admin._id.toString();
                    console.log(req.session.adminId)
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
