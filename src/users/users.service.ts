import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/User";
import { CreateUserParams } from "src/ultis/types";
import { Repository } from "typeorm";

@Injectable()
export class UsersService{

    constructor(@InjectRepository(User) private userRepository: Repository<User>,){}

    findUsers(){

    }

    createUser(userDetails: CreateUserParams){
        const newUser = this.userRepository.create({
            ...userDetails,
            createAt: new Date()
         })
         return this.userRepository.save(newUser);
    }
}