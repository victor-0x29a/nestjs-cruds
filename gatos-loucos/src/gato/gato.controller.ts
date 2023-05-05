import { Controller, Get, Param, Post, Body, HttpCode, HttpStatus, Res, Patch, Put, Delete } from '@nestjs/common';
import { GatoService } from './gato.service';
import { CreateGatoDto } from './dto/create-gato.dto/create-gato.dto';

@Controller('gato')
export class GatoController {
    constructor(private readonly GatoService: GatoService) {
    }

    @Get()
    findAll() {
        return this.GatoService.findAll()
    }

    @Get(':name')
    findOne(
        @Param('name') nome
    ) {
        return this.GatoService.findOne(nome)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() corpo: CreateGatoDto) {
        return this.GatoService.create(corpo)
    }

    @Get('/t/:ok')
    findOneOk(@Param('ok') message: string, @Res() response) {
        if (message.length < 5) {
            return response.status(400).send("not allowed")
        }
        return response.status(200).send(message)
    }

    @Patch(':name/:color')
    alterColor(@Param() cat) {
        return JSON.stringify(`Gato: ${cat.name} | Nova cor: ${cat.color}`)
    }

    @Put(':name')
    alterCat(@Body() corpo, @Param('name') nome) {
        return this.GatoService.update(nome, corpo)
    }

    @Delete(':name')
    delCat(@Param('name') gato) {
        return this.GatoService.remove(gato)
    }
}
