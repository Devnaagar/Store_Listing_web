import CityModel from "../../model/city.js";
import StoreModel from "../../model/store.js";



class Store{
    static add_form = async (req,res) =>{
        if (!req.session.adminId) {
            return res.redirect('/admin');
        }
        try {
            res.render("backend/store/add_store.ejs");
        } catch (error) {
            console.log(error);
            res.status(500).send('Internal server error occured');
        }
    }

    static city_info = async (req, res) => {
        try {
            const cities = await CityModel.find().exec();
            res.render('backend/store/add_store.ejs', { cities });
        } catch (err) {
            res.status(500).send(err);
        }
    };

    static add_store = async (req,res) =>{
        try{
            const {store_name, city_ref,store_addr,store_lats,store_longs,landmark_name,landmark_dist}=req.body;
            const doc = new StoreModel({
                store_name:store_name,
                city_ref: city_ref,
                address:store_addr,
                latitude:store_lats,
                longitude:store_longs,
                landmark_name:landmark_name,
                landmark_dist:landmark_dist
            })
            const result = await doc.save();
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
            res.render("backend/store/store.ejs",{ stores});
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

    static display_data= async (req, res) => {
        try {
            const stores = await StoreModel.find({});
            const formattedStores = stores.map(store => ({
                name: store.store_name,
                latitude: parseFloat(store.latitude),
                longitude: parseFloat(store.longitude)
            }));
            res.json(formattedStores);
        } catch (err) {
            res.status(500).send(err);
        }
    };
}

export default Store;