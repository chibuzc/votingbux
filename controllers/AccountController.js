const AccountServiceProvider = require('../services/AccountServiceProvider');
const BcryptServiceProvider = require('../services/BcryptServiceProvider');
const UserRoles = require('../models/UserRole');


/**
 *
 * This method is a controller method which is responsible for responding
 * to login requests.
 *
 * @param req | the request object.
 * @param res | teh response object.
 *
 * @returns {Promise<void>} | the route redirect action.
 *
 */
exports.login = async (req, res) => {

    try {
        console.log(req.body)
        const user = await AccountServiceProvider.retrieveByEmail(req.body.email);
        if (user) {
            if (BcryptServiceProvider.compare(user.password, req.body.password)) {

                // req.session["loggedInUser"] = user;
                // switch (user.role) {
                //     case (UserRoles.ADMINISTRATOR):
                //         res.redirect('/admin');
                //         break;
                //     case (UserRoles.SALESREP):
                //         res.redirect('/normal');
                //         break;

                // }
                req.session.user=user
                res.send(user)
            }else{
                // res.send('invalid password')
                return null
            }

        } else {

            // req.flash('error', 'email/password was invalid');
            // res.redirect('/login');
            // res.send("email was invalid")
            return null
        }
    } catch (err) {
        console.log("AccountController@login   Error" + err);
    }

}

