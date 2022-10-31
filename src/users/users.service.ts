import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { User, UserDocument } from 'src/users/schema/users.schema';
import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUserDto } from './dto/update.user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}
    
    async create(createUserDto: CreateUserDto): Promise<User>{
        const createdUser = new this.userModel(createUserDto);
        return createdUser.save();
    }

    async findAll(): Promise<User[]>{
        return this.userModel.find();
    }

    async findOne(query: any): Promise<User> {
        return this.userModel.findOne(query);
    }

    async update(_id: string, updateUserDto: UpdateUserDto): Promise<User>{
        const updateUser = await this.userModel.findOneAndUpdate({_id}, updateUserDto, { new: true });
        return updateUser;
    }

    async delete(id: string): Promise<User>{
        const deleteUser = await this.userModel.findOneAndDelete({_id: id});
        return deleteUser; 
    }   
}