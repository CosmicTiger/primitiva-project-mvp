import { Module } from '@nestjs/common';
import { AuthenticationModule } from './authentication/authentication.module';
import { BcryptService } from './hashing/bcrypt.service';
import { HashingService } from './hashing/hashing.service';

@Module({
  imports: [AuthenticationModule],
  providers: [BcryptService, HashingService]
})
export class IamModule {}
