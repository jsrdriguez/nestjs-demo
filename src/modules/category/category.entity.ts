import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Product } from "../product/product.entity";

@Entity('categories')
export class Category extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column({type: 'varchar', nullable: false})
    name:string;

    @Column({type: 'varchar', nullable: true})
    description:string;

    @Column({type: 'boolean', default: true})
    status: boolean;

    @CreateDateColumn({type: 'timestamp', name: 'created_at'})
    createdAt:Date;

    @UpdateDateColumn({type: 'timestamp', name: 'updated_at'})
    updatedAt:Date;
}