import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CreateUserDto } from "src/dtos/CreateUser.dto";
import { UsersService } from "./users.service";
import { UpdateUserDto } from "src/dtos/UpdateUser.dto";

@Controller('users')
export class UsersController{
    
    constructor(private readonly usersService: UsersService){}
    
    @Get()
    async getUsers(){
        const users = await this.usersService.findUsers();
        return users;
    }

    @Post()
    createUsers(@Body() createUserDto: CreateUserDto){
        return this.usersService.createUser(createUserDto);
    }

    @Put(':id')
    async updateUserById(
        @Param('id',ParseIntPipe) id: number, 
        @Body() updateUserDto: UpdateUserDto
    ){
       await this.usersService.updateUser(id,updateUserDto);
    }

    @Delete(':id')
    async deleteUserById(@Param('id',ParseIntPipe) id: number){
       await this.usersService.deleteUser(id);
    }
    //update 8
}