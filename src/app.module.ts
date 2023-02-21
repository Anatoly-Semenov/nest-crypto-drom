import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsServiceModule } from './cars-service/cars-service.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthServiceModule } from './auth-service/auth-service.module';
import MainConfig from './system/config/main.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [MainConfig],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => config.get('database'),
    }),
    CarsServiceModule,
    AuthServiceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
