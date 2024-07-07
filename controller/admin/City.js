import CityModel from "../../model/city.js";


class City_Info{
    static add_form = async (req,res) =>{
        if (!req.session.adminId) {
            return res.redirect('/admin');
        }
        try {
            res.render("backend/city/add_city.ejs");
        } catch (error) {
            console.log(error);
            res.status(500).send('Internal server error');
        }
    }
    static add_city = async (req,res) =>{
        try{
            const {city_name, country_name}=req.body;
            const doc = new CityModel({
                city_name: city_name,
                country_name:country_name
            })
            const result = await doc.save();
            res.redirect("/admin/city");
        } catch (err){
            console.log(err);
        }
        
    }

    static getAllDoc = async (req,res) =>{
        if (!req.session.adminId) {
            return res.redirect('/admin');
        }
        try {
            const result = await CityModel.find();
            res.render("backend/city/city.ejs",{data : result});
        } catch (error) {
            console.log(error);
            res.status(500).send('Internal server error');
        }
        
    }


    static editDoc =async (req,res) =>{
        try {
            const result = await CityModel.findById(req.params.id);
            res.render("backend/city/edit_city.ejs",{result});
        } catch (error) {
            console.log(error);
        }
    }
    
    static updateDocbyID =async (req,res) =>{
        try {
            const result = await CityModel.findByIdAndUpdate(req.params.id , req.body);
        } catch (error) {
            console.log(error);
            }
        res.redirect("/admin/city");
    }

    static changestatus = async (req, res) => {
        const { id, status } = req.body;
    
        try {
            const result = await CityModel.findByIdAndUpdate(id, { status: status }, { new: true });
    
            if (result) {
                res.json({ success: true, status: result.status });
            } else {
                res.status(404).json({ success: false, message: 'Item not found' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: 'Server error' });
        }
    };

    
    static deleteDocbyID =async (req,res) =>{
        try {
            const result = await CityModel.findByIdAndDelete(req.params.id);
        } catch (error) {
            console.log(error);
        }
        res.redirect("/admin/city");
    }
}

export default City_Info;