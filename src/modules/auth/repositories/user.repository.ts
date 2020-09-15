import { EmailLoginDto } from './../dto/email-login.dto';
import { Role } from './../../../commons/enum/role';
import { User } from './../entities/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import {
  NotFoundException,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findByEmail(email: string): Promise<User> {
    return await this.findOne({ email });
  }
  async findByUsername(username: string): Promise<User> {
    return await this.findOne({ username });
  }

  async validationUserPassword(emailLoginDto: EmailLoginDto) {
    const { email, password } = emailLoginDto;
    const user = await this.findByEmail(email);
    if (!user) throw new NotFoundException('user does not found');
    if (user && (await user.validationPassword(password)))
      return { email, user };
    else throw new BadRequestException('your password not correct');
  }

  async validationAdminPassword(emailLoginDto: EmailLoginDto) {
    const { email, password } = emailLoginDto;
    const user = await this.findByEmail(email);
    if (!user) throw new NotFoundException('user does not found');
    const isAdmin = (): boolean => user.role.some(role => role == Role.ADMIN);
    if (!isAdmin())
      throw new ForbiddenException('this user does not has admin');
    if (user && (await user.validationPassword(password)))
      return { email, user };
    else throw new BadRequestException('your password not correct');
  }
}
