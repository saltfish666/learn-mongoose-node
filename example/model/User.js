const con_mon = require('../connect.js')
const Schema = con_mon.Schema

const UserSchema = new Schema({   
    oauth: { type: String },      
    name : { type: String },                    
    email: { type: String },                                             
    token: { type: String },  
    access_token: { type: String }             
});

module.exports = con_mon.model('User',UserSchema,'users');
//其实 User 默认对应users  但是千万写明