import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuarios {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'primeiro_nome', length: 150 })
    primeiroNome: string;

    @Column({ length: 150 })
    sobrenome: string;

    @Column({ name: 'data_nascimento' })
    dataNascimento: Date;

    @Column({ length: 150 })
    email: string;

    @Column({ length: 250 })
    senha: string;

    @Column()
    ativo: number;

}
