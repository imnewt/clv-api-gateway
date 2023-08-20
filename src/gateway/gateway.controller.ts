import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import axiosInstance from 'src/configs/axiosConfig';
import {
  LoginDto,
  RegisterDto,
  TokenDto,
  CreateUserDto,
  UpdateUserDto,
  CreateRoleDto,
  UpdateRoleDto,
} from 'src/dtos';
import { API_BASE_URL } from 'src/utils/constants';

@Controller()
export class GatewayController {
  // Auth
  @Post('auth/login')
  async login(@Body() loginDto: LoginDto) {
    try {
      const response = await axiosInstance.post(
        `${API_BASE_URL}/api/auth/login`,
        loginDto,
      );
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  @Post('auth/register')
  async register(@Body() registerDto: RegisterDto) {
    try {
      const response = await axiosInstance.post(
        `${API_BASE_URL}/api/auth/register`,
        registerDto,
      );
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  @Post('auth/refresh-token')
  async refreshToken(@Body() tokenDto: TokenDto) {
    try {
      const response = await axiosInstance.post(
        `${API_BASE_URL}/api/auth/refresh-token`,
        tokenDto,
      );
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  // Users
  @Get('users')
  async getUsers(@Query() query) {
    const { searchTerm, pageNumber, pageSize } = query;
    try {
      const response = await axiosInstance.get(
        `${API_BASE_URL}/api/users?searchTerm=${searchTerm}&pageNumber=${pageNumber}&pageSize=${pageSize}`,
      );
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  @Post('users/create')
  async createUser(@Body() createUserDto: CreateUserDto) {
    try {
      const response = await axiosInstance.post(
        `${API_BASE_URL}/api/users/create`,
        createUserDto,
      );
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  @Get('users/:id')
  async getUserById(@Param('id') userId: string) {
    try {
      const response = await axiosInstance.get(
        `${API_BASE_URL}/api/users/${userId}`,
      );
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  @Patch('users/:id')
  async updateUser(
    @Param('id') userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    try {
      const response = await axiosInstance.patch(
        `${API_BASE_URL}/api/users/${userId}`,
        updateUserDto,
      );
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  @Delete('users/:id')
  async deleteUser(@Param('id') userId: string) {
    try {
      const response = await axiosInstance.delete(
        `${API_BASE_URL}/api/users/${userId}`,
      );
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  // Roles
  @Get('roles')
  async getRoles(@Query() query) {
    const { searchTerm, pageNumber, pageSize } = query;
    try {
      const response = await axiosInstance.get(
        `${API_BASE_URL}/api/roles?searchTerm=${searchTerm}&pageNumber=${pageNumber}&pageSize=${pageSize}`,
      );
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  @Post('roles/create')
  async createRoles(@Body() createRoleDto: CreateRoleDto) {
    try {
      const response = await axiosInstance.post(
        `${API_BASE_URL}/api/roles/create`,
        createRoleDto,
      );
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  @Get('roles/:id')
  async getRoleById(@Param('id') roleId: string) {
    try {
      const response = await axiosInstance.get(
        `${API_BASE_URL}/api/roles/${roleId}`,
      );
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  @Patch('roles/:id')
  async updateRole(
    @Param('id') roleId: string,
    @Body() updateRoleDto: UpdateRoleDto,
  ) {
    try {
      const response = await axiosInstance.patch(
        `${API_BASE_URL}/api/roles/${roleId}`,
        updateRoleDto,
      );
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  @Delete('roles/:id')
  async deleteRole(@Param('id') roleId: string) {
    try {
      const response = await axiosInstance.delete(
        `${API_BASE_URL}/api/roles/${roleId}`,
      );
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  // Permissions
  @Get('permissions')
  async getPermissions(@Query() query) {
    const { searchTerm, pageNumber, pageSize } = query;
    try {
      const response = await axiosInstance.get(
        `${API_BASE_URL}/api/permissions?searchTerm=${searchTerm}&pageNumber=${pageNumber}&pageSize=${pageSize}`,
      );
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
}
