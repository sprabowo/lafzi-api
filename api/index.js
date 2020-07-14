const Lafzi = require("lafzi.js");

module.exports = (req, res) => {
  const { q = '', page = 1, limit = 10 } = req.query;
  const offset = (page - 1) * limit;
  const message = {
    api_code: 200,
    status: 'success',
    data: []
  };
  try {
    const opt = {
      query: q
    };
    Lafzi(opt).then((data) => {
      if (data.length > 0) {
        message.info = {
          limit: limit,
          current_page: page,
          total_page: Math.ceil(data.length / limit)
        }
        message.data = data.slice(offset, offset + limit);
      }
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Cache-Control', 's-maxage=2628000');
      res.status(200).json(message);
    });
  } catch (error) {
    message.api_code = 500;
    message.status = 'error';
    return res.status(500).json(message);
  }
};
