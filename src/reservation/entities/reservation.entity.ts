import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class Reservation {

    _id?: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    adults: number;

    @Prop({ default: null })
    children: number;

    @Prop({ required: true })
    room: number;

    @Prop({ required: true })
    checkIn: string;

    @Prop({ required: true })
    checkOut: string;

}

export const ReservationSchema = SchemaFactory.createForClass( Reservation );

