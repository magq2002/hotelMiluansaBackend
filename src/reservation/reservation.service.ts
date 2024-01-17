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

  async findOne(id: string) {
    const reservation = await this.reservationModel.findById( id );
    return reservation;
  }

  async update(id: string, updateReservationDto: UpdateReservationDto) {
    const reservation = await this.reservationModel.findByIdAndUpdate( id, updateReservationDto )
    return reservation;
  }

  async remove(id: string) {
    const reservation = await this.reservationModel.findByIdAndDelete( id );
    return reservation;
  }
}
