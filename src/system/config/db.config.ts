const DatabaseConfig = () => ({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  cli: {
    migrationsDir: 'src/common/migrations',
  },
  synchronize: true,
  autoLoadEntities: true,
  entities: ['dist/**/entities/*.entity{.ts,.js}'],
  migrationsTableName: 'migrations',
  migrations: ['dist/common/migrations/*{.ts,.js}'],
  migrationsRun: process.env.MODE === 'PROD',
  cache: true,
  ssl: false,
});

export default DatabaseConfig;
