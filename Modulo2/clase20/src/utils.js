import bcrypt from 'bcryptjs';

export const createhash = (password) => {
    bcrypt.hash(password, bcrypt.genSaltSync(10));
}

export const isValidPassword = (user, password) => {
    return bcrypt.compareSync(password, user.password);
}