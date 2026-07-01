export async function deleteTempAcc() {
  const mariadb = require('mariadb');

  const conn = await mariadb.createConnection({
    host: '127.0.0.1',      // hoặc localhost đều được trong GitHub Actions
    port: 3306,
    user: 'root',
    password: 'rootpass',
    database: 'qlshopdienthoai'
  });

  try {
    await conn.query('DELETE FROM taikhoan WHERE tentk="testAcc"');
  } finally {
    await conn.end();
  }
}