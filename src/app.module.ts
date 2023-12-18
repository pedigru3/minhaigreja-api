import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { CreateUserController } from './controllers/user/create-user.controller';
import { envSchema } from './env';
import { AuthModule } from './auth/auth.module';
import { CreateChurchController } from './controllers/church/create-church.controller';
import { AuthenticateController } from './controllers/auth/authenticate.controller';
import { FetchChurchsController } from './controllers/church/fetch-churchs.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
  ],
  controllers: [
    CreateUserController,
    CreateChurchController,
    AuthenticateController,
    FetchChurchsController,
  ],
  providers: [PrismaService],
})
export class AppModule {}
