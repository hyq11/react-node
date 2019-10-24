const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: { type: String, require: true },
    password: { type: String, require: true },
    birthday: {type: Date}
})
//#endregion
const userModel = mongoose.model('users', userSchema)
import Name from '@/components/Name.vue'

export default {
    components: {
        Name
    },
}