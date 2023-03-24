import { Module } from "@nestjs/common";
import { TypeOrmModule, type TypeOrmModuleOptions } from "@nestjs/typeorm";

type DBType = TypeOrmModuleOptions["type"] & "none";
const type = process.env.DB_TYPE as DBType;

const dbProperties: TypeOrmModuleOptions = {
  type: process.env.DB_TYPE as DBType,
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
};

@Module({
  imports: [type !== "none" && TypeOrmModule.forRoot(dbProperties)].filter(Boolean)
})
export class DbModule {}
