import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSupplierDto } from './dto/criar-fornecedor.dto';
import { UpdateSupplierDto } from './dto/atualizar-fornecedor.dto';
import { Supplier } from './entities/fornecedor.entity';

@Injectable()
export class SuppliersService {
    private suppliers: Supplier[] = [];

    create(createSupplierDto: CreateSupplierDto) {
        const currentMaxId = this.suppliers[this.suppliers.length - 1]?.id || 0;

        const id = currentMaxId + 1;

        const supplier = {
            id,
            ...createSupplierDto,
        };

        this.suppliers.push(supplier);
        return supplier;
    }

    findAll() {
        return this.suppliers;
    }

    findOne(id: number) {
        const index = this.suppliers.findIndex(
            (supplier) => supplier.id === id
        );

        return this.suppliers[index];
    }

    update(id: number, updateSupplierDto: UpdateSupplierDto) {
        const supplier = this.findOne(id);

        const newSupplier = {
            ...supplier,
            ...updateSupplierDto,
        };

        const index = this.suppliers.findIndex(
            (supplier) => supplier.id === id
        );

        this.suppliers[index] = newSupplier;
        return newSupplier;
    }

    remove(id: number) {
        const index = this.suppliers.findIndex(
            (supplier) => supplier.id === id
        );

        if(index === -1) {
            throw new NotFoundException(`User with id ${id} not found.`)
        }
        this.suppliers.splice(index, 1);
    }
}
