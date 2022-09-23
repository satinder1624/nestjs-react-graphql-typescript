import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig,ApolloDriver } from '@nestjs/apollo';
import { ServerRegistration } from 'apollo-server-express';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://satinder24:hYAbPFegzka9EwaX@cluster0.csduyt5.mongodb.net/nest-demo?retryWrites=true&w=majority'),
    GraphQLModule.forRoot<ApolloDriverConfig>({
        driver: ApolloDriver,
        autoSchemaFile: 'schema.gql',
        cors: {
          origin: 'http://localhost:7042',
          method: "GET,HEAD,PUT,PATCH,POST,DELETE",
          credentials: true,
        },
    }),
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
