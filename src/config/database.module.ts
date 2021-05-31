import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'tai.db.elephantsql.com',
      port: 5432,
      username: 'zjgicjmq',
      password: 'CFbijl5RCO_hNygqjYNJQpJYFiQMhKcs',
      database: '',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class DatabaseModule {}
