import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/User";
import { CreateUserParams, UpdateUserParams } from "src/ultis/types";
import { Repository } from "typeorm";

@Injectable()
export class UsersService{

    constructor(@InjectRepository(User) private userRepository: Repository<User>,){}

    findUsers(){
        return this.userRepository.find();
    }

    createUser(userDetails: CreateUserParams){
        const newUser = this.userRepository.create({
            ...userDetails,
            createAt: new Date()
         })
         return this.userRepository.save(newUser);
    }

    updateUser(id: number, updateUserDetails: UpdateUserParams) {
        return this.userRepository.update({ id }, { ...updateUserDetails });
    }
    
    deleteUser(id: number) {
        return this.userRepository.delete({id });
    }
}
// code service
