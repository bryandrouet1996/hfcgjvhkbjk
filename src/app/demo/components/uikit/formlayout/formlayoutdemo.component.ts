import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formlayoutdemo',
  templateUrl: './formlayoutdemo.component.html',
})
export class FormLayoutDemoComponent {
  // Definición del formulario
  encuestaForm: FormGroup;
  selectedState:any;
  dropdownItems:any=[];
  // Array de estados
  estados = [
    { nombre: 'Casa Cerrada', valor: 'casa_cerrada' },
    { nombre: 'Solar Vacío', valor: 'solar_vacio' },
    { nombre: 'Construcción Iniciada', valor: 'construccion_iniciada' },
    { nombre: 'Hogar Entrevistado', valor: 'hogar_entrevistado' },
    { nombre: 'Casa no Habitada', valor: 'casa_no_habitada' },
    { nombre: 'Solar con maleza', valor: 'solar_con_maleza' }
  ];
  calidadOpciones = [
    { nombre: 'Excelente', valor: 'excelente' },
    { nombre: 'Malo', valor: 'malo' },
    { nombre: 'Regular', valor: 'regular' },
    { nombre: 'Bueno', valor: 'bueno' },
    { nombre: 'Fatal', valor: 'fatal' },
   
  ];
  causas = [
    { nombre: 'Mala Alimentación', valor: 'mala_alimentacion' },
    { nombre: 'Entorno', valor: 'Entorno' },
    { nombre: 'El no-uso de medicamentosr', valor: 'no_medicamentos' },
    { nombre: 'Otros', valor: 'otros' },
    { nombre: 'No me gusta el médico ', valor: 'no_medico ' },
    { nombre: 'No tengo recursos para ir al médico', valor: 'no_recursos' },
    { nombre: 'Distancia con el sub-centro de salud ', valor: 'centro_salud' },
   
  ];
  servicio = [
    { nombre: 'Red pública', valor: 'red_pública' },
    { nombre: 'Pozo ciego', valor: 'pozo_ciego' },
    { nombre: 'pozo séptico ', valor: 'pozo_septico' },
    { nombre: ' río o canal', valor: 'rio' },
    { nombre: 'No tiene ', valor: 'no_tiene' },
   
   
  ];
  vivienda = [
    { nombre: 'Hormigón', valor: 'hormigon' },
    { nombre: 'Cartón', valor: 'solar_vacio' },
    { nombre: 'Madera', valor: ' madera' },
    { nombre: 'Zin', valor: 'zin' },
    { nombre: 'Plywood', valor: ' plywood' },
    { nombre: 'Plástico', valor: 'plastico' },
    { nombre: 'Mixta', valor: ' mixta' },
    { nombre: 'Caña', valor: 'caña' }
  ];
  basicos = [
    { nombre: 'Agua', valor: 'agua' },
    { nombre: 'Teléfono/Convencional', valor: 'telefono' },
    { nombre: 'Recolección de la Basura', valor: 'basura' },
    { nombre: 'Alcantarillado', valor: 'alcantarillado' },
    { nombre: ' Otros ', valor: ' Otros ' },
    { nombre: 'Celular', valor: 'celular' },
    { nombre: 'Luz', valor: 'luz' },
   
  ];
  domicilio = [
    { nombre: 'Casa', valor: 'casa' },
    { nombre: 'Paredes ', valor: 'paredes' },
    { nombre: 'Muebles y Enseres', valor: 'muebles' },
  ];
  alumbrado = [
    { nombre: 'Electricidad', valor: 'electricidad' },
    { nombre: 'Lámparas ', valor: 'lamparas' },
    { nombre: 'Gas', valor: 'gas' },
    { nombre: ' Otros', valor: 'otros' },
   
  ];
  tenenciavi = [
    { nombre: 'Propia', valor: 'propia' },
    { nombre: 'Prestada', valor: 'prestada' },
    { nombre: 'Abandonada', valor: 'abandonada' },
    { nombre: ' Donada', valor: 'donada' },
    { nombre: ' Alquilada', valor: 'alquilada' },
    { nombre: ' Invadida', valor: ' invadida' }
  ];
  abastece = [
    { nombre: 'Agua Potable', valor: 'potable' },
    { nombre: 'Cisterna', valor: 'cisterna' },
    { nombre: ' Pozo', valor: 'pozo' },
    { nombre: 'Tanquero ', valor: 'tanquero' },
    { nombre: 'Embotellada', valor: 'embotellada' },
    { nombre: 'Río', valor: 'rio' },
    { nombre: 'Otros', valor: 'otr' },
   
  ];
  documentos = [
    { nombre: 'Contrato de compra-venta', valor: 'mala_alimentacion' },
    { nombre: 'Derecho de posesión', valor: 'derecho' },
    { nombre: 'Escritura', valor: 'escritura' },
    { nombre: 'Ninguno', valor: 'ninguno' },
  ];
  bien = [
    { nombre: 'Internet', valor: 'internet' },
    { nombre: 'Lavadora', valor: 'lavadora' },
    { nombre: 'Cocina de gas', valor: 'cocina_gas' },
    { nombre: 'Cocina de inducción', valor: 'cocina_induc' },
    { nombre: 'Cocineta', valor: 'cocineta' },
    { nombre: ' TV', valor: 'tv' },
    { nombre: ' TV Cable', valor: 'tv_Cable' },
    { nombre: 'Laptop', valor: 'laptop' },
    { nombre: 'Refrigeradora', valor: 'refrigeradora' },
    { nombre: 'Computadora', valor: 'computadora' },
    { nombre: 'Plancha Eléctrica', valor: 'plancha_elec' },
    { nombre: 'Microondas', valor: 'microo' },
    { nombre: 'No quiso responder', valor: 'no_quiso' },
    { nombre: 'Otros  ', valor: 'otros  ' },
   
   
  ];
  zona = [
    { nombre: 'Deslave', valor: 'deslave' },
    { nombre: 'Desbordamientos del río', valor: 'desvordamientori' },
    { nombre: 'Inundaciones', valor: 'inundaciones' },
    { nombre: 'Incendios ', valor: 'incendios' },
    { nombre: ' Otros', valor: 'ot' },
    { nombre: 'No', valor: 'no' },
   
  ];
  capacita = [
    { nombre: 'Enfermería', valor: 'enfermeria' },
    { nombre: 'Mecánica Industrial', valor: 'mecanica' },
    { nombre: ' Belleza', valor: 'belleza' },
    { nombre: 'Manualidades', valor: 'manualidades' },
    { nombre: 'Arreglos de celulares', valor: 'arreglocel' },
    { nombre: 'Electricidad', valor: 'electricidad' },
    { nombre: 'Panadería', valor: 'panaderia' },
    { nombre: 'Gastronomía', valor: 'gastronomia' },
    { nombre: ' Ninguno', valor: 'ninguno' },
    { nombre: 'Liderazgo', valor: 'liderazgo' },
    { nombre: ' Gestión   Empresarial', valor: 'hogar_entre' },
    { nombre: ' Otro:_____________', valor: 'solar_con_maleza' },
  ];
  laboral = [
    { nombre: ' Esporádica', valor: 'espora' },
    { nombre: 'Por temporada', valor: 'portempo' },
    { nombre: 'A tiempo completo', valor: 'tiempo_comp' },
    { nombre: 'Parcial', valor: 'parcial' },
    { nombre: 'Pensionista', valor: 'pensionista' },
    { nombre: ' Cesante', valor: 'cesante' },
    { nombre: 'Ninguna', valor: 'ninguna' },
   
  ];
  actividadeco = [
    { nombre: 'Agricultura', valor: 'agricultura' },
    { nombre: 'Minería', valor: 'mineria' },
    { nombre: 'Actividades financieras y seguros', valor: 'actividadfinan' },
    { nombre: 'Actividades profesionales', valor: 'actividadpro' },
    { nombre: 'Pesca', valor: 'pesca' },
    { nombre: 'Científicas y técnicas', valor: 'cientificas' },
    { nombre: 'Actividades de servicios administrativos y de apoyo', valor: 'serviciosadmi' },
    { nombre: 'Administración pública y defensa', valor: 'eadminpubli' },
    { nombre: 'Industrias manufactureras', valor: 'indusmanu' },
    { nombre: 'Enseñanza', valor: 'enseñanza' },
    { nombre: 'Suministros de electricidad, gas, aire acondicionado', valor: 'suministros' },
    { nombre: 'Arreglos de celulares', valor: 'arreglocelulares' },
    { nombre: 'Actividades de la atención de la salud humana', valor: 'atencionsal' },
    { nombre: 'Distribución de agua, alcantarillado', valor: 'agualcant' },
    { nombre: 'Artes, entretenimiento y recreación', valor: 'artesentre' },
    { nombre: 'Construcción', valor: 'construc' },
    { nombre: 'Otras actividades de servicio', valor: 'activiser' },
    { nombre: 'Explotación de minas y canteras', valor: 'explotamin' },
    { nombre: 'Empleada domestica', valor: 'empledome' },
    { nombre: 'Albañil ', valor: 'albañil' },
    { nombre: 'Pescador', valor: 'pescador' },
    { nombre: 'Comercio al por mayor', valor: 'comerciomas' },
    { nombre: 'Comercio al por menor', valor: 'comerciomenos' },
    { nombre: 'Actividades inmobiliarias', valor: 'inmobiliarias' },
    { nombre: 'Actividades de alojamiento y servicio de comida', valor: 'alojamiento' },
    { nombre: 'Jornalero', valor: 'jornalero' },
    { nombre: 'Servido Publico', valor: 'serviciopubli' },
    { nombre: 'Ninguna', valor: 'ngn' },
  
 
  
  ];
  dependencia = [
    { nombre: 'Sí – formal (beneficios de ley)', valor: 'formal' },
    { nombre: 'Sí - Informal', valor: 'informal' },
    { nombre: ' No', valor: 'n' },
    { nombre: 'No quiso responder', valor: 'no_quiso' },
   
   
  ];
  reparticion = [
    { nombre: 'Pago alquiler de vivienda', valor: 'pago_vivienda' },
    { nombre: 'Pago de préstamo de vivienda', valor: 'pago_prestamo' },
    { nombre: 'Arreglo de la vivienda', valor: 'arreglo_vivienda' },
    { nombre: 'Vestimenta', valor: 'vestimenta' },
    { nombre: 'Alimentación', valor: 'alimentacioo' },
    { nombre: 'Salud ', valor: 'salu' },
    { nombre: 'Educación ', valor: 'educac' },
    { nombre: 'Serv.Básicos', valor: 'servicio_basicos' },
    { nombre: 'Movilidad', valor: 'movilida' },
    { nombre: 'Otros Gastos', valor: 'otros_gasto' },
    { nombre: 'Ahorro', valor: 'ahorro' },
    { nombre: 'Especifique', valor: 'especifique' },
    { nombre: 'Ahorro Formal', valor: 'ahorro_formal' },
    { nombre: 'Ahorro Informal', valor: 'ahorro_informal' },
    
  ];
  cuenta = [
    { nombre: 'Si - con RUC', valor: 'si_ruc' },
    { nombre: 'Si - con RISE', valor: 'si_rise' },
    { nombre: 'Sí', valor: 'sis' },
    { nombre: ' No', valor: 'nos' },
    { nombre: ' No quiso responder', valor: 'no_quis' },
   
  ];
  mensuales= [
    { nombre: 'Menos que salario basicos', valor: 'menos_salario' },
    { nombre: ' USD386 - USD500', valor: 'usd386' },
    { nombre: ' USD500 - USD750', valor: 'usd500' },
    { nombre: '  USD750 - USD999', valor: 'usd750' },
    { nombre: 'USD1,000+ ', valor: ' usd1000 ' },
    { nombre: 'No quiere responder', valor: 'no_responder' },
  ];
  ingremen = [
    { nombre: 'Trabajo', valor: 'trabajo' },
    { nombre: 'Bono por discapacidad', valor: 'bono_disc' },
    { nombre: 'Bono Madres Solteras', valor: 'bono_madre' },
    { nombre: 'Bono de Desarrollo Humano', valor: 'bono_desarrollo' },
    { nombre: 'Bono de la Tercera Edad', valor: 'bono_tercera' },
    { nombre: 'Apoyo  de ONG’s', valor: 'apoyo_ong' },
    { nombre: 'Pensiòn de Alimentos', valor: 'pensio_alimentos' },
    { nombre: 'Otros', valor: 'otros' },
    { nombre: 'Pension por Jubilacion', valor: 'pension_jubila' },
    
  ];
  actividades_barrio = [
    { nombre: 'Iglesia', valor: 'iglesiaab' },
    { nombre: 'Grupos LGBTI', valor: 'grupoab' },
    { nombre: 'Comité barrial', valor: 'comiteab' },
    { nombre: ' Clubes deportivos', valor: 'clubeab' },
    { nombre: 'Asociación de mujeres', valor: 'asoab' },
    { nombre: 'Otros', valor: 'otrosab' },
    { nombre: 'Asociación juvenil', valor: 'asojuve' },
    { nombre: ' Ningunas', valor: 'ningunab' },
   
  ];
  centro_aloja= [
    { nombre: 'Si', valor: 'sica' },
    { nombre: 'No', valor: 'noca' },
    { nombre: 'Nombre de alojamiento____________________', valor: 'nombreca' },
    
  ];
  ayuda_huma= [
    { nombre: 'Iglesia', valor: 'iglesiaah' },
    { nombre: 'Vecinos/as ', valor: 'vecinosah' },
    { nombre: ' Amigos/as', valor: 'amigosah' },
    { nombre: ' ONG’s: _________ ', valor: 'ongah' },
    { nombre: ' Familia  ', valor: 'familiah' },
    { nombre: 'Apoyo  de ONG’s', valor: 'apoyo_ongah' },
    { nombre: 'Institución pública: __________', valor: 'instituah' },
    { nombre: ' Otros:_______________ ', valor: 'otrosah' },
    { nombre: ' Ninguna', valor: 'ningunaah' },
    
  ];
  realiza_activ = [
    { nombre: 'Playa', valor: 'playara' },
    { nombre: 'Domicilio', valor: 'domiciliora' },
    { nombre: 'Río', valor: 'riora' },
    { nombre: 'Deporte', valor: 'deportera' },
    { nombre: 'Campo', valor: 'campora' },
    { nombre: 'Viajes', valor: 'viajesra' },
    { nombre: 'Parques', valor: 'parquera' },
    { nombre: 'Otros', valor: 'otrosra' },
   
  ];
  realiza_act = [
    { nombre: 'Playa', valor: 'playarac' },
    { nombre: 'Domicilio', valor: 'domiciliorac' },
    { nombre: 'Río', valor: 'riorac' },
    { nombre: 'Deporte', valor: 'deporterac' },
    { nombre: 'Campo', valor: 'camporac' },
    { nombre: 'Viajes', valor: 'viajesrac' },
    { nombre: 'Parques', valor: 'parquerac' },
    { nombre: 'Otros', valor: 'otrosrac' },
   
  ];
  mejorar_bar = [
    {nombre:  'Actividades recreativas', valor: 'actividades_Recre' },
    { nombre: 'Presencia de la Policía', valor: 'presencia_poli' },
    { nombre: 'Areas verdes', valor: 'areas_verdes' },
    { nombre: 'Agua potable', valor: 'agua_potable' },
    { nombre: 'Alcantarillado', valor: 'alcantarilladomb' },
    { nombre: 'Calles pavimentadas ', valor: 'calles_pavi' },
    { nombre: 'Alumbrado público', valor: 'alumbrado_publi' },
    { nombre: 'Recolección de basura ', valor: 'recoleccmb' },
    { nombre: ' Sub-centro de salud', valor: 'submb' },
    
  ];

  constructor(private fb: FormBuilder) {
    // Inicialización del formulario
    this.encuestaForm = this.fb.group({
      seleccion: [null]
    });
  }

  enviarEncuesta() {
    console.log('Respuesta de la encuesta:', this.encuestaForm.value);
  }
}
