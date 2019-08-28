export default {
    mongoURI: 'mongodb://localhost:27017/formbaseddocsnest',
    secret: process.env.NODE_ENV === 'production' ? process.env.SECRET : 'secret',
};
