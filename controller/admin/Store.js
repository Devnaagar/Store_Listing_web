import CityModel from "../../model/city.js";
import StoreModel from "../../model/store.js";



class store_Info{


    static add_form = async (req,res) =>{
        if (!req.session.adminId) {
            // console.log("here2");
            return res.redirect('/admin');
        }
        // console.log("here")
        try {
            // console.log("here5")
            res.render("backend/store/add_store.ejs");
        } catch (error) {
            // console.log("here7")
            console.log(error);
            res.status(500).send('Internal server error occured');
        }
    }

    static city_info = async (req, res) => {
        try {
            const cities = await CityModel.find().exec();
            res.render('backend/store/add_store.ejs', { cities }); // Ensure this path matches your EJS template location
        } catch (err) {
            res.status(500).send(err);
        }
    };

    static add_store = async (req,res) =>{
        // console.log("create");
        // console.log(req.body);
        try{
            const {store_name, city_ref,store_addr,store_lats,store_longs,landmark_name,landmark_dist}=req.body;
            // console.log(req.body);
            const doc = new StoreModel({
                store_name:store_name,
                city_ref: city_ref,
                address:store_addr,
                latitude:store_lats,
                longitude:store_longs,
                landmark_name:landmark_name,
                landmark_dist:landmark_dist
            })
            //saving doc
            const result = await doc.save();
            // console.log(result);
            res.redirect("/admin/store");
        } catch (err){
            console.log(err);
        }
        
    }

    static getAllDoc = async (req,res) =>{
        if (!req.session.adminId) {
            return res.redirect('/admin');
        }
        try {
            const stores = await StoreModel.find().populate('city_ref').exec();
            //const cities = await CityModel.find('city_ref').exec();

            // console.log("here5")
            res.render("backend/store/store.ejs",{ stores});
        } catch (error) {
            // console.log("here7")
            console.log(error);
            res.status(500).send('Internal server error');
        }
        
    }


    static editDoc =async (req,res) =>{
        // console.log(req.params.id);
        try {
            const result = await CityModel.findById(req.params.id);
            //console.log(result);
            res.render("backend/city/edit_city.ejs",{result});
        } catch (error) {
            console.log(error);
        }
        
    }
    
    static updateDocbyID =async (req,res) =>{
        try {
            // const {stud_name, age,fee}=req.body;
            const result = await CityModel.findByIdAndUpdate(req.params.id , req.body);
            // console.log(result);
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
        // console.log(req.params.id);
        try {
            const result = await CityModel.findByIdAndDelete(req.params.id);
        } catch (error) {
            console.log(error);
        }

        res.redirect("/admin/city");
    }
}

export default store_Info;