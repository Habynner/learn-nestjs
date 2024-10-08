/* eslint-disable */
import { Type } from 'class-transformer';
import {
    ArrayMinSize,
    IsArray,
    IsNotEmpty,
    IsNumber,
    IsString,
    IsUrl,
    IsUUID,
    MaxLength,
    Min,
    ValidateNested,
} from 'class-validator';
import { ProdutcEntity } from '../product.entity';

export class ProductCharacteristicsDTO {
    id: string;

    @IsString()
    @IsNotEmpty({ message: 'Nome da cadasterística não pode ser vazio' })
    name: string;

    @IsString()
    @IsNotEmpty({ message: 'Descrição da característica não pode ser vazio' })
    description: string;

    produto: ProdutcEntity;
}

export class ProductImageDTO {
    id: string;

    @IsUrl()
    url: string;

    @IsString()
    @IsNotEmpty({ message: 'Descrição da imagem não pode ser vazia' })
    description: string;

    produto: ProdutcEntity;
}

export class CreateProductDTO {
    @IsUUID(undefined, { message: 'ID de usuário inválido' })
    userId: string;

    id: string;

    @IsString()
    @IsNotEmpty({ message: 'Nome do produto não pode ser vazio' })
    name: string;

    @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
    @Min(1, { message: 'O valor precisa ser maior que zero' })
    value: number;

    @IsNumber()
    @Min(0, { message: 'Quantidade mínima inválida' })
    quantity: number;

    @IsString()
    @IsNotEmpty({ message: 'Descrição do produto não pode ser vazia ' })
    @MaxLength(1000, {
        message: 'Descrição não pode ter mais que 1000 caracteres',
    })
    description: string;

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(1)
    @Type(() => ProductCharacteristicsDTO)
    characteristics: ProductCharacteristicsDTO[];

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(1)
    @Type(() => ProductImageDTO)
    images: ProductImageDTO[];

    @IsString()
    @IsNotEmpty({ message: 'Categoria do produto não pode ser vazia' })
    category: string;


  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}
