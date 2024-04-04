import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModuleTsModule } from './users.module.ts/users.module.ts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'testuser',
      password: '',
      database: 'nestjs_mysql_tutorial',
      entities: [],
      synchronize: true,
    }),
    UsersModuleTsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
