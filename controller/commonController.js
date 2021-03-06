/**
 * Controllers Common functions
 */
class CommonController {

    findSuccess(res) {
        return (result) => {
            res.status(200); // Found
            res.json(result);
        }
    }

    findError(res) {
        return (error) => {
            console.log(error);
            res.status(error.status);
            res.json(error.message);
        }
    }
}

module.exports = CommonController;