import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Patient} from "../../../security/model/patient";
import {Diagnosis} from "../../../home/model/diagnosis";
import {PatientService} from "../../../security/services/patient.service";
import {DiagnosisService} from "../../../home/services/diagnosis.service";
import {MedicalHistory} from "../../../health-record-expertise/model/medical-history/medical-history";
import {MedicalHistoryService} from "../../../health-record-expertise/services/medical-history.service";
import {MatDialog} from "@angular/material/dialog";
import {MedicalHistoryFormComponent} from "../medical-history-form/medical-history-form.component";
import {Storage, ref, uploadBytes, listAll, getDownloadURL, getStorage} from '@angular/fire/storage';


@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent {
  patientLoggedId = 0;
  patient$: Observable<Patient> | undefined
  medicalHistory!: MedicalHistory
  lastDiagnosis$: Observable<Diagnosis> | undefined
  images: string

  constructor(private storage: Storage,private patientService: PatientService, private diagnosisService: DiagnosisService, private medicalHistoryService: MedicalHistoryService, private dialog: MatDialog) {
    this.images = "";
  }

  ngOnInit(): void {
    this.patient$ = this.patientService.getPatientLogged();
    this.lastDiagnosis$ = this.diagnosisService.getLastDiagnosis();
    this.getPatient();

  }

  getPatient(){
    this.patientService.getPatientLogged().subscribe((response: any) => {
      this.patientLoggedId = response.id;
      console.log(this.patientLoggedId);
      this.fetchMedicalHistory();
    });
  }
  fetchMedicalHistory() {
    if (this.patientLoggedId) {
      this.medicalHistoryService.getByPatientId(this.patientLoggedId).subscribe(
        (response: any) => {
          this.medicalHistory = response;
          console.log(response);
        },
        (error: any) => {
          console.error('Error fetching medical history', error);
        }
      );
    }
  }
  openMedicalHistoryDialog() {
    const dialogRef = this.dialog.open(MedicalHistoryFormComponent, {
      width: '4000px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.fetchMedicalHistory();
    });
  }
  openFileInput() {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  }

  uploadImage($event: any) {
    const file = $event.target.files[0];
    console.log(file);
    const storage = getStorage(); // Asegúrate de inicializar Firebase Storage correctamente
    const imgRef = ref(storage, `images/${file.name}`);

    this.patientService.getPatientLogged().subscribe((patient: Patient) => {
      const patientId = patient.id; // Obtén el ID del paciente actual
      uploadBytes(imgRef, file)
        .then(async (snapshot) => {
          console.log('Imagen subida con éxito');
          const photoUrl = await getDownloadURL(imgRef); // Obtenemos la URL de la imagen subida
          this.patientService.updateProfilePhoto(patientId, photoUrl);

        })
        .catch((error) => {
          console.error('Error al subir la imagen', error);
        });
    });
  }
  goBack() {
    window.history.back();
  }
}
