const bcryptServiceProvider = require('./BcryptServiceProvider');
const User = require('../models/User');
const {UserModel} = User;
const UserRoles = require('../models/UserRole');


/**
 *
 * This method helps to create a new User record.
 *
 * @param name | the name of the user to be created.
 * @param email | the email of the user to be
 *   created.
 * @param password | the raw password of the user
 *   to be created.
 * @param role | the role of the user being created.
 *
 * @returns {Promise<*>} | the created user.
 *
 */
exports.create = async (name, email, password, role) => {

    let user = new UserModel({
        name: name,
        email: email,
        password: bcryptServiceProvider.hash(password),
        role: role,
        is_blocked: false,
    });
    try {
        console.log(user)
        return await user.save(user);
    }
    catch (err) {
        console.log("AccountServiceProvider@create Error:  " + err);
    }
    return null;
}


/**
 *
 * This method is responsible for retrieving a user by it's user id
 *
 * @param userId | the id of the user in question.
 *
 * @returns {Promise<*>} | the retrieved user.
 *
 */
exports.retrieve = async (userId) => {
    try {
        return await UserModel.findOne({_id: userId});
    }
    catch (err) {
        console.log("AccountServiceProvider@retrieve Error:  " + err);
    }
    return null;
}


exports.retrieveByEmail = async (email) => {
    try{
        // console.log(`here`, email)
        return await UserModel.findOne({email});
    }
    catch (err){
        console.log("AccountServiceProvider@retrieveByEmail Error:  " + err);
    }
    // console.log(email)
    // console.log(UserModel.find())
    return null;
}

/**
 *
 * This method is responsible for updating a user detail.
 *
 * @param userId | the id of the user to be updated.
 * @param updatedUser | the updated user details.
 *
 * @returns {Promise<*>} | the updated user.
 *
 */
exports.update = async (userId, updatedUser) => {
    try {
        return await UserModel.findOneAndUpdate({_id: userId}, updatedUser);
    }
    catch (err) {
        console.log("AccountServiceProvider@update Error:  " + err);
    }
}

/**
 *
 * This method is responsible for blocking a user.
 *
 * @param userId | the id of the user to be blocked.
 *
 * @returns {Promise<*>}
 *
 */
exports.blockAccount = async (userId) => {
    try {
        let user = this.retrieve(userId);
        user.is_blocked = true;
        return UserModel.updateOne({_id: userId}, user);
    }
    catch (err) {
        console.log("AccountServiceProvider@blockAccount Error:  " + err);
    }
}



