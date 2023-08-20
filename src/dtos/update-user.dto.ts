import { IsEmail, IsNotEmpty } from 'class-validator';

export default class UpdateUserDto {
  @IsNotEmpty()
  id: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  userName: string;

  @IsNotEmpty()
  roleIds: string[];
}
