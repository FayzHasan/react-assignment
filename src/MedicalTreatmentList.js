import React from 'react'
import MedicalTreatment from './MedicalTreatment.js'
import {medicalTreatmentListJson} from './MedicalRecords.js';

const medicalTreatmentList=(JSON.parse(medicalTreatmentListJson));

function MedicalTreatmentList (props) {


  
  const listRecords = medicalTreatmentList.map((record)=>
  <li>
    <MedicalTreatment treatId={record.treatId} treatCourseId={record.treatCourseId} type={record.type} category={record.category} name={record.name} startDate={record.startDate}/>
  </li>);  

  var filterCategory=medicalTreatmentList.filter(record=>{return record.category == "Critical"});
  
  const filteredListRecords = filterCategory.map((record)=>
  <li>
    <MedicalTreatment treatId={record.treatId} treatCourseId={record.treatCourseId} type={record.type} category={record.category} name={record.name} startDate={record.startDate}/>
  </li>);  
return (
  <div class="list-type1">
    <h2>All Records</h2>
    <ul>{listRecords}</ul>
    <br/><br/>

    <h2>Filtered Records</h2>
    <p>Records with conditon: Critical</p>
    <ul>{filteredListRecords}</ul>
  </div>
); }
export default MedicalTreatmentList;