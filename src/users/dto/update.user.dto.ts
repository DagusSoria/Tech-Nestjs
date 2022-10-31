import { IsString, IsEmail, IsOptional } from "class-validator";
import { CreateUserDto } from "./create.user.dto";

export class UpdateUserDto {
    @IsOptional()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsString()
    name: string;
}
