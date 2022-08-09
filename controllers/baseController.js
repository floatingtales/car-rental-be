class BaseController {
  constructor(model) {
    this.model = model;
  }

  test(req, res) {
    console.log(req.url);
    console.log(this.model);
    res.status(200).json({ status: 'test-successful' });
  }

  async getAll(req, res) {
    console.log('getting all data', req.url);
    let returnedData;
    try {
      returnedData = await this.model.findAll();
      if (!returnedData.length) {
        throw new Error('not found');
      }
    } catch (err) {
      return res.status(400).json({ status: 'not found' });
    }
    return res.status(200).json({ status: 'found', data: returnedData });
  }

  async getOne(req, res) {
    console.log('getting one data', req.url);
    const { params } = req;
    let returnedData;
    try {
      returnedData = await this.model.findOne({ where: { ...params } });
      if (!returnedData) {
        throw new Error('not found');
      }
    } catch (err) {
      return res.status(400).json({ status: 'not found' });
    }
    return res.status(200).json({ status: 'found', data: returnedData });
  }

  async deleteOne(req, res) {
    console.log('deleting one data', req.url);
    const { params } = req;
    console.log(params);
    let toBeDeletedData;
    try {
      toBeDeletedData = await this.model.findOne({ where: { ...params } });
      if (!toBeDeletedData) {
        throw new Error('not found');
      }
    } catch (err) {
      return res.status(400).json({ status: 'cant find listing to delete' });
    }
    toBeDeletedData.destroy();
    return res.status(200).json({ status: 'deleted' });
  }
}

module.exports = BaseController;
