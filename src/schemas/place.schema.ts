import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";

export type PlaceDocument = Document & Place

export type PlaceLoc = {
    lat: number;
    lng: number;
}

@Schema()
export default class Place {
    @ApiProperty()
    @Prop({ required: true })
    id: string;

    @ApiProperty()
    @Prop()
    name: string;

    @ApiProperty()
    @Prop()
    location: string;

    @ApiProperty()
    @Prop({ type: [String] })
    address: PlaceLoc;

    @ApiProperty()
    @Prop()
    images: string[] | null;

    @ApiProperty()
    @Prop()
    price: number;

    @ApiProperty()
    @Prop()
    types: string[];
}

export const PlaceSchema = SchemaFactory.createForClass(Place)