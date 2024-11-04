import { updatePassword } from "./createPwd.js";
import { forgotPwd } from "./forgotPwd.js"
import { signIn } from "./signIn.js"

export const getSectionFields = (req) => {
    switch(req) {
        case 'signIn':
            return signIn;
        case 'forgotPwd':
            return forgotPwd;
        case 'updatePwd':
            return updatePassword
        default:
            return signIn
    }
}