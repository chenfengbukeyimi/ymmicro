import * as Bcrypt from 'bcrypt';
type BryptMimor = 'a' | 'b';

export function BryptSalt(rounds: number = 10, mimor?: BryptMimor): string {
  return Bcrypt.genSaltSync(rounds, mimor);
}

export function BryptEncode(data: string, salt?: string): string {
  !salt && (salt = BryptSalt());
  return Bcrypt.hashSync(data, salt);
}

export function BryptCompare(data: string, hash: string): boolean {
  return Bcrypt.compareSync(data, hash);
}
