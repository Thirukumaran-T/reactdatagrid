import React from 'react';
import ManageClinicStaffs from './ManageClinicStaffs';

const data = {
  "active_staffs": [
    {
      "staff_name": "vj",
      "role": 1,
      "is_active": true,
      "staff_id": "00000163",
      "is_doctor": false,
      "emp_id": "V00001"
    },
    {
      "role": 2,
      "is_active": true,
      "staff_id": "00000103",
      "doctor_name": "Dr.Vijay",
      "is_doctor": true,
      "emp_id": "D00001"
    },
    {
      "staff_name": "testNurse",
      "role": 3,
      "is_active": true,
      "staff_id": "00000029",
      "is_doctor": false,
      "emp_id": "T00001"
    },
    {
      "staff_name": "TestUser001",
      "role": 4,
      "is_active": true,
      "staff_id": "00000170",
      "is_doctor": false,
      "emp_id": "T00002"
    }
  ],
  "inactive_staffs": [
    {
      "role": 2,
      "is_active": false,
      "staff_id": "00000032",
      "doctor_name": "Dr.NurseQwerty",
      "is_doctor": true,
      "emp_id": "N00001"
    },
    {
      "staff_name": "New User",
      "role": 4,
      "is_active": false,
      "staff_id": "00000169",
      "is_doctor": false,
      "emp_id": "N00002"
    },
    {
      "staff_name": "Sithik",
      "role": 4,
      "is_active": false,
      "staff_id": "00000025",
      "is_doctor": false,
      "emp_id": "S00003"
    },
    {
      "role": 4,
      "is_active": false,
      "staff_id": "00000017",
      "doctor_name": "Dr.Stalin",
      "is_doctor": true,
      "emp_id": "S00002"
    }
  ],
  "invited_staffs": [
    {
      "staff_name": "prabhu",
      "invite_id": "vfXoMLPDN0FkqNd3iAfUJwObiLrUcI",
      "role": 4,
      "is_expired": true,
      "invite_status": 0,
      "is_doctor": false
    },
    {
      "staff_name": "Dr.Sithik",
      "invite_id": "iXWrcqXL1cl53w1k1aHSqdf3IREM3p",
      "role": 2,
      "is_expired": true,
      "staff_id": "00000025",
      "invite_status": 0,
      "is_doctor": true
    },{
      "staff_name": "abd",
      "invite_id": "p6vxwxgqzFtFvA9fiBNvr0o1056lqZ",
      "role": 4,
      "is_expired": true,
      "invite_status": 3,
      "is_doctor": false
    },
    {
      "staff_name": "ASD",
      "invite_id": "1srg9bebiTYxeTZYJrzHTA2a12BisO",
      "role": 4,
      "is_expired": true,
      "invite_status": 3,
      "is_doctor": false
    },
    {
      "staff_name": "Dr.Stalin",
      "invite_id": "k4tSNHFMJuA6S60b9XfeYgrAahEWm8",
      "role": 2,
      "is_expired": true,
      "staff_id": "00000017",
      "invite_status": 3,
      "is_doctor": true
    }
  ]
};

function App() {
  return (
    <div className="App">
      <ManageClinicStaffs data={data} />
    </div>
  );
}

export default App;
