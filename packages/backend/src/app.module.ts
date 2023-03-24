import { Module } from "@nestjs/common";

import { PingModule } from "./ping/ping.module";
import { DbModule } from "./db/db.module";

@Module({
  imports: [PingModule, DbModule]
})
export class AppModule {}
