import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Rendeles } from "./rendeles.entity";

@Entity()
export class Csavar {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tipus: string;

    @Column()
    hossz: number;

    @Column()
    keszlet: number;
    
    @Column()
    ar: number;

    
}