import { PartialType } from '@nestjs/mapped-types';
import { CreateSupplierDto } from './criar-fornecedor.dto';

export class UpdateSupplierDto extends PartialType(CreateSupplierDto) {}
