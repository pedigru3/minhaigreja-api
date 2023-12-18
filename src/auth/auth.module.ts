import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthenticateController } from 'src/controllers/auth/authenticate.controller';
import { Env } from 'src/env';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      global: true,
      useFactory(config: ConfigService<Env, true>) {
        const privateKey = config.get('JWT_PRIVATE', { infer: true });
        const publicKey = config.get('JWT_PUBLIC', { infer: true });

        return {
          signOptions: {
            algorithm: 'RS256',
          },
          publicKey: Buffer.from(publicKey, 'base64'),
          privateKey: Buffer.from(privateKey, 'base64'),
        };
      },
    }),
  ],
  controllers: [AuthenticateController],
})
export class AuthModule {}
