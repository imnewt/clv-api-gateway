import { IsNotEmpty } from 'class-validator';

export default class UpdateRoleDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  permissionIds: string[];
}
