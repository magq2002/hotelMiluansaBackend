import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateReservationDto {


    @IsString()
    name: string;

    @IsNumber()
    adults: string;

    @IsNumber()
    children: string;

    @IsNumber()
    room: string;

    @IsDate()
    checkIn: Date;

    @IsDate()
    checkOut: Date;
    
}
