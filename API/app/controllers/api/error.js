const error = {

    error404(_, response) {
        response.status(404).json({ error: 'Resource not found' });
    },

};

module.exports = error;