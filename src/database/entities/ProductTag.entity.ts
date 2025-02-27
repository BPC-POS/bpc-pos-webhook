import { Entity, Column, ManyToOne } from 'typeorm';
import type { Relation } from 'typeorm';
import { CustomBaseEntity } from '../../common/abstract.entity';
import { Product, Tag } from './index';

@Entity({ name: 'product_tags' })
export class ProductTag extends CustomBaseEntity {
    @Column()
    product_id!: number;

    @Column()
    tag_id!: number;

    @ManyToOne(() => Product, product => product.productTags)
    product!: Relation<Product>;

    @ManyToOne(() => Tag, tag => tag.productTags)
    tag!: Relation<Tag>;
}