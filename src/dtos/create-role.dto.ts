import { IsNotEmpty } from 'class-validator';

export default class CreateRoleDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  permissionIds: string[];
}
