import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  usuarioForm: FormGroup;
  perfiles: any[] = [];

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.usuarioForm = this.fb.group({
      usuario: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      id_perfil: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.apiService.getPerfiles().subscribe(data => {
      this.perfiles = data;
    });
  }

  onSubmit() {
    if (this.usuarioForm.valid) {
      this.apiService.createUsuario(this.usuarioForm.value).subscribe(response => {
        console.log('Usuario creado:', response);
      });
    }
  }
}