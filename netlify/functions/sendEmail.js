const fetch = require("node-fetch");

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { serviceID, templateID, userID, templateParams } = JSON.parse(event.body);

  const url = 'https://api.emailjs.com/api/v1.0/email/send';
  const headers = {
    'Content-Type': 'application/json'
  };

  const body = JSON.stringify({
    service_id: serviceID,
    template_id: templateID,
    user_id: userID,
    template_params: templateParams
  });

  try {
    const res = await fetch(url, { method: 'POST', headers, body });

    if (!res.ok) {
      const errorBody = await res.text();
      return {
        statusCode: res.status,
        body: JSON.stringify({ error: errorBody })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully!' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
