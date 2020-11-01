export interface ResponseData {
  ok: boolean;
  usuario: Usuarios[];
}

export interface Usuarios {
  id_usuario: number;
  num_identifica_us: number;
  tipo_identifica_us: string;
  nombre_us: string;
  direccion_us: string;
  ciudad_us: string;
  departamento_us: string;
  telefono_us: string;
  correo_us: string;
  estado_us: number;
  nom_contacto_uno_us: string;
  tel_contacto_uno_us: string;
  nom_contacto_dos_us: string;
  tel_contacto_dos_us: string;
  fecha_registro_us: string;
}


export interface ResponseOrienta {
  ok: boolean;
  orientacion: Orientacion[];
}

export interface Orientacion {
  tipoViolencia: string;
  tipoAgresor: string;
  titulo: string;
  texto: string;
}



export interface ResponseEntidad {
  ok: boolean;
  entidades: Entidad[];
}

export interface Entidad {
  id: number;
  cod_enti: number;
  nombre_enti: string;
  direccion_enti: string;
  barrio_enti: string;
  telefono_enti: string;
  celular_enti: string;
  lat_enti: string;
  lng_enti: string;
}

