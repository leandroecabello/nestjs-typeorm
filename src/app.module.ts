import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import Joi from 'joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { DatabaseModule } from './database/database.module';
import { enviroments } from './enviroments';
import config from './config';
/* import { configSchema } from './configSchema'; */

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      /* validationSchema: configSchema, */
    }),
    UsersModule,
    ProductsModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    /*   {
      provide: 'TASKS',
      useFactory: async (http: HttpServer) => {
        return await http
          .get('https://jsonplaceholder.typicode.com/todos')
          .toPromise();
      },
      inject: [HttpServer],
    }, */
  ],
})
export class AppModule {}
