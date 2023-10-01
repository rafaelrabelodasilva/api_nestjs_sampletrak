import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Amostras {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 250 })
    refFornecedor: string;

    @Column({ length: 250 })
    refCliente: string;

    @Column({ length: 250 })
    nomeFornecedor: string;

    @Column({ length: 250 })
    nomeCliente: string;

    @Column({ length: 250 })
    descricaoAmostra: string;

    @Column({ length: 250 })
    corAmostra: string;

    @Column({ length: 250 })
    colecaoAmostra: string;

    @Column({ length: 250 })
    respCustoAmostra: string;

    @Column()
    enviarAmostra: string;

    @Column({ length: 250 })
    prevFinAmostra: string;

    @Column({ length: 250 })
    amostraFinEm: string;

    @Column({ length: 250 })
    statusEnvioAmostra: string;

    @Column({ length: 250 })
    statusAproAmostra: string;

    @Column()
    ativo: number;
}
