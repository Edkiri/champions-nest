import { IsString } from 'class-validator';

export class AddMemberDto {
  @IsString()
  code: string;
}
