const DatabaseConfig = () => ({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  cli: {
    migrationsDir: 'src/system/migrations',
  },
  synchronize: false,
  autoLoadEntities: true,
  entities: ['dist/**/entities/*.entity{.ts,.js}'],
  migrationsTableName: 'migrations',
  migrations: ['dist/system/migrations/*{.ts,.js}'],
  migrationsRun: process.env.MODE === 'PROD',
  cache: false,
  ssl: false,
  logging: [],
  extra: {
    // based on  https://node-postgres.com/api/pool
    // max connection pool size
    max: 80,
    // connection timeout
    // connectionTimeoutMillis: 10000,
  },
});

export default DatabaseConfig;
