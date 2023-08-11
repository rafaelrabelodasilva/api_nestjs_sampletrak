import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Fornecedores {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 250 })
    nome: string;

    @Column({ length: 250 })
    endereco: string;

    @Column({ length: 250 })
    cidade: string;

    @Column({ name: 'estado_provincia', length: 250 })
    estadoProvincia: string;

    @Column({ length: 250 })
    pais: string;

    @Column()
    ativo: number;
}
