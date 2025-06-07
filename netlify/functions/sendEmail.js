const emailjs = require('emailjs-com');

    exports.handler = async function(event, context) {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const { serviceID, templateID, userID, templateParams } = JSON.parse(event.body);

    try {

        return { statusCode: 200, body: JSON.stringify({ message: 'Email sent successfully!' }) };
    } catch (error) {
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }
};
