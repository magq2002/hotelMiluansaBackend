import { IsEmail, IsNumber, IsString } from "class-validator";

export class CreateCheckInDto {


    @IsString()
    name: string;

    @IsString()
    nuip_type: string;

    @IsNumber()
    nuip: number;

    @IsString()    
    dateBirth: string;

    @IsString()
    city: string;

    @IsString()
    address: string;

    @IsString()
    phone: string;

    @IsEmail()
    email: string;

    @IsString()
    health: string;

}
