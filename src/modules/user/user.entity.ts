import typegoose, { getModelForClass, defaultClasses } from '@typegoose/typegoose';
import { createSHA256 } from '../../utils/common.js';
import { User, USER_TYPE } from './user.type.js';

const { prop, modelOptions } = typegoose;

export interface UserEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'users',
  },
})
export class UserEntity extends defaultClasses.TimeStamps implements User {
  constructor({ name, email, userType, avatar, avatarImg }: User) {
    super();
    this.name = name;
    this.email = email;
    this.userType = userType;
    this.avatar = avatar;
    this.avatarImg = avatarImg;
  }

  @prop({ required: true, default: '' })
  public name: string;

  @prop({ unique: true, required: true })
  public email: string;

  @prop({ required: false })
  public avatar?: string;

  @prop({ required: true, default: '' })
  public password: string;

  @prop({ required: true, default: USER_TYPE.DEFAULT })
  public userType: USER_TYPE;

  @prop({ required: false })
  public avatarImg?: string;

  public setPassword(password: string, salt: string) {
    this.password = createSHA256(password, salt);
  }

  public getPassword() {
    return this.password;
  }
}

export const UserModel = getModelForClass(UserEntity);
