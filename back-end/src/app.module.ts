import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { EventsModule } from './Events';

@Module({
  imports: [
    EventsModule,
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot(process.env.EVENTS_DATABASE_CONNECTION),
  ],
})
export class AppModule {}
