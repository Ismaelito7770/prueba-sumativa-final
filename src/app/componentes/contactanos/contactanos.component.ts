import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SolicitudFormularioService } from '../../servicios/solicitud-formulario/solicitud-formulario.service';
import { TecnicoEmpresaService } from '../../servicio/tecnico_empresa/tecnico-empresa.service';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrl: './contactanos.component.css'
})
export class ContactanosComponent {
  formularioForm;
  solicitudes_formulario:any;
  datos_formulario: any;
  constructor(private formBuild: FormBuilder, private solicitudFormularioSrv:SolicitudFormularioService, private tecnico_empresa:TecnicoEmpresaService){
    this.formularioForm = this.formBuild.group({
      nombre: '',
      apellido: '',
      correo: '',
      telefono: '',
      mensaje: ''
    });
  }
  ngOnInit(){
    
  }
  enviarDatos(){
    this.solicitudFormularioSrv.registrarFormulario(this.formularioForm.value).subscribe(
      (response:any) => {
        
        this.datos_formulario = response.solicitud_formulario
        console.log(this.datos_formulario);        
        alert("Datos guardados correctamente");
        this.formularioForm.reset();
      },error => {
        console.log(error);
      }
    )   
  }
  obtenerSolicitudesFormulario(){
    this.solicitudFormularioSrv.obtenerSolicitudesFormulario().subscribe(
      (response:any) => {        
        this.solicitudes_formulario = response.solicitud_formulario;          
        console.log(this.solicitudes_formulario);
      }, error => {
        console.log(error);
      }
    )
  }

}