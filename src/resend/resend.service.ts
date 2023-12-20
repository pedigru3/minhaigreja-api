import { Env } from '@/env';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Resend } from 'resend';

@Injectable()
export class ResendService extends Resend {
  constructor(config: ConfigService<Env, true>) {
    super(config.get('RESEND_KEY'));
  }
}
