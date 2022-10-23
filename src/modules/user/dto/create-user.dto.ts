import { USER_TYPE } from '../user.type';

export class CreateUserDto {
  public name: string;
  public email: string;
  public avatar?: string;
  public password: string;
  public userType: USER_TYPE;
  public avatarImg?: string;
}
