import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Produtos {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 150 })
    nome: string;

    @Column({ length: 150 })
    genero: string;

    @Column({ length: 150 })
    categoria: string;

    @Column({ length: 150 })
    anuencia: string;

    @Column({ length: 150 })
    ncm: string;

    @Column()
    ativo: number;
}
