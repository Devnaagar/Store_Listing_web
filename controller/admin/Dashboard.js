

class Dashboard{
    static dashboard = async (req, res) => {
        if (!req.session.adminId) {
            return res.redirect('/admin');
        }
        try {
            res.render("backend/admin/dashboard.ejs");
        } catch (error) {
            console.log(error);
            res.status(500).send('Internal server error');
        }
    }   
}
export default Dashboard;