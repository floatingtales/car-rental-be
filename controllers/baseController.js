class BaseController {
  constructor(model) {
    this.model = model;
  }

  async getAll(req, res) {
    console.log('getting all data', req.url);
    let returnedData;
    try {
      returnedData = await this.model.findAll();
      if (!returnedData) {
        throw new Error('not found');
      }
    } catch (err) {
      return res.status(400).json({ status: 'not found' });
    }
    return res.status(200).json({ status: 'found', data: returnedData });
  }
}

module.exports = BaseController;
