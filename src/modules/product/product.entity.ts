import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Category } from "../category/category.entity";

@Entity('products')
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column({type: 'varchar', nullable: false})
    name:string;

    @Column({type: 'varchar', nullable: true})
    description:string;

    @Column({type: 'double precision', nullable: false})
    price:number;

    @ManyToOne(type => Category, { nullable: false, eager: true})
    @JoinColumn({ name: 'category_id'})
    category: Category;

    @Column({ type: 'boolean', default: true })
    status: boolean;

    @CreateDateColumn({type: 'timestamp', name: 'created_at'})
    createdAt:Date;

    @UpdateDateColumn({type: 'timestamp', name: 'updated_at'})
    updatedAt:Date;
}