
import { AdminModel } from '../models/adminModel.js';
import bcrypt from 'bcrypt';

export const SignUp =  async (req,res)  => {

    bcrypt.hash("123456",10).then((hash)=>{
         const user=new AdminModel({
            email:"kareem@gmail.com",
            password:hash
         });
         user.save().then(() => res.status(201).json({
            message: 'kareem created !',
            status: 201
          }))
          .catch(error => res.status(400).json({ error }));
     }).catch((error) => {
        res.status(500).json({ message: error });
      });


      bcrypt.hash("hiba123",10).then((hash)=>{
        const user=new AdminModel({
           email:"hiba@gmail.com",
           password:hash
        });
        user.save().then(() => res.status(201).json({
           message: 'hiba created !',
           status: 201
         }))
         .catch(error => res.status(400).json({ error }));
    }).catch((error) => {
       res.status(500).json({ message: error });
     });

}

export const login = async (req, res) => {
    try {
        const user = await AdminModel.findOne({ email: req.body.email });

        if (!user) {
            return res.status(404).json({ "message": "User Not Found" });
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);

        if (!validPassword) {
            return res.status(404).json({ "message": "Incorrect Password" });
        }

        res.status(200).json({
            user: user
        });

    } catch (error) {
        res.status(500).json({ "message": error.message });
    }
}

