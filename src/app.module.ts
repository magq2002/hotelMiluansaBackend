import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from './auth/auth.module';
import { ReservationModule } from './reservation/reservation.module';
import { CheckInModule } from './check-in/check-in.module';


@Module({
  imports: [
    ConfigModule.forRoot(),

    MongooseModule.forRoot( process.env.MONGO_URI ),

    AuthModule,

    ReservationModule,

    CheckInModule,
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {

  constructor() {
    
  }
}
