const { loadQueryFile } = require('../utils')

module.exports = [
  loadQueryFile(__dirname, './20180305100000-create-wallets-table.sql'),
  loadQueryFile(__dirname, './20180305200000-create-rounds-table.sql'),
  loadQueryFile(__dirname, './20180305300000-create-blocks-table.sql'),
  loadQueryFile(__dirname, './20180305400000-create-transactions-table.sql'),
  loadQueryFile(__dirname, './20181129400000-add-block_id-index-to-transactions-table.sql'),
  loadQueryFile(__dirname, './20181204100000-blocks-generator_public_key-index.sql'),
  loadQueryFile(__dirname, './20181204200000-transactions-timestamp-index.sql'),
  loadQueryFile(__dirname, './20181204300000-transactions-sender-and-receiver-indexes.sql'),
]