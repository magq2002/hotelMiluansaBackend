import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class CheckIn {

    _id?: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    nuip_type: string;

    @Prop({ required: true })
    nuip: number;

    @Prop({ required: true })  
    dateBirth: string;

    @Prop({ required: true })
    city: string;

    @Prop({ required: true })
    address: string;

    @Prop({ required: true })
    phone: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    health: string;
}

export const CheckInSchema = SchemaFactory.createForClass( CheckIn );

