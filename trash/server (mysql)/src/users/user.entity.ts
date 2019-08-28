import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    username: string;

    @Column({ length: 25 })
    email: string;

    @Column({ length: 25 })
    password: string;

    // @Column()
    // isActive: boolean;
}
