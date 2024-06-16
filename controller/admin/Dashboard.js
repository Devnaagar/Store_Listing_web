

class Dashboard{
    static dashboard = async (req, res) => {
        if (!req.session.adminId) {
            // console.log("here2");
            return res.redirect('/admin');
        }
        // console.log("here")
        try {
            // console.log("here5")
            res.render("backend/admin/dashboard.ejs");
        } catch (error) {
            // console.log("here7")
            console.log(error);
            res.status(500).send('Internal server error');
        }
    }   
}
export default Dashboard;