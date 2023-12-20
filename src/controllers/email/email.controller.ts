import { CurrentUser } from '@/auth/current-user-decorator';
import { JwtAuthGuard } from '@/auth/jwt-guardian';
import { UserPayload } from '@/auth/jwt.strategy';
import { PrismaService } from '@/prisma/prisma.service';
import { ResendService } from '@/resend/resend.service';
import {
  Controller,
  Get,
  InternalServerErrorException,
  UseGuards,
} from '@nestjs/common';

@Controller('/send')
export class EmailController {
  constructor(
    private resend: ResendService,
    private prisma: PrismaService,
  ) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async handle(@CurrentUser() userPayload: UserPayload) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userPayload.sub,
      },
    });

    if (!user) {
      throw new InternalServerErrorException('User must be valid.');
    }

    try {
      const data = await this.resend.emails.send({
        from: 'refugiouniversitario@resend.dev',
        to: ['contosdeferreira@hotmail.com'],
        subject: 'Que bom te ver aqui no Refúgio!',
        html: `
       
        `,
      });

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
}
