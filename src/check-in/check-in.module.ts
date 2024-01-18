import { Module } from '@nestjs/common';
import { CheckInService } from './check-in.service';
import { CheckInController } from './check-in.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CheckIn, CheckInSchema } from './entities/check-in.entity';

@Module({
  controllers: [CheckInController],
  providers: [CheckInService],
  imports: [
    MongooseModule.forFeature([
      {
        name: CheckIn.name,
        schema: CheckInSchema
      }
    ]),
  ]
})
export class CheckInModule {}
