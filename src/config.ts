export const config = {
  db: {
    type: 'postgres',
    host: 'localhost',
    database: 'land-mi',
    port: 5432,
    username: 'postgres',
    password: '159753852',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  },
};
