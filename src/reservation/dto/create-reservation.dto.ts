import { IsNumber, IsString } from "class-validator";

export class CreateReservationDto {


    @IsString()
    name: string;

    @IsNumber()
    adults: string;

    @IsNumber()
    children: string;

    @IsNumber()
    room: string;

    @IsString()
    checkIn: string;

    @IsString()
    checkOut: string;
    
}
