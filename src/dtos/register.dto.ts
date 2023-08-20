import { IsEmail, IsNotEmpty } from 'class-validator';

export default class RegisterDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  userName: string;

  @IsNotEmpty()
  password: string;
}
