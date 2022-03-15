import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioRepository } from 'src/usuario/usuario.repository';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsuarioRepository]),
    JwtModule.register({
      secret: 'super-secret',
      signOptions: {
        expiresIn: 18000,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}
