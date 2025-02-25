import { Entity, Column, OneToMany } from 'typeorm';
import { CustomBaseEntity } from '../../common/abstract.entity';
import { ProductTag } from './index';

@Entity({ name: 'tags' })
export class Tag extends CustomBaseEntity {
    @Column()
    name!: string;

    @Column()
    status!: number;

    @OneToMany(() => ProductTag, productTag => productTag.tag)
    productTags!: ProductTag[];
}