const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://db', async (error, db) => {
  try {
    if (error) {
      throw new Error(error);
    }
    const test_db = db.db('test_db')
    const collection = test_db.collection('user');
    await collection.insertMany([
      {
        name: 'test1',
      },
      {
        name: 'test2'
      }
    ])
  } catch (err) {
    console.log("err: ", err)
  } finally {
    db.close();
  }
});