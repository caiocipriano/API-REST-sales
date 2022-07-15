import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
export class Product{
    
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    name:string;

    @Column('decimal')
    price:number;

    @Column('int')
    quantity:number;

    @CreateDateColumn()
    created_at:Date;

    @CreateDateColumn()
    uptated_at:Date;
}

export default Product;