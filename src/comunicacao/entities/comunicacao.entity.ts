import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Comunicacoes {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ length: 250 })
	nome: string;

	@Column({ length: 250 })
	email: string;

	@Column({ length: 250 })
	assunto: string;

	@Column()
	ativo: number;
}
