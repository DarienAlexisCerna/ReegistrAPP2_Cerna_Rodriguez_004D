export interface Users{
    id: number;
    nombre: string;
    password :string;
    role: string;
    isactive: boolean

}
export interface Iasistencias{
    id: number;
    nombre: string;
    apellido:string;
    rut:string;
    seccion:string;

}

export interface Iasistencia{
    nombre: string;
    apellido:string;
    rut:string;
    seccion:string;

}

export interface Iregistrar{
    id: number;
    nombre: string;
    contrasena: string;
    rut: string;
    isactive: boolean
}


