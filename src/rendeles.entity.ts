import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Csavar } from "./csavar.entity";

@Entity()
export class Rendeles {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    csavar_id: number;

    @Column()
    db: number;


}