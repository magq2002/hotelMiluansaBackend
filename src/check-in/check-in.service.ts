import { Injectable } from '@nestjs/common';
import { CreateCheckInDto } from './dto/create-check-in.dto';
import { UpdateCheckInDto } from './dto/update-check-in.dto';
import { InjectModel } from '@nestjs/mongoose';
import { CheckIn } from './entities/check-in.entity';
import { Model } from 'mongoose';

@Injectable()
export class CheckInService {

  constructor(
    @InjectModel( CheckIn.name )
    private checkInModel: Model<CheckIn>,
  ){}
  
  async create(createCheckInDto: CreateCheckInDto) {
    const newCheckIn = new this.checkInModel( createCheckInDto );
    await newCheckIn.save();
    return newCheckIn.toJSON();
  }

  findAll(): Promise<CheckIn[]>  {
    return this.checkInModel.find();
  }

  async findOne(id: string) {
    const reservation = await this.checkInModel.findById( id );
    return reservation;
  }

  async update(id: string, updateCheckInDto: UpdateCheckInDto) {
    const reservation = await this.checkInModel.findByIdAndUpdate( id, updateCheckInDto )
    return reservation;
  }

  async remove(id: string) {
    const reservation = await this.checkInModel.findByIdAndDelete( id );
    return reservation;
  }
}
