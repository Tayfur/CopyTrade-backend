import { DatabaseModule } from './config/database.module';
import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule, UserModule],
})
export class AppModule {}
