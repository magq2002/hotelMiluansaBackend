import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation } from './entities/reservation.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ReservationService {

  constructor(
    @InjectModel( Reservation.name )
    private reservationModel: Model<Reservation>,
  ){}
  async create(createReservationDto: CreateReservationDto): Promise<Reservation> {
    const newReservation = new this.reservationModel( createReservationDto );
    await newReservation.save();
    return newReservation.toJSON();
  }

  async findAll(): Promise<Reservation[]> {
    return this.reservationModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} reservation`;
  }

  update(id: number, updateReservationDto: UpdateReservationDto) {
    return `This action updates a #${id} reservation`;
  }

  remove(id: number) {
    return `This action removes a #${id} reservation`;
  }
}
