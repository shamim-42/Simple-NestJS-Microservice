import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Transport } from "@nestjs/microservices";
// import { config } from "@commerce/shared";

async function bootstrap() {
    const app = await NestFactory.createMicroservice(AppModule, {
        transport: Transport.REDIS,
        options: {
            // url: `redis://${process.env.REDIS_URL}:${process.env.REDIS_PORT}`
            url: `redis://localhost:6379`
        }
    });
    await app.listen(() => console.log(`notification processor is listening `));
}
bootstrap();