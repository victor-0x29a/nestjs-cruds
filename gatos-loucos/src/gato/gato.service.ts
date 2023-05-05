import { Injectable, NotFoundException } from '@nestjs/common';
import { Gato } from './entities/gato.entity';
import { CreateGatoDto } from './dto/create-gato.dto/create-gato.dto';


@Injectable()
export class GatoService {
    private gatos : Gato[] = [
        {
            id: 0,
            cor: "branco",
            name: "Irineu",
            raca: "pirata"

        }
    ]

    findAll () : Gato[] {
        return this.gatos;
    }

    findOne ( name : string ) {
        const Gato = this.gatos.find( ( gato ) => gato.name === name )
        if ( !Gato ) {
            throw new NotFoundException( `Gato nao encontrado`, 'Nao encontrado' )
        }

        return Gato
    }

    create ( createGatoDTO : CreateGatoDto ) {
        this.gatos.push( {
            id: this.gatos.length,
            ...createGatoDTO
        } )
    }

    update ( name : string, updateGatoDTO : any ) {
        const indexCat = this.gatos.findIndex( ( gato ) => gato.name === name )
        this.gatos[ indexCat ] = updateGatoDTO
    }

    remove ( name : string ) {
        const indexCat = this.gatos.findIndex( ( gato ) => gato.name === name )

        if ( indexCat >= 0 ) {
            this.gatos.splice( indexCat, 1 )
        } else {
            throw new NotFoundException( `Gato nao encontrado`, 'Nao encontrado' )
        }
    }

}
